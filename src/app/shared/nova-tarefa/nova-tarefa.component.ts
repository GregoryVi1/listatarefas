import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss'],
})
export class NovaTarefaComponent implements OnInit {

  constructor() { }


  nomeTarefa: String = '';

  listaDeTarefas: Array<String> = [];

  ngOnInit() {}

  //1 - Ter uma lista p/ armazenar as tarefas
  //2 - Ler a tarefa atual e adicionar na lista
  //3 - Limpar a tarefa a tarefa atual

  addNovaTarefa(): void{
   // alert(this.nomeTarefa);

   this.listaDeTarefas.push(this.nomeTarefa);
  this.nomeTarefa = '';
  }

}
