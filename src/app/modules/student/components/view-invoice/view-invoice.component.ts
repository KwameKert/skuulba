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
          text: `INVOICE #${this.data.code}`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
        columns: [
          [{
            text: `Bill To  : ${this.data.studentName}` 
          }],
          [{
            text: `Date Issued : ${this.billDate}`  
          },
          {
            text: `Date Issued : ${this.billDate}`  
          },
          {
            text: ''  
          }] 
         ]
        },
        this.getItemObject(this.data.invoiceItems)
      ],
    
        styles: {
          name: {
            fontSize: 16,
            bold: true
          }
        }
    };
    
   }




   getItemObject(items: any) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Item',
            style: 'tableHeader'
          },
          {
            text: 'Quantity',
            style: 'tableHeader'
          },
          {
            text: 'Rate',
            style: 'tableHeader'
          },
          {
            text: 'Amount',
            style: 'tableHeader'
          },
          ],
          ...items.map(item => {
            return [item.name,item.quantity,item.rate,item.amount];
          })
        ]
      }
    };
  }

}
