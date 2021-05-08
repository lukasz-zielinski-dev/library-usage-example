import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// my-lib
import { MyLibraryModule } from 'my-library';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
