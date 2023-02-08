import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@app/_models/article';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getAllArticles() {
    return this.http.get<Article[]>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data.json`)
    .pipe(
      map((response: { [key: string]: any; }) => {
        const data: Article[] = [];
        Object.keys(response).forEach(key => {
          const article: Article = response[key];
          article.firebaseID = key;
          data.push(article);
        });
        return data;
      })
    )
  }

  getArticleById(articleId: String) {
    return this.http.get<Article>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data/${articleId}.json/`)

  }

  addArticle(article: Article) {
    return this.http.post<Article>('https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data.json', article)
      .pipe(
        map((response: { [x: string]: any; }) => {
          article.firebaseID = response['name'];
          this.http.patch<Article>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data/${article.firebaseID}.json`, article)
        .subscribe();
          return article
         }),
        
      );
  }

  updateArticle(article: Article) {
    return this.http.put<Article>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data/${article.firebaseID}.json
    `, article).pipe(
      tap(updatedArticle => console.log(`updated article = ${JSON.stringify(updatedArticle)}`)),
      catchError(error => error)
    )
  }

  deleteArticle(articleId: String) {
    return this.http.delete<Article>(`https://japan-szemle-23187-default-rtdb.europe-west1.firebasedatabase.app/data/${articleId}.json/`).pipe(
      tap(updatedArticle => console.log(`deleted article with ID =  ${articleId}`)),
      catchError(error => error)
    )
  }
}
