import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallserviceService } from 'src/app/modules/services/callservice.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private callService: CallserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['term'] || '';
      this.searchProducts();
    });
  }

  searchProducts() {
    if (this.searchTerm) {
      this.callService.getAllProduct().subscribe(res => {
        this.products = res.data || [];
      });
    }
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }
}
