import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '@app/_models';
import { ArticleService } from '@app/_services';

@Component({
  selector: 'app-send-translation',
  templateUrl: './send-translation.component.html',
  styleUrls: ['./send-translation.component.css']
})
export class SendTranslationComponent implements OnInit {
  articles: Article[] = [];
  articleForm!: FormGroup;
  

  
  constructor(private articleService: ArticleService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getArticles();
    this.createArticleForm();
  }

  getArticles(): void {
    this.articleService.getAllArticles()
      .subscribe(data => this.articles = data);
  }

  createArticleForm() {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      originalTitle: ['', Validators.required],
      originalDate: ['', Validators.required],
      translator: ['', Validators.required],
      translationDate: ['', Validators.required],
      category: ['', Validators.required],
      translation: ['', Validators.required],
      imagePath: ['', Validators.required],
      filePath: ['', Validators.required],
      sender: ['', Validators.required],
      emailAddress: ['', Validators.required],
      creative: ['', Validators.required]
    })
  }

  onSubmit() {
    let obj: Article = {
      title: this.articleForm.value.title,
      author: this.articleForm.value.author,
      originalTitle: this.articleForm.value.originalTitle,
      originalDate: this.articleForm.value.originalDate,
      translator: this.articleForm.value.translator,
      translationDate: this.articleForm.value.translationDate,
      category: this.articleForm.value.category,
      translation: this.articleForm.value.translation,
      isPublished: "nem",
      imagePath: this.articleForm.value.imagePath,
      filePath: this.articleForm.value.filePath,
      readNum: 0,
      sender: this.articleForm.value.sender,
      emailAddress: this.articleForm.value.emailAddress,
      id: Math.random() * 10000
      
      
    };

    this.articleService.addArticle(obj)
      .subscribe((updatedArticle) => {
        console.log(updatedArticle)
        
        this.getArticles();
      });
    this.articleForm.reset();

    alert("Sikeres beküldés")
    }  
}
