import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule,RoomsListComponent],
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: RoomsList[] = [ ];
  constructor() {}
  ngOnInit(): void {
    this.roomsList = [{
      
      roomNumber: 101,
      roomType: 'DeluxeRoom',
      amenities: 'Air Conditioner, Free Wi-fie,TV, Bathroom, Kitchen',
      price: 700,
      photos:
        'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
      checkinTime: new Date('10-Mar-2025'),
      checkoutTine: new Date('11-Mar-2025'),
      rating: 4.5,
    },
    {
      roomNumber: 102,
      roomType: 'DeluxeRoom',
      amenities: 'Air Conditioner, Free Wi-fie,TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
      checkinTime: new Date('10-Mar-2025'),
      checkoutTine: new Date('11-Mar-2025'),
      rating: 3.5,
    },
    {
      roomNumber: 103,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-fie,TV, Bathroom, Kitchen',
      price: 1300,
      photos:
        'https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0',
      checkinTime: new Date('10-Mar-2025'),
      checkoutTine: new Date('11-Mar-2025'),
      rating: 5,
    },]
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
