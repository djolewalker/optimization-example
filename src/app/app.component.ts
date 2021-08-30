import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'customer-app';

  bodovi: number = 20;

  nizDatuma: { datum: string }[] = [];

  constructor(_applicationRef: ApplicationRef) {
    // const originalTick = applicationRef.tick;
    // applicationRef.tick = function () {
    //   const windowPerfomance = window.performance;
    //   const before = windowPerfomance.now();
    //   const retValue = originalTick.apply(this, arguments);
    //   const after = windowPerfomance.now();
    //   const runTime = after - before;
    //   window.console.log('CHANGE DETECTION TIME', runTime);
    //   return retValue;
    // };
  }

  ngOnInit(): void {
    for (let index = 0; index < 500; index++) {
      this.nizDatuma.push({ datum: Date.now().toString() });
    }
  }

  duplirajBodove(): void {
    this.bodovi *= 2;
  }
}
