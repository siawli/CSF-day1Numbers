import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.getRandomNumber();
  }
  title = 'day1Numbers';

  randomNo!: number;
  listEmpty = true;
  
  getRandomNumber() {
    this.randomNo = Math.floor(Math.random() * 31);
  }

  listOfNums:number[] = [];

  reset() {
    this.getRandomNumber();
    this.listOfNums = [];
    this.listEmpty = true;
  }

  addNoToList(n: number) {
    this.listOfNums.push(n);
    this.listEmpty = false;
  }

}
