import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.page.html',
  styleUrls: ['./c1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class C1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
