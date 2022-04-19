import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Tarefa } from 'src/app/modelos/tarefa';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.scss'],
})
export class NovaTarefaComponent implements OnInit {

  constructor(public alertController: AlertController,
    public toastController: ToastController) { }


  tarefa: Tarefa = new Tarefa();

  listaDeTarefas: Array<Tarefa> = [];

  ngOnInit() { }

  async presentAlert(titulo: string, subtitulo: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sua tarefa foi salva.',
      duration: 2000
    });
    toast.present();
  }

  //1 - Ter uma lista p/ armazenar as tarefas
  //2 - Ler a tarefa atual e adicionar na lista
  //3 - Limpar a tarefa a tarefa atual

  addNovaTarefa(): void {
    if (this.tarefa.nome == undefined || this.tarefa.nome == '') {

      this.presentAlert('Atenção', '', 'Informe o nome da tarefa');
      return;
    }

    this.tarefa.idStatus = 1;
    this.tarefa.prioridade = this.listaDeTarefas.length;
    this.tarefa.obterIcone();

    this.listaDeTarefas.push(this.tarefa);
    this.tarefa == null;
    this.tarefa = new Tarefa();
    this.presentToast();
  }

  validarStatus(event: any) {
    debugger;

    console.log(event);
    // this.idStatus = 3;
    // this.obterIcone();
  }

  radioChecked(dados){
    debugger;
  }
}
