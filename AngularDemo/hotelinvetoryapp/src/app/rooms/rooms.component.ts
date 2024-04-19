import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Jilton Jotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';
  
  roomList: RoomList[] = [];
// , {static: true}
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.headerComponent)
    this.roomList = [
      {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 250,
      photos:
        'https://www.istockphoto.com/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window-gm1370825295-440292814?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel-room&utm_term=hotel+room%3A%3A%3A',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('14-Nov-2021'),
      rating: 4,
      },
      {
        roomNumber: 2,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 250,
        photos:
          'https://www.istockphoto.com/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window-gm1370825295-440292814?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel-room&utm_term=hotel+room%3A%3A%3A',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('14-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 3,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 250,
        photos:
          'https://www.istockphoto.com/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window-gm1370825295-440292814?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel-room&utm_term=hotel+room%3A%3A%3A',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('14-Nov-2021'),
        rating: 2.3,
      },
      {
        roomNumber: 23,
        roomType: 'Super Suite Delux',
        amenities:
          'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Hot Tub, Champaign, balcony, walk in closet, ocean view',
        price: 1000,
        photos:
          'https://www.istockphoto.com/photo/white-architecture-on-santorini-island-greece-gm929948438-254984174?phrase=deluxe+suite+ocean+view',
        checkinTime: new Date('02-Feb-2021'),
        checkoutTime: new Date('05-Feb-2021'),
        rating: 5,
      }
    ];
  }

  ngDoCheck(): void {
    console.log("on changes is called");
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
     this.headerComponent.title = "Rooms View";
     console.log(this.headerChildrenComponent);
     this.headerChildrenComponent.last.title = "Last Title";
  }

  ngAfterViewChecked(): void {
      // this.headerComponent.title = "Rooms Views";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 54,
      roomType: 'economy',
      amenities: 'Air Conditioner, Free Wi-Fi, TV',
      price: 100,
      photos:'https://unsplash.com/photos/white-bed-linen-on-bed-_Swg04CP0bU',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('13-Nov-2023'),
      rating: 1

    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }
}
