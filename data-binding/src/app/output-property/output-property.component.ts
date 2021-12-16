import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() value: number = 0;

  constructor() {}

  ngOnInit(): void {}

  @Output() changeValue = new EventEmitter<EventEmmiterOutPut>();

  incrementValue() {
    this.value++;
    this.changeValue.emit({ newValue: this.value });
  }
  decrementValue() {
    this.value--;
    this.changeValue.emit({ newValue: this.value });
  }
}

export interface EventEmmiterOutPut {
  newValue: number;
}
