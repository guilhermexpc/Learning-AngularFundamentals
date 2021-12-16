import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter<EventEmmiterOutPut>();

  @ViewChild('campoInput') InputDomValue: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  incrementValue() {
    console.log(this.InputDomValue?.nativeElement.value);
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
