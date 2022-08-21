import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { FloatingInfoComponent } from './components/floating-info/floating-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovingBlockComponent } from './components/moving-block/moving-block.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FloatingInfoComponent,
    MovingBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
