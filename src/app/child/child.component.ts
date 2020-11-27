import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() parentComponentMessage: string;
  @Output()
  sendMessageToParentComponent: EventEmitter<string> = new EventEmitter();
  outputMessage = 'I am from child component';
  constructor() {
    console.log('constructor is invoked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is invoked');
  }

  sendData(): void {
    this.sendMessageToParentComponent.emit(this.outputMessage);
  }

  ngOnInit(): void {
    console.log('ngonit is invoked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is invoked');
  }
}
