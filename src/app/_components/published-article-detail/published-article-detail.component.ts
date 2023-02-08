import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@app/_models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '@app/_services';

@Component({
  selector: 'app-published-article-detail',
  templateUrl: './published-article-detail.component.html',
  styleUrls: ['./published-article-detail.component.css']
})
export class PublishedArticleDetailComponent implements OnInit {
  article!: Article;

 

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getArticleById();
  }

  getArticleById(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.articleService.getArticleById(id)
      .subscribe(article => this.article = article);
    
  }

  goBack(): void {
    this.location.back();
  }

}
