import { Component } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'homePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  allNewsData: any;
  constructor(private newsService: NewsServiceService){

  }
  getAllNews(){
    this.newsService.getNews('q=apple').subscribe(data =>{
      console.log(data);
      
    })
  }

  ngOnInit(): void{
    this.newsService.getNews('q=apple').subscribe(data =>{
      console.log(data);
      this.allNewsData = data;
      console.log(this.allNewsData);
      
    })
  }
}
