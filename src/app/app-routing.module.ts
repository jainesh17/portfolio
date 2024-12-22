import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { PorfolioComponent } from './component/porfolio/porfolio.component';

const routes: Routes = [

  {path: 'home-page', component:HomePageComponent},
  {path:'porfolio',component:PorfolioComponent},
  {path:'product/:id',component:ProductComponent, pathMatch: "full"},
 {path:'contact',component:ContactComponent},
 {path:'',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
