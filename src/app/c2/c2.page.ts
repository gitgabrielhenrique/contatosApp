import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.page.html',
  styleUrls: ['./c2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class C2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
