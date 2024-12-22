import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private renderer: Renderer2, private _router :Router) {}

  public mainproduct(){
    this._router.navigateByUrl('product');
  }
}
