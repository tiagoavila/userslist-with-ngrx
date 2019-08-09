import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; 
import { AccordionModule } from 'primeng/components/accordion/accordion';  
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/reducers/app.reducers';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { CreateTutorialComponent } from './components/create-tutorial/create-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    CreateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, AccordionModule, OrderListModule, ButtonModule, InputTextModule,
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
