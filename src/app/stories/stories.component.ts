import { Component, OnInit } from '@angular/core';

//Added manually,
import { Observable } from 'rxjs/Observable';
import { HackernewsApiService } from '../hackernews-api.service';


//Added Route 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  //items: number[];
  items;

  typeSub: any;
  pageSub: any;
  storiesType;
  pageNum: number;
  listStart: number;



  constructor(
    private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute
  ) {
    //this.items = Array(10);
  }

  ngOnInit() {


    // this._hackerNewsAPIService.fetchStories()
    //   .subscribe(
    //   items => this.items = items,
    //   error => console.log('Error fetching stories'));


    // this._hackerNewsAPIService.fetchStories('news', 1)
    //   .subscribe(items => this.items = items, error => console.log('Error fetching stories'));

    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;    // (+) converts string 'page' to a number
      this._hackerNewsAPIService.fetchStories(this.storiesType, this.pageNum)
        .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories'),
        () => {
          this.listStart = ((this.pageNum - 1) * 30) + 1;
          window.scrollTo(0, 0); //scroll to top
        }
        );
    });
  }


}
