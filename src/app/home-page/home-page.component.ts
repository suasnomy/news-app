import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CronOptions } from 'ngx-cron-editor';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'homePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  allNewsData: any;
  cronForm: FormControl<string | null> = new FormControl('0 0 1/1 * *');
  public cronOptions: CronOptions = {
    defaultTime: "00:00:00",

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab : false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: "quartz" //standard or quartz
 };
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
     
    });
    this.cronForm = new FormControl('0 0 1/1 * *');
  }
}
