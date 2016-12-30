import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';   

//Add service manually, Service name should be matched one is at the export class
import { HackernewsApiService } from './hackernews-api.service';

//Add routing
import { routing } from './app.routes';

import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing        // addded route information
  ],

  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
