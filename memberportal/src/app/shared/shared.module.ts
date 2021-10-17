import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MessageComponent
  ]
})
export class SharedModule { }
