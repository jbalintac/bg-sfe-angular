import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
