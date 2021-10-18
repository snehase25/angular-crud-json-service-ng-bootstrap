import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { DetailMemberComponent } from './detail-member/detail-member.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';

const routes: Routes = [
    { path: '', component: ListMemberComponent },
    { path: 'create', component: CreateMemberComponent },
    { path: 'detail', component: DetailMemberComponent },
    { path: 'list', component: ListMemberComponent },
    { path: 'update', component: UpdateMemberComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
