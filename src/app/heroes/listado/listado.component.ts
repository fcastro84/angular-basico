import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHerore(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
