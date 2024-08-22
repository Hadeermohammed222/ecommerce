import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
   @Input() category: any;
   @Input() products: any;
   @Input() categories: any;
   @Output() selectValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  detectChange(event:any){
      this.selectValue.emit(event);
  }
}
