import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@app/_models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '@app/_services';
import { AuthService } from '@app/_services';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location,
    public auth: AuthService

  ) { }

  ngOnInit(): void {
    this.getArticleById();
  }

  getArticleById(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.articleService.getArticleById(id)
      .subscribe(article => this.article = article);
    console.log(this.article);
  }

  save(): void {
    this.articleService.updateArticle(this.article).subscribe(
      () => this.goBack()
    );
  }

  delete(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    confirm("Are you sure you want to delete this article?")
    ?  this.articleService.deleteArticle(id).subscribe(
      () => this.goBack()
    )
    : "";
   
  }

  goBack(): void {
    this.location.back();
  }

}
