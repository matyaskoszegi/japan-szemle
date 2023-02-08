import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@app/_services/article.service';
import { AuthService } from '@app/_services';
import { Article } from '@app/_models';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  //itt megadott metódusok a komponens betöltésekor autamituksan meghívódnak

  articles: Article[] = [];

 

  constructor(private articleService: ArticleService, public auth: AuthService) { }

  ngOnInit(): void {
      this.getArticles();
  }
  

  getArticles(): void {
    this.articleService.getAllArticles()
        .subscribe(data => this.articles = Object.values(data))
        
  }
}
