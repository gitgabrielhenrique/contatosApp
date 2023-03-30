import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import{Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})


export class HomePage {
  constructor(private router: Router) {}




  caminho(pagina:String){
    this.router.navigate([pagina]);

  }
}
