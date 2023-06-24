import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgpCaptchaModule } from 'ngp-captcha';
import { NgpRichTextEditorModule } from 'ngp-rich-text-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpCaptchaModule,
    ReactiveFormsModule,
    NgpRichTextEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
