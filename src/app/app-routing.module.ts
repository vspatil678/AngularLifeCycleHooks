import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CommentsListComponent } from './comments-list/comments-list.component';


const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'LifeCycleHook', component: CommentsListComponent
      },
      {
        path: 'order-list',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'Communication',
        loadChildren: () => import('./component-communication/component-communication.module').then(mod => mod.ComponentCommunicationModule)
      },
      {
        path: 'customer-list',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
    ],
  },
  {
    // should be last
    path: '**', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
