import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Jilton Hotel';
  numberOfRooms = 50;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }


}
