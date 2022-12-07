import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HomeService {
  private readonly rootUrl = "/";

  constructor(private readonly http: HttpClient) { }
}
