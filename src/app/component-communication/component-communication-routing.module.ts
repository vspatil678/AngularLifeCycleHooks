import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './using-input/child/child.component';
import { ComponentOneComponent } from './using-services/component-one/component-one.component';
import { ParentOutputComponent } from './using-output/parent/parent.component';
import { CommunicationComponent } from './communication/communication.component';
import { ParentComponent } from './using-input/parent/parent.component';


const routes: Routes = [
  {
    path: 'Types', component: CommunicationComponent, children: [
      {
        path: 'ThroughInput', component: ParentComponent, data: { title: 'Through Input' }
      },
      {
        path: 'ThroughOutput', component: ParentOutputComponent, data: { title: 'Through Output' }
      },
      {
        path: 'ThroughServices', component: ComponentOneComponent, data: { title: 'Through Services' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule { }



