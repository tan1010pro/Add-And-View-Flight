import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlightListComponent } from './flight-list/flight-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    AddFlightComponent,
    FlightDetailComponent,
    MessagesComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule ,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule ,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule ,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,HttpClientModule,
    MatChipsModule,
    ReactiveFormsModule,
  
    

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
