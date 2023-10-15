import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BMIconModule } from 'src/lib-components/bm-icon/bm-icon.module';
import { BmCardComponent } from 'src/lib-components/bm-card/bm-card.component';
import { BmCardTemplateComponent } from 'src/lib-components/bm-card-template/bm-card-template.component';
import { BmCardTemplateOutletComponent } from 'src/lib-components/bm-card-template-outlet/bm-card-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BMIconModule,
    BmCardComponent,
    BmCardTemplateComponent,
    BmCardTemplateOutletComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
