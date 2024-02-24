import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../model";
import { HttpService } from "src/service/http.service";
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { tap } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, AfterViewInit {
  constructor(private httpService: HttpService, private router: Router) {}

  users: any = [];
  newUser?: User;
  searchString!: string;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageTotal!: string;
  pageSize: string = "10";
  isFetching: boolean = true;

  ngOnInit(): void {
    this.getUser("1", "10", "");
  }

  getUser(pageN: string, forPage: string, searchString: string) {
    let type =
      searchString.includes("@") || searchString.includes("_")
        ? "email"
        : "name";
    this.searchString = searchString;
    this.httpService
      .printUsers(pageN, forPage, searchString, type)
      .subscribe((response) => {
        this.users = response.body;
        this.pageTotal = String(response.headers.get("X-Pagination-Total"));
        this.isFetching = false;
      });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.getUser(
            `${this.paginator.pageIndex + 1}`,
            `${this.paginator.pageSize}`,
            this.searchString
          );
        })
      )
      .subscribe();
  }
}
