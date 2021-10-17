import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMemberComponent } from './create-member/create-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateMemberComponent,
    UpdateMemberComponent,
    ListMemberComponent,
    DetailMemberComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MemberModule { }
