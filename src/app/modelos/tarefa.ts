export class Tarefa {
    public nome: string;
    public descricao: string;

    //Data prevista para o inicio da tarefa
    public dataInicio: Date;

    //data prevista para o termino da tarefa
    public dataTermino: Date;
    public prioridade: number;

    //1 - Não Iniciada - <ion-icon name="hourglass-outline"></ion-icon>
    //2 - Em andamento - <ion-icon name="arrow-forward-outline"></ion-icon>
    //3 - Concluída    - <ion-icon name="checkmark-done-outline"></ion-icon>
    //4 - Cancelada    - <ion-icon name="ban-outline"></ion-icon>
    //5 - Em espera    - <ion-icon name="pause-outline"></ion-icon>0
    public idStatus: number;

    //data efetiva da conclusão    
    public dataConclusao: Date;
    public duracaoEmMinutos: number;

    public icone: string;


    obterIcone() {
        switch (this.idStatus) {
            case 1:
                this.icone = "hourglass-outline";
                break;
            case 2:
                this.icone = "arrow-forward-outline";
                break;
            case 3:
                this.icone = "checkmark-done-outline";
                break;
            case 4:
                this.icone = "ban-outline";
                break;
            case 5:
                this.icone = "pause-outline";
                break;
        }
    }

  
}