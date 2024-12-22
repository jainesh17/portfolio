import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ProductComponent } from './component/product/product.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroComponent } from './component/hero/hero.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { PorfolioComponent } from './component/porfolio/porfolio.component';
import { TeamComponent } from './component/team/team.component';
import { ContactComponent } from './component/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLoaderComponent } from './component/page-loader/page-loader/page-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateComponent } from './component/certificate/certificate.component';
import { WePromoteComponent } from './component/we-promote/we-promote.component';
import { ServiceComponent } from './component/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    AboutusComponent,
    PorfolioComponent,
    TeamComponent,
    ContactComponent,
    PageLoaderComponent,
    CertificateComponent,
    WePromoteComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
