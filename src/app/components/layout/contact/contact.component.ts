import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusable/header/header.component';
import { CommonModule } from '@angular/common';
import { PdfService } from '../../../services/pdf.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contacts:any[] = [
    {
      name: 'brianfreijomil@hotmail.com',
      type: 'text',
      contact: 'brianfreijomil@hotmail.com',
      icon: '/assets/images/gmail_new_logo_icon_159149.svg',
    },
    {
      name: 'linkedin',
      type: 'link',
      contact: 'https://www.linkedin.com/in/brianfreijomil/',
      icon: '/assets/images/linkedin_icon-icons.com_65929.svg',
    },
    {
      name: 'GitHub',
      type: 'link',
      contact: 'https://github.com/brianfreijomil',
      icon: '/assets/images/github-logo_icon-icons.com_73546.svg',
    },
    {
      name: '2494323210',
      type: 'text',
      contact: '2494323210',
      icon: '/assets/images/Whatsapp_icon-icons.com_66931.svg',
    }
  ];


  constructor(private pdfService: PdfService) {}

  downloadPdf() {
    this.pdfService.downloadPDF().subscribe((response: Blob) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'brian_freijomil_cv.pdf'; // Nombre del archivo que se descargará
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
