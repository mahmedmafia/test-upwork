import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { CategoryInfoComponent } from './components/category-info/category-info.component';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';
import { LeftTextComponent } from './components/left-text/left-text.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextNavComponent } from './components/text-nav/text-nav.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { ImagesComponent } from './components/footer/images/images.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { FirstCategoryComponent } from './components/categories/first-category/first-category.component';
import { SecondCategoryComponent } from './components/categories/second-category/second-category.component';
import { ThirdCategoryComponent } from './components/categories/third-category/third-category.component';
import { SecondTextComponent } from './components/Texts/second-text/second-text.component';
import { ThirdTextComponent } from './components/Texts/third-text/third-text.component';
import { FourthTextComponent } from './components/Texts/fourth-text/fourth-text.component';
import { TextFirstComponent } from './components/text-first/text-first.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CategoryInfoComponent,
    CategoryNavComponent,
    LeftTextComponent,
    FooterComponent,
    TextNavComponent,
    LeftPanelComponent,
    ImagesComponent,
    RightPanelComponent,
    FirstCategoryComponent,
    SecondCategoryComponent,
    ThirdCategoryComponent,
    SecondTextComponent,
    ThirdTextComponent,
    FourthTextComponent,
    TextFirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
