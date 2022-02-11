import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './exo/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListArticleComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
