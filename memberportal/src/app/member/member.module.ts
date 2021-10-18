import { NgModule } from '@angular/core';
import { MemberRoutingModule } from './member-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateMemberComponent } from './create-member/create-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { DetailMemberComponent } from './detail-member/detail-member.component';




@NgModule({
  declarations: [
    CreateMemberComponent,
    UpdateMemberComponent,
    ListMemberComponent,
    DetailMemberComponent
  ],
  imports: [
    MemberRoutingModule,
    SharedModule
  ]
})
export class MemberModule { }
