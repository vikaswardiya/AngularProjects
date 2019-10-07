import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-configurable-example',
  templateUrl: './checkbox-configurable-example.component.html',
  styleUrls: ['./checkbox-configurable-example.component.css']
})
export class CheckboxConfigurableExampleComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
