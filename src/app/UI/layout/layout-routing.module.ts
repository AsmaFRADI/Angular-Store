import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContainerComponent} from './container/container.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
