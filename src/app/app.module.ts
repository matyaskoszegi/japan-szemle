import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesComponent, ArticleDetailComponent,  } from './_components';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { SendTranslationComponent } from './_components/send-translation/send-translation.component';
import { MainPageComponent } from './_components/main-page/main-page.component';
import { PublishedArticleDetailComponent } from './_components/published-article-detail/published-article-detail.component';
import { LoginComponent } from './_components';
import { CreativecommonsComponent, AboutComponent, PrivacyComponent, SupportUsComponent, EditorsComponent } from './_components/_staticComponents';
import { CatLyricsComponent } from './_components/cat-lyrics/cat-lyrics.component';
import { CatPoemsComponent } from './_components/cat-poems/cat-poems.component';
import { CatProseComponent } from './_components/cat-prose/cat-prose.component';






@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SendTranslationComponent,
    MainPageComponent,
    PublishedArticleDetailComponent,
    LoginComponent,
    CreativecommonsComponent,
    AboutComponent,
    PrivacyComponent,
    SupportUsComponent,
    CatLyricsComponent,
    CatPoemsComponent,
    CatProseComponent,
    EditorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
