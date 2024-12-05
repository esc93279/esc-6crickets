import { Component, OnInit } from '@angular/core';
import { DeadlineFacade } from '../../+state/deadline.facade';
import { CommonModule } from '@angular/common';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  standalone: true,
  imports: [CommonModule, TimerComponent],
})
export class CountdownComponent implements OnInit {
  constructor(private _deadlineFacade: DeadlineFacade) {}

  deadline$ = this._deadlineFacade.deadline$;

  ngOnInit() {
    this._deadlineFacade.getDeadline();
  }
}
