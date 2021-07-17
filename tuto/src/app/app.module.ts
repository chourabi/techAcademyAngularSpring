import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletewhitespacePipe } from './deletewhitespace.pipe';
import { HideemailPipe } from './hideemail.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { BlocArticlesComponent } from './bloc-articles/bloc-articles.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    DeletewhitespacePipe,
    HideemailPipe,
    NavbarComponent,
    BlocArticlesComponent,
    ArticlePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
