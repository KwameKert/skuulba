import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
import {  MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, 
  MatMenuModule, MatListModule, MatExpansionModule } from '@angular/material';
  import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule,  MatCardModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './modules/shared/shared.module';
import { TableComponent } from './shared/widgets/table/table.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({preventDuplicates: true}), 
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,  
    MatCardModule, 
    MatTableModule, 
    MatPaginatorModule,
    SharedModule,
    MatDatepickerModule,
    HttpClientModule,

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
