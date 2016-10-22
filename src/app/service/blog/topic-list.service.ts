import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Topic} from "./topic";

@Injectable()
export class TopicListService {

  public values: any;

  constructor(public _http: Http) { }

  private topicUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/blog.mhalong.com/posts?number=10'; // URL to web api

  getTopicList() {
    return this._http.get(this.topicUrl)
        .map(res => <Topic[]>res.json())
        .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
