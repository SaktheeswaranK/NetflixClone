import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  
  @Input() type : string = ''
  @Input() class : string = ''
  @Input() id : string = ''
  @Input() style : string = ''
  @Input() readonly : string = ''
  @Input() disabled : string = ''
  @Input() control ?: FormControl | undefined ;

  constructor() {

  }

  ngOnInit() {

  }

}
