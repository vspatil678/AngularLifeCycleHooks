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
     ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
