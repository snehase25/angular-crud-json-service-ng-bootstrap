import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { DetailMemberComponent } from './member/detail-member/detail-member.component';
import { ListMemberComponent } from './member/list-member/list-member.component';
import { UpdateMemberComponent } from './member/update-member/update-member.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListMemberComponent },
  { path: 'create', component: CreateMemberComponent },
  { path: 'update', component: UpdateMemberComponent },
  { path: 'detail', component: DetailMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
