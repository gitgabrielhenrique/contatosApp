import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.page.html',
  styleUrls: ['./c4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class C4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
