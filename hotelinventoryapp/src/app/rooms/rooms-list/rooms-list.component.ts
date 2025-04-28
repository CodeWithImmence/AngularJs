import { Component, Input, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true, // <<< very important
  imports: [CommonModule], // <<< important for *ngFor, *ngIf
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
