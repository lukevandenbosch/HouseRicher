import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Task} from './task';

@Component({
  selector: 'gx-my-tasks',
  templateUrl: './gx-my-tasks.component.html',
  styleUrls: ['./gx-my-tasks.component.scss']
})
export class GxMyTasksComponent implements OnInit {
  @Input() tasks: Task[];
  searchQuery: FormControl;
  searchText: string = '';

  constructor(private viewRef: ElementRef) {
    this.viewRef.nativeElement.classList.add('dt-card');
    this.searchQuery = new FormControl('');
  }

  ngOnInit() {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.searchText = searchText;
    });
  }
}
