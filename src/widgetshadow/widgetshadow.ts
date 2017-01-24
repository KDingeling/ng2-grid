import { Component,Input } from '@angular/core';
import { GridItem } from '../griditem/griditem';

@Component({
  moduleId: module.id,
  selector: 'widget-shadow',
  templateUrl: './widgetshadow.html',
  styleUrls:['./widgetshadow.css']
})
export class NgWidgetShadow extends GridItem {

  style:any={
    position:'absolute',
    opacity: '0.3'
  };

  deactivate(){
    this.style.display = 'none';
  }

  activate(){
    this.style.display = 'inline';
  }

}
