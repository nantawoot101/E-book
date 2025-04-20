import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { DashBoardAdminComponent } from './modules/dash-board-admin/dash-board-admin.component';
import { ManageUsersComponent } from './modules/manage-users/manage-users.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ManageProductComponent } from './modules/manageProduct/manageProduct.component';
import { ProductComponent } from './modules/product/product.component';
import { UpdateProductComponent } from './modules/updateProduct/updateProduct.component';
import { ProductDetailComponent } from './modules/productDetail/productDetail.component';
import { CartComponent } from './modules/cart/cart.component';
import { NewAddressComponent } from './modules/new-address/new-address.component';
import { AddressComponent } from './modules/address/address.component';
import { UpdateAddressComponent } from './modules/update-address/update-address.component';
import { OrderComponent } from './modules/order/order.component';
import { ManageOrderComponent } from './modules/manage-order/manage-order.component';
import { OrderItemComponent } from './modules/orderItem/orderItem.component';
import { ChatComponent } from './modules/chat/chat.component';
import { AppChatComponent } from './modules/app-chat/app-chat.component';
import { OrderDetailComponent } from './modules/orderDetail/orderDetail.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { ManagePaymentComponent } from './modules/manage-payment/manage-payment.component';
import { OrderTrackingComponent } from './modules/order-tracking/order-tracking.component';
import { OrderHistoryComponent } from './modules/order-history/order-history.component';
import { ReviewComponent } from './modules/review/review.component';
import { ReportComponent } from './modules/report/report.component';
import { ProductTypeComponent } from './modules/product-type/product-type.component';
import { NewProductTypeComponent } from './modules/new-product-type/new-product-type.component';
import { UserDetailComponent } from './modules/manage-users/userDetail/userDetail.component';



const routes: Routes = [
  {
    path: '',
    component: FullwidthComponent,
    children: [{
      path: '',
      component: HomeComponent
    },{
      path: 'register',
      component: RegisterComponent
    },{
      path: 'login',
      component: LoginComponent
  },{
    path: 'dash-board-admin',
    component: DashBoardAdminComponent
  },{
    path: 'manage-users',
    component: ManageUsersComponent
  },{
    path: 'profile/:userId',
    component: ProfileComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'manage-product',
    component: ManageProductComponent
  },{
    path: 'product',
    component: ProductComponent
  },{
    path: 'product/:productId',
    component: UpdateProductComponent
  },{
    path: 'productDetail/:productId',
    component: ProductDetailComponent 
  },{
    path: 'cart',
    component: CartComponent 
  },{
    path: 'address',
    component: AddressComponent
  },{
    path: 'new-address',
    component: NewAddressComponent
  },{
    path: 'update-address',
    component: UpdateAddressComponent
  },{
    path: 'order',
    component: OrderComponent
  },{
    path: 'manage-order',
    component: ManageOrderComponent
  },{
    path: 'orderItem',
    component: OrderItemComponent
  },{
    path: 'orderDetail/:orderId',
    component: OrderDetailComponent
  },{
    path: 'chat',
    component: ChatComponent
  },{
    path: 'app-chat',
    component: AppChatComponent
  },{
    path: 'notifications',
    component: NotificationsComponent
  },{
    path: 'personal',
    component: PersonalComponent
  },{
    path: 'manage-payment',
    component: ManagePaymentComponent
  },{
    path: 'order-tracking/:orderItemId',
    component: OrderTrackingComponent
  },{
    path: 'order-history',
    component: OrderHistoryComponent
  },{
    path: 'review/:orderItemId',
    component: ReviewComponent
  },{
    path: 'report',
    component: ReportComponent
  },{
    path: 'product-type',
    component: ProductTypeComponent
  },{
    path: 'new-product-type',
    component: NewProductTypeComponent
  },{
    path: 'user-detail/:userId',
    component: UserDetailComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
