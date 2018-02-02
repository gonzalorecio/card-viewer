import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.less']
})
export class AppPopupComponent {

  isOpen = false;

  @Input() popupTitle = "Hello world"
  @Input() buttonTiles: string[] = ['Cancel', 'Accept']

  @Output() accept = new EventEmitter<any>()
  
  openPopup(){
    this.isOpen = true
  }

  closePopup(){
    this.isOpen = false
  }

  onAccept(){
    this.accept.emit()
    this.closePopup()
  }

}
