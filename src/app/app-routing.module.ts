import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from "./main-page/main-page.component"
import { ItemAddComponent } from "./item-add/item-add.component"
import { ItemDetailComponent } from "./item-detail/item-detail.component"

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'add', component: ItemAddComponent },
  { path: 'detail/:id', component: ItemDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
