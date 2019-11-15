import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { observable, from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGaurdService as AuthGaurd, AuthGaurdService } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGaurdService as AdminAuthGaurd } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms'; 
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import {ProductFilterComponent} from './products/product-filter/product-filter.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ShoppingCartService} from './shopping-cart.service';
import {ProductQuantityComponent} from './product-quantity/product-quantity.component'
import { OrderService } from './order.service';
import {ShoppingCartSummaryComponent} from "./shopping-cart-summary/shopping-cart-summary.component"
import {ShippingFormComponent} from './shipping-form/shipping-form.component';
import {OrderViewComponent } from './order-view/order-view.component';
import {ListOrderViewComponent} from './list-order-view/list-order-view.component';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderViewComponent,
    ListOrderViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    DataTableModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot ([
     { path:'', component: ProductsComponent},
     { path: 'products', component: ProductsComponent},
     { path: 'login', component: LoginComponent},
     { path: 'shopping-cart', component: ShoppingCartComponent},

     { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGaurd]},

     { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd]},
     { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGaurd]},

     { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGaurd] },
      { path: 'order-view/:id/:date', component: OrderViewComponent, canActivate: [AuthGaurd] },
      { path: 'order-view', component: OrderViewComponent, canActivate: [AuthGaurd] },

      { path: 'admin/products/new', 
      component: ProductFormComponent,
      canActivate: [AuthGaurd, AdminAuthGaurd]},
      
      { path: 'admin/products/:id', 
      component: ProductFormComponent,
      canActivate: [AuthGaurd, AdminAuthGaurd]},
      
     { path: 'admin/products', 
     component: AdminProductsComponent,
     canActivate: [AuthGaurd, AdminAuthGaurd]},
    
      { path: 'admin/orders', 
      component: AdminOrdersComponent,
      canActivate: [AuthGaurd, AdminAuthGaurd]}
    ])
  ],
  providers: [
    AuthService,
    AuthGaurd,
    AdminAuthGaurd,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService, 
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 