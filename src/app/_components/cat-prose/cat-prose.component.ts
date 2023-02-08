import { Component, OnInit } from '@angular/core';
import { Article } from '@app/_models/article';
import { ArticleService } from '@app/_services/article.service';

@Component({
  selector: 'app-cat-prose',
  templateUrl: './cat-prose.component.html',
  styleUrls: ['./cat-prose.component.css']
})
export class CatProseComponent implements OnInit {
  articles: Article[] = []

  constructor (private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
    
  }

  getArticles(): void {
    this.articleService.getAllArticles()
      .subscribe(data => {
        this.articles = Object.values(data)
      })
      ;
  }
}
