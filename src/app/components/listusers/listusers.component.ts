import { Component, OnInit } from "@angular/core";
import { combineLatest, BehaviorSubject, EMPTY, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { ListusersService } from "../../services/listusers.service";

@Component({
  selector: "app-listusers",
  templateUrl: "./listusers.component.html",
  styleUrls: ["./listusers.component.css"]
})
export class ListusersComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  // action stream
  private userFilterSubject = new BehaviorSubject<number | boolean>(0);
  userFilterAction$ = this.userFilterSubject.asObservable();

  users$ = combineLatest([this.list.userslist$, this.userFilterAction$]).pipe(
    map(([users, filterSelection]) =>
      users.filter(user => {
        console.log(filterSelection);
        if (typeof filterSelection === "number") {
          return true;
        } else {
          return user.isAdmin === filterSelection;
        }
      })
    ),
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );
  constructor(private list: ListusersService) {}

  filterUsers(param: number | boolean) {
    this.userFilterSubject.next(param);
  }
}
