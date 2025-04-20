import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/modules/DataSharingService';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
  userDetail: any;

  constructor(
    private dataSharingService: DataSharingService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    const userDetailSession: string | null = sessionStorage.getItem("userDetail");

    if (userDetailSession) {
      this.userDetail = JSON.parse(userDetailSession);
    } else {
      this.userDetail = null; // หรือจัดการกับกรณีไม่มีข้อมูล
    }
  }

  logout() {
    sessionStorage.removeItem("userDetail");
    sessionStorage.removeItem("userId");
    this.dataSharingService.userDetail.next(false);
    this.router.navigate(['/']).then(() => {
      // Refresh the page after navigation
      window.location.reload();
    });
  }
}
