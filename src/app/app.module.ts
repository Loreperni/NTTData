import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserDetailComponent } from "./User/user-detail/user-detail.component";
import { UserListComponent } from "./User/user-list/user-list.component";
import { CreateNewUserComponent } from "./User/create-new-user/create-new-user.component";
import { PostsListComponent } from "./Posts/posts-list/posts-list.component";
import { PostDetailComponent } from "./Posts/post-detail/post-detail.component";
import { CreateNewPostComponent } from "./Posts/create-new-post/create-new-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    UserDetailComponent,
    UserListComponent,
    CreateNewUserComponent,
    PostsListComponent,
    PostDetailComponent,
    CreateNewPostComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
