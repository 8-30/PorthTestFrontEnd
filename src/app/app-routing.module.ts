import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './component/message/message.component';

const routes: Routes = [{
  path:'', component: MessageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
