import { HttpResponse } from "@angular/common/http";
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, NgForm } from "@angular/forms";

import { of } from "rxjs";
import { User } from "../model";
import { HttpService } from "../../service/http.service";

import { AuthComponent } from "./auth.component";
import { UserListComponent } from "../User/user-list/user-list.component";

describe("AuthenticationComponent", () => {
  let component: AuthComponent;
  let component2: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let services: HttpService;
  let router: Router;
  let httpClientSpy: { post: jasmine.Spy; put: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [HttpService],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([
          {
            path: "users",
            component: UserListComponent,
          },
        ]),
        FormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post", "put"]);
    router = TestBed.inject(Router);
    services = new HttpService(httpClientSpy as any);
    component = new AuthComponent(router, services);
    component2 = fixture.componentInstance;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component2).toBeTruthy();
  });

  it("add user", fakeAsync(() => {
    const userTest: User = {
      name: "Tizio Rossi",
      email: "tiziorossi@gmail.com",
      gender: "male",
      status: "active",
    };
    const testResponse = new HttpResponse({ body: userTest, status: 201 });
    spyOn(services, "addUser").and.returnValue(of(testResponse));
    component.login();
    flush();
    expect(201).toEqual(testResponse.status);
  }));

  it("newCurrentUser onInit", () => {
    expect(component2.newCurrentUser).toEqual({
      name: "",
      email: "",
      gender: "",
      status: "active",
    });
  });
});
