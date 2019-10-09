import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BlockComponent} from './block/block.component';
import {BlockStylesDirective} from './block/block-styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BlockStylesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
