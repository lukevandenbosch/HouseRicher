import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {timer} from 'rxjs/observable/timer';
import {switchMap, startWith, scan, takeWhile, takeUntil, mapTo} from 'rxjs/operators';
import {appAnimations} from '../../../mix/animations';

@Component({
  selector: 'gx-status-bar',
  templateUrl: './gx-status-bar.component.html',
  animations: appAnimations
})
export class GxStatusBarComponent implements OnInit, OnDestroy {
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() fillVal: number;
  @Input() maxVal = 100;
  @Input() barPosition = 'end';
  @Input() barColor = 'bg-success';
  @Input() textColor = 'text-success';
  @Input() barClassNames = '';
  pointClassName = '';
  percentText = '';
  _hideCounter = false;
  _fullWidth = false;

  @Input()
  set showPercent(percentage: boolean) {
    if (percentage !== false) {
      this.percentText = '%';
    }
  }

  @Input()
  set hideCounter(hideCounter: boolean) {
    if (hideCounter !== false) {
      this._hideCounter = true;
    }
  }

  @Input()
  set fullWidth(fullWidth: boolean) {
    if (fullWidth !== false) {
      this._fullWidth = true;
    }
  }

  @Input()
  set showPoint(showPoint: boolean) {
    if (showPoint !== false) {
      this.pointClassName = 'fill-pointer';
    }
  }

  private _counterSub = new Subject();
  private _onDestroy = new Subject();

  countInterval = 1;
  public currentNumber = 0;
  public statusBarWidth = 0;
  public state = false;

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-indicator-item__info');
    this._counterSub
      .pipe(
        switchMap(endRange => {
          return timer(0, this.countInterval).pipe(
            mapTo(this.positiveOrNegative(endRange, this.currentNumber)),
            startWith(this.currentNumber),
            scan((acc: number, curr: number) => acc + curr),
            takeWhile(this.isApproachingRange(endRange, this.currentNumber))
          );
        }),
        takeUntil(this._onDestroy)
      )
      .subscribe((val: number) => {
        this.currentNumber = val;
      });
  }

  ngOnInit() {
    if (this.maxVal >= this.fillVal) {
      this.statusBarWidth = Math.floor(((this.fillVal * 100) / this.maxVal));
      // this._counterSub.next(this.fillVal);

      setTimeout(() => {
        this.state = true;
      }, 300);
    }
  }

  private positiveOrNegative(endRange, currentNumber) {
    return endRange > currentNumber ? 1 : -1;
  }

  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }

  animationStarted(event) {
    if (event.fromState !== 'void') {
      for (let i = 1; i <= this.fillVal; i++) {
        this.currentNumber = i;
      }
    }
  }

  animationDone(event) {
    if (event.fromState !== 'void') {
      this.currentNumber = this.fillVal;
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
