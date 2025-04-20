import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/modules/DataSharingService';
import { CallserviceService } from 'src/app/modules/services/callservice.service';
import { ThemeService } from 'src/app/modules/services/themeService';
import { environment } from 'src/environments/environment';

interface CartItem {
  productId: number;
  cartQuantity: number;
}

interface ApiResponse {
  data: CartItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetail: any;
  cartItemCount: number = 0;
  searchTerm: string = ''; // For search input
  imgBaseUrl = environment.API_ENDPOINT + '/upload/input/profile/';
  showNotifications: boolean = false;
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private callService: CallserviceService,
    private cd: ChangeDetectorRef,
    private themeService: ThemeService
  ) {
    this.dataSharingService.userDetail.subscribe(value => {
      const userDetailSession: any = sessionStorage.getItem("userDetail");
      this.userDetail = JSON.parse(userDetailSession);
      this.cd.markForCheck();
      this.isDarkMode = this.themeService.isDarkMode();  // Mark for check instead of detect changes
    });
  }

  ngOnInit() {
    const userDetailSession: any = sessionStorage.getItem("userDetail");
    this.userDetail = JSON.parse(userDetailSession);
    this.loadCartItemsCount();

    if (this.userDetail?.userId) {
      this.callService.getByUserId(this.userDetail.userId).subscribe(res => {
        if (res.data) {
          this.userDetail = res.data;
          sessionStorage.setItem("userDetail", JSON.stringify(this.userDetail));
          this.cd.markForCheck();  // Mark for check instead of detect changes
        }
      });
    }
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications; 
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  loadCartItemsCount() {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.callService.getCartByUserId(userId).subscribe((res: ApiResponse) => {
        this.cartItemCount = res.data.length;
      });
    }
  }

  searchProduct() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search-results'], { queryParams: { term: this.searchTerm } });
    }
  }

  logout() {
    sessionStorage.removeItem("userDetail");
    sessionStorage.removeItem("userId");
    this.dataSharingService.userDetail.next(false);
    this.router.navigate(['/']);
  }
}

