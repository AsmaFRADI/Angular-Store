import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import {SharedModule} from '../../shared/shared.module';
import {LayoutRoutingModule} from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ContainerComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ],
})
export class LayoutModule { }
