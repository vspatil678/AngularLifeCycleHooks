import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';
import { ParentComponent } from './using-input/parent/parent.component';
import { ChildComponent } from './using-input/child/child.component';
import { ComponentOneComponent } from './using-services/component-one/component-one.component';
import { ComponentTwoComponent } from './using-services/component-two/component-two.component';
import { ParentOutputComponent } from './using-output/parent/parent.component';
import { ChildOutComponent } from './using-output/child/child.component';
import { CommunicationComponent } from './communication/communication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ParentOutputComponent,
    ChildOutComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    CommunicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    ComponentCommunicationRoutingModule
  ]
})
export class ComponentCommunicationModule { }
