import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core/core.module';

import { AppComponent } from './app.component';
import { AgmPolygonWithBoundsDirective } from './agm-polygon-with-bounds.directive';

@NgModule({
  declarations: [
    AppComponent,
    AgmPolygonWithBoundsDirective
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'Enter your google api key here'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
