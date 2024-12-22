import { HttpClient } from '@angular/common/http';
import { Component, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice/productservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public jsonData: any;
  constructor(private renderer: Renderer2, private _router: Router, private http: HttpClient, public productservice: ProductserviceService) { }
  ngOnInit(): void {
  
  }

  downloadPdf(): void {
    const pdfUrl = '../../../assets/Jainesh Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'jainesh-resume.pdf';
    link.click();
  }
}
