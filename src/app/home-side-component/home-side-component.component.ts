import { Component, Input } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'home-side-component',
  templateUrl: './home-side-component.component.html',
  styleUrls: ['./home-side-component.component.css']
})
export class HomeSideComponentComponent {
  @Input() time: any;
  @Input() source: any;
  @Input() description: any;
  allNewsData: any;
  constructor(private newsService: NewsServiceService){

  }
  

  // ngOnInit(): void{
  //   this.newsService.getNews('q=apple').subscribe(data =>{
  //     console.log(data);
  //     this.allNewsData = data;
  //     console.log(this.allNewsData);
      
  //   })
  // }
}
