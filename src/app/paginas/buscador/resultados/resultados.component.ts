import { Component, OnInit, ViewChild } from '@angular/core';
import { SearcherSelectorDirective } from '../searcher-selector.directive';
import { SearcherService } from '../searcher.service';
import { TextoService } from '../texto.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  searcher: string = ""

  @ViewChild(SearcherSelectorDirective, {static: true}) container: SearcherSelectorDirective;

  constructor(private buscador: SearcherService, private data: TextoService) { }

  ngOnInit(): void {
    this.data.currentObject.subscribe(objectSource => this.searcher = objectSource);
    this.container.viewContainerRef.clear()
    this.buscador.buscarTodo(this.searcher,this.container.viewContainerRef);
  }

}
