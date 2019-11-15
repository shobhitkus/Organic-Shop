import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  products: Product[];
  subscription: Subscription;
  @Input('category') category;

  constructor(categoryService: CategoryService,
    private productService: ProductService,
    private productsComponent: ProductsComponent
    ) { 
    this.categories$ = categoryService.getAll();
    this.subscription = this.productService.getAll()
    .subscribe(products => {
        const temp: any[] = products;
        this.products = temp;
      });

  }
 // filter(query){
 //   this.productsComponent.filterProducts(query);
 // }
  ngOnInit() {
  }

}
