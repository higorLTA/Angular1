import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostDetailComponent,
    CreatePostComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
