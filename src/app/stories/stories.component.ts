import { Component, OnInit } from '@angular/core';

//Added manually,
import { Observable } from 'rxjs/Observable';
import { HackernewsApiService } from '../hackernews-api.service';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  //items: number[];
  items;

  constructor(private _hackerNewsAPIService: HackernewsApiService) {
    //this.items = Array(10);
  }

  ngOnInit() {


    // this._hackerNewsAPIService.fetchStories()
    //   .subscribe(
    //   items => this.items = items,
    //   error => console.log('Error fetching stories'));


    this._hackerNewsAPIService.fetchStories('news', 1)
      .subscribe(items => this.items = items, error => console.log('Error fetching stories'));

  }



}
