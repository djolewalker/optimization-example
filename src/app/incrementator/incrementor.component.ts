import { DecimalPipe } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'inkrementor',
  template:
    '<div #brojBodova style="width: 200px; height: 50px; font-size: 40px; text-align: center;"></div>',
  providers: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncrementorComponent implements OnInit {
  @Input() trajanjePromeneMS = 1000;
  @Input() inkrementMS = 10;
  @ViewChild('brojBodova', { static: true }) label: ElementRef;

  @Input() set brojBodova(val: number) {
    this._brojBodova = val;
    if (this.label) {
      this.label.nativeElement.innerText = this._pipe.transform(
        this.brojBodova,
        '1.0-0'
      );
    }
  }
  get brojBodova() {
    return this._brojBodova;
  }

  private _incrementInterval: ReturnType<typeof setTimeout>;
  private _brojBodova: number = 0;

  constructor(private _zone: NgZone, private _pipe: DecimalPipe) {}

  ngOnInit(): void {
    this.brojBodova = this.brojBodova;
  }

  ngOnChanges(changes: any) {
    const change = changes.brojBodova;
    if (!change) {
      return;
    }
    if (typeof change.previousValue !== 'number') {
      this.brojBodova = change.currentValue;
    } else {
      this.brojBodova = change.previousValue;
      this._zone.runOutsideAngular(() => {
        this._postepenoPovecaj(change.currentValue);
      });
    }
  }

  private _postepenoPovecaj(novaVrednost: number) {
    const razlikaDo = novaVrednost - this.brojBodova;
    const inkrement = this.inkrementMS * (razlikaDo / this.trajanjePromeneMS);
    const pocetnoBodova = this.brojBodova;
    this._incrementInterval = setInterval(() => {
      let sledeciBod = Math.ceil(pocetnoBodova + razlikaDo);
      if (this.brojBodova >= sledeciBod) {
        this.brojBodova = pocetnoBodova + razlikaDo;
        clearInterval(this._incrementInterval);
      } else {
        this.brojBodova += inkrement;
      }
    }, this.inkrementMS);
  }
}
