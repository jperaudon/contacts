import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService } from '../common/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id!: number;
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('idArticle');
      this.getArticle(id);
    })
  }

  getArticle(id: number) {
    this.articleService.getArtcile(id);
  }
}
