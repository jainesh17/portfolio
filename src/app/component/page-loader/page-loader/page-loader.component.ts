import { ChangeDetectorRef, Component } from '@angular/core';
import { PageloaderService } from 'src/app/services/page-loader/pageloader.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css']
})
export class PageLoaderComponent {
  windowWidth: any;
  showSplash = true;
  shownavbar = false;
  public showLoader : boolean= false;

  constructor(private loaderService: PageloaderService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.init();
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 2000);
    }, 2000);
    this.shownavbar = !this.shownavbar;
    
  }
  init() {
    this.loaderService.getSpinnerObserver().subscribe((status) => {
      this.showLoader = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
}