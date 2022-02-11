import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  {path: '', component: ListArticleComponent },
  {path: 'article/:idArticle', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
