import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthComponent } from './auth/auth.component';}

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "homepage", component: HomeComponent },
  { path: "", redirectTo: "homepage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
