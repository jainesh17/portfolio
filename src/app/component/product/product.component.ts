import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice/productservice.service';

interface Product {
  id: string,
  name: string,
  description: string,
  imageURL: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  public id: any;
  constructor(public productservice: ProductserviceService,
    private http: HttpClient,
    private _router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {

   


  }


}
