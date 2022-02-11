import { Component, OnInit } from '@angular/core';
import { Article } from '../common/model/article';
import { ArticleService } from '../common/service/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  article!: Article;
  articles!: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles() {
    this.articleService.getArticles().subscribe((data: Article[]) => this.articles = data);
  }
}
