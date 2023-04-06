
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Contato } from '../interfaces/contato';
import { DadoscontatoService } from '../services/dadoscontato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatoPage implements OnInit {


  contato?:Contato;
  constructor(public dadoscontatoService:DadoscontatoService,public router: Router) { }

  ngOnInit() {
  }

  ngAfterContentChecked(){
  this.contato=this.dadoscontatoService.getData('contato');
  console.log(this.contato)
}
caminho(pagina:String){
  this.router.navigate([pagina]);

}
}
