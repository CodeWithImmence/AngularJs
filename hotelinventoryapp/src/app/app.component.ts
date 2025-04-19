import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: `<h1> Hello World from inline template</h1>
  //<p> Angular is awesome</p>`
  styleUrl: './app.component.scss',
  imports: [RoomsComponent, CommonModule],
})
export class AppComponent {
  title = 'hotlinventoryapp';
  role = 'Admin';
}
