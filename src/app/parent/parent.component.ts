import {
  Component,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements DoCheck, AfterContentInit, AfterViewChecked {
  parentComponentMessage = 'Message from Parent component';
  messageFromChild: string;

  constructor() {}

  GetChildData(data: string): void {
    this.messageFromChild = data;
  }

  ngDoCheck(): void {
    console.log('do check is invoked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}
