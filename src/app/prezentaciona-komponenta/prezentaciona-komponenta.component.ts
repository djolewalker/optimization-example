import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'prezentaciona-komponenta',
  templateUrl: './prezentaciona-komponenta.component.html',
  styleUrls: ['./prezentaciona-komponenta.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrezentacionaKomponentaComponent implements OnInit {
  @Input() datum1: { datum: string };
  @Input() datum2: { datum: string };
  @Input() datum3: { datum: string };
  @Input() datum4: { datum: string };
  @Input() datum5: { datum: string };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.cdr.detectChanges();
    // this.cdr.detach();
  }

  @HostListener('click')
  clickHandler(): void {
    this.datum1.datum = Date.now().toString();
    // this.cdr.detectChanges();
  }
}
