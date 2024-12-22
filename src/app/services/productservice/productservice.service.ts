import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  public productid : any;
  constructor() { }


  public getproductid(id:any){
    this.productid = id;
  }

  public returnid(){
    return this.productid;
  }
}
