import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { throwError } from "rxjs";
import { catchError, shareReplay, tap, map } from "rxjs/operators";

import { UsersResponse } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class ListusersService {
  private usersUrl = "https://tevpolitico.herokuapp.com/api/v2/users";
  userslist$ = this.http.get<UsersResponse>(this.usersUrl).pipe(
    map(({ data }) => data),
    tap(console.log),
    catchError(this.handleError)
  );
  constructor(private http: HttpClient) {}

  private handleError(err: any) {
    console.log(err);

    return throwError(err);
  }
}
