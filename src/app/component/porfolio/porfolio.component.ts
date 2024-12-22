import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice/productservice.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {
  jsonData: any;
  constructor(private renderer: Renderer2, private _router :Router,private http: HttpClient, public productservice: ProductserviceService) {}

  public mainproduct(){
    this._router.navigateByUrl('/product');
  }

  ngOnInit() {
    this.http.get('../../../assets/products.json').subscribe(data => {
      this.jsonData = data;
    }),
    (error: any) => {
      console.error('Error:', error);
    }
  }

  public getid(id: any): void {
this.productservice.getproductid(id);
  }
}
