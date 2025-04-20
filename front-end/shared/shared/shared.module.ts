import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderAdminComponent } from './component/header-admin/header-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderAdminComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderAdminComponent
  ]
})
export class SharedModule { }
