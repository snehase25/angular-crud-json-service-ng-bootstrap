import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './member/list/list.component';
import { EditComponent } from './member/edit/edit.component';
import { AddComponent } from './member/add/add.component';
import { DetailComponent } from './member/detail/detail.component';
import { MessageComponent } from './shared/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    AddComponent,
    DetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
