import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model";
import { HttpService } from "../../service/http.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  newCurrentUser: User = {
    name: "",
    email: "",
    gender: "",
    status: "active",
  };
  user!: User;
  tokenKey!: string;
  constructor(private router: Router, private http: HttpService) {}

  login() {
    localStorage.setItem("token", this.tokenKey);

    this.http.addUser(this.newCurrentUser).subscribe((data: any) => {
      if (data.status === 201) {
        this.user = data.body;
        localStorage.setItem("currentUser", JSON.stringify(this.user));

        this.router.navigate(["/users"]);
      }
    });
  }
}
