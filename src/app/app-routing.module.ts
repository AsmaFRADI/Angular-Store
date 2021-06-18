import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/list-users',
      pathMatch: 'full',
    },
    {
      path: '',
      loadChildren: () => import('./UI/layout/layout.module').then(m => m.LayoutModule)
    },
    {
      path: '**',
      redirectTo: 'not-found'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
