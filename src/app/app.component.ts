import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'customer-app';

  bodovi: number = 20;

  constructor() {}

  ngOnInit(): void {}

  duplirajBodove(): void {
    this.bodovi *= 2;
  }
}
