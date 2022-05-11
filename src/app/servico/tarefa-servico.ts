import { Tarefa } from "../modelos/tarefa";
import { Storage } from '@capacitor/storage';


export class TarefaServico {

    // private storage: LocalStora;


    async salvar(tarefa: Tarefa) {
        const chaveTarefas: string = "tarefas";
       
        let tarefas = await this.buscar();
        tarefas.push(tarefa);

        await Storage.set({
            key: chaveTarefas, 
            value: JSON.stringify(tarefas)
        });
    }

    async buscar(): Promise<Tarefa[]>{
        const chaveTarefas: string = "tarefas";
        let tarefas: Tarefa[] = [];

        let result = await Storage.get({
            key: chaveTarefas
        })

        if (result.value != null){
            tarefas = JSON.parse(result.value);
        }

        return tarefas;
    }
}