import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.page.html',
  styleUrls: ['./c3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class C3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
