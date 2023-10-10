import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'src/lib-components/bm-accordion/accordion.module';
import { BMIconModule } from 'src/lib-components/bm-icon/bm-icon.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BMIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
