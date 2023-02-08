import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '@app/_components/articles/articles.component';
import { CatLyricsComponent, CatPoemsComponent, CatProseComponent, DashboardComponent, LoginComponent, MainPageComponent, PageNotFoundComponent, PublishedArticleDetailComponent, SendTranslationComponent } from './_components';
import { ArticleDetailComponent } from './_components';
import { AboutComponent, CreativecommonsComponent, EditorsComponent, PrivacyComponent, SupportUsComponent } from './_components/_staticComponents';

const routes: Routes = [
  { path: 'admin/published-list', component: ArticlesComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'send-translation', component: SendTranslationComponent },
  { path: '', component: MainPageComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'published/detail/:id', component: PublishedArticleDetailComponent },
  { path: 'admin/dashboard/detail/:id', component: ArticleDetailComponent },
  { path: 'creative-commons', component: CreativecommonsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'support-us', component: SupportUsComponent },
  { path: 'category/lyrics', component: CatLyricsComponent },
  { path: 'category/poems', component: CatPoemsComponent },
  { path: 'category/prose', component: CatProseComponent },
  { path: 'editors', component: EditorsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }