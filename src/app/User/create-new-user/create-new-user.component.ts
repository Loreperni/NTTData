import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../model";
import { HttpService } from "src/service/http.service";

@Component({
  selector: "app-create-new-user",
  templateUrl: "./create-new-user.component.html",
  styleUrls: ["./create-new-user.component.css"],
})
export class CreateNewUserComponent implements OnInit {
  constructor(private router: Router, private httpService: HttpService) {}

  newUser: User = {
    name: "",
    email: "",
    gender: "",
    status: "active",
  };
  respose!: string;

  ngOnInit(): void {}

  createNewUser() {
    this.httpService.addUser(this.newUser).subscribe((data) => {
      if (data.status == 201) {
        this.respose = "New user has been created";
        setTimeout(() => {
          this.router.navigate(["/users"]);
        }, 1500);
      }
    });
  }
}
