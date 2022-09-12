import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  
  _current!: number;
  image!: string;
  disabledPrev = false;
  disabledNext = false;

  constructor() { }

  @Input()
  set current(n: number) {
    this._current = n;
    this.setImage();
    this.disableButton();
  }
  get current(): number {
    return this._current;
  }

  @Output()
  addNumber = new Subject<number>();

  disableButton() {
    if (this._current == 30) {
      this.disabledNext = true;
    } else if (this._current == 0) {
      this.disabledPrev = true;
    } else {
      this.disabledNext = false;
      this.disabledPrev = false;
    }
  }

  onPrev() {
    this._current--;
    this.disableButton();
    this.setImage();
  }

  onNext() {
    this._current++;
    this.disableButton();
    this.setImage();
  }

  clickImage() {
    this.addNumber.next(this._current);
  }

  setImage() {
    this.image = `/assets/numbers/number${this._current}.jpg`;
  }

  ngOnInit(): void {
  }

}
