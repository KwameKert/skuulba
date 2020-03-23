import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generatePdf();
  }

  generatePdf(){
   // const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(this.getDocumentDefinition()).open();
  }  


  getDocumentDefinition() {
    
     return {
       content: [
         {
           text: 'INVOICE',
           bold: true,
           fontSize: 20,
           alignment: 'center',
           margin: [0, 0, 0, 20]
         },
         {
           columns: [
             [{
               text: 'Hello',
               style: 'name'
             },
             {
               text: 'Hello'
             },
             {
               text: 'Email : ' ,
             },
             {
               text: 'Contant No : ',
             },
             {
               text: 'GitHub: ',
               link: 'this.resume.socialProfile',
               color: 'blue',
             }
             ],
             [
              {
                text: 'Hello'
              },
              {
                text: 'Email : ' ,
              },
              {
                text: 'Contant No : ',
              },
              {
                text: 'GitHub: ',
                link: 'this.resume.socialProfile',
                color: 'blue',
              }
             ]
           ]
         }],
         styles: {
           name: {
             fontSize: 16,
             bold: true
           }
         }
     };
   }

}
