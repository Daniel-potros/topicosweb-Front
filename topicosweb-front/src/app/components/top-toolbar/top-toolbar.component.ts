import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum ButtonVisibility {
  VISIBLE,
  HIDDEN,
  DISABLED
};

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  @Input()
  buttonNewVisibility: ButtonVisibility = ButtonVisibility.VISIBLE;
  
  @Input()
  buttonRemoveVisibility: ButtonVisibility = ButtonVisibility.HIDDEN;

  @Input()
  buttonSelectVisibility: ButtonVisibility = ButtonVisibility.HIDDEN;

  @Input()
  buttonAdvancedSearchVisibility: ButtonVisibility = ButtonVisibility.HIDDEN;

  @Output()
  buttonSearchClick: EventEmitter<string> = new EventEmitter();

  @Output()
  buttonAdvancedSearchClick: EventEmitter<void> = new EventEmitter();

  @Output()
  buttonNewClick: EventEmitter<void> = new EventEmitter();

  @Output()
  buttonRemoveClick: EventEmitter<void> = new EventEmitter();

  @Output()
  buttonSelectClick: EventEmitter<void> = new EventEmitter();


  query: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getButtonNewVisibility(): string {
    if (this.buttonNewVisibility === ButtonVisibility.VISIBLE ||
        this.buttonNewVisibility === ButtonVisibility.DISABLED) {
          return 'visible'
    }
    return 'hidden'
  }

  getButtonRemoveVisibility(): string {
    if (this.buttonRemoveVisibility === ButtonVisibility.VISIBLE ||
        this.buttonRemoveVisibility === ButtonVisibility.DISABLED) {
          return 'visible';
    }
    return 'hidden';
  }

  getButtonSelectVisibility(): string {
    if (this.buttonSelectVisibility === ButtonVisibility.VISIBLE ||
      this.buttonSelectVisibility === ButtonVisibility.DISABLED) {
        return 'visible';
  }
  return 'hidden';
  }

  getButtonAdvancedSearchVisibility(): string {
    if (this.buttonAdvancedSearchVisibility === ButtonVisibility.VISIBLE ||
        this.buttonAdvancedSearchVisibility === ButtonVisibility.DISABLED) {
          return 'visible';
    }
    return 'hidden';
  }

  onBtnSearchClick(): void {
    this.buttonSearchClick.emit(this.query);
  }

  onBtnAdvancedSearchClick(): void {
    this.buttonAdvancedSearchClick.emit();
  }

  onBtnNewClick(): void {
    this.buttonNewClick.emit();
  }

  onBtnSelectClick(): void {
    this.buttonSelectClick.emit();
  }

  onBtnRemoveClick(): void {
    this.buttonRemoveClick.emit();
  }

}
