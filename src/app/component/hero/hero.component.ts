import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  downloadPdf(): void {
    const pdfUrl = '../../../assets/Jainesh Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'jainesh-resume.pdf';
    link.click();
  }
}
