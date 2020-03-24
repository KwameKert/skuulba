import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

  // @Inject(MAT_DIALOG_DATA) public data: any) { }
  billDate : Date;
  billDueDate : Date;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data)
    this.billDate = new Date(this.data.billDate);
    this.billDueDate = new Date(this.data.billDueDate);
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
          text: `INVOICE #+${this.data.code}`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: `Bill To : ${this.data.studentName}`,
            },
            ],
            [
              {
                text: `Date Issued : new Date(${this.billDate})`,
              },
              {
                text: `Date Due : ${this.billDueDate}`,
              },
              
             
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
