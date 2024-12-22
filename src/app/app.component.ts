import { Component, Renderer2 } from '@angular/core';
import { PageloaderService } from './services/page-loader/pageloader.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'megallp';
  public navbarcall = false;

  public NavMenuCssClass: any = null || 'collapse';
  private innerWidth: any;
  public tsb: any;

  constructor(private pageLoaderServices: PageloaderService, private titlePage: Title, private renderer: Renderer2) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pageLoaderServices.requestStarted();
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 850 && this.innerWidth < 1150) {
      this.NavMenuCssClass = "collapse";
    } else if (this.innerWidth > 1150) {
      this.NavMenuCssClass = null;
    } else {
      this.NavMenuCssClass = null;
    }
    setTimeout(() => {
      this.pageLoaderServices.requestEnded();
      this.navbarcall = !this.navbarcall
    }, 2000)

  }

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    script.onload = () => {
      // Script loaded successfully
      console.log('Main.js loaded!');
    };
    script.onerror = () => {
      // Error loading script
    };

    this.renderer.appendChild(document.body, script);
  }

  pageTitle(title: string) {
    this.titlePage.setTitle(title);
  }
}
