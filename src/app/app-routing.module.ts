import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { UserListComponent } from "./User/user-list/user-list.component";
import { PostsListComponent } from "./Posts/posts-list/posts-list.component";
import { CreateNewPostComponent } from "./Posts/create-new-post/create-new-post.component";
import { CreateNewUserComponent } from "./User/create-new-user/create-new-user.component";
import { UserDetailComponent } from "./User/user-detail/user-detail.component";
import { PostDetailComponent } from "./Posts/post-detail/post-detail.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "posts", component: PostsListComponent },
  { path: "new-user", component: CreateNewUserComponent },
  { path: "user/:id", component: UserDetailComponent },
  { path: "post/:id", component: PostDetailComponent },
  { path: "new-post", component: CreateNewPostComponent },
  { path: "auth", component: AuthComponent },
  { path: "homepage", component: HomeComponent },
  { path: "", redirectTo: "homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
