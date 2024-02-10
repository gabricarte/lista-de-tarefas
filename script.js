import Tarefa from './models/Tarefa.js';
import {verificarArrayVazio, verificarExistenciaTarefa, verificarCampos, verificarOpcaoDigitada} from './utils/erros.js';
import { conversorBooleano } from './utils/conversorBooleano.js';

let tarefas = [];

let idGeral = 0;

const mostrarPrompts = (opcao) =>{
    switch(opcao){
        case 1:
            let nome = prompt("Digite o nome da tarefa: "); 
            let descricao = prompt("Digite a descrição da tarefa: ");
            let status = prompt("A tarefa está aberta? (S/N) ");

            try{
                status = conversorBooleano(status);
                verificarCampos(nome, descricao);
                let tarefa = new Tarefa(nome, descricao, status, ++idGeral);
                adicionarTarefa(tarefa);
            }catch(erro){
                console.error(`${erro.message}`);
            };
            break;
        case 2:
            let idExcluir = parseInt(prompt("Digite o id da tarefa que deseja excluir: "));
            removerTarefa(idExcluir);
            break;
        case 3:
            let idEditar = parseInt(prompt("Digite o id da tarefa que deseja editar: "));
            let opcaoEditar = parseInt(prompt("Digite a opção da informação que deseja editar. \n 1. Nome \n 2. Descrição \n 3. Status"));
            editarTarefa(idEditar, opcaoEditar);
            break;
        case 4: 
            listarTarefas();
            break;
        case 5: 
            let idObter = parseInt(prompt("Digite o id da tarefa que deseja obter: "));
            obterTarefa(idObter);
    };
};

const adicionarTarefa = (tarefa) => { 
    tarefas.push(tarefa);   
    console.log(`Tarefa adicionada com sucesso!`);
    console.table(tarefas);
};

const removerTarefa = (idTarefa) => { 
    try {
        verificarArrayVazio(tarefas);
        verificarExistenciaTarefa(idTarefa, tarefas);
        tarefas = tarefas.filter(tarefa => tarefa.idTarefa !== idTarefa);
        console.log(`Tarefa removida com sucesso!`);
        console.table(tarefas);
    }catch (erro){
        console.error(`${erro.message}`);
    };
};

const editarTarefa = (idTarefa, opcaoEditar) => { 

    try{
        verificarArrayVazio(tarefas);
        verificarExistenciaTarefa(idTarefa, tarefas);
        verificarOpcaoDigitada(opcaoEditar);

        let tarefa = tarefas.find(tarefa => tarefa.idTarefa === idTarefa);

        switch(opcaoEditar){
        case 1:
            let novoNome = prompt(`Digite o novo nome para a tarefa de id ${idTarefa}`);
            tarefa.nome = novoNome;
            break;
        case 2: 
            let novaDescricao = prompt(`Digite a nova descrição para a tarefa de id ${idTarefa}`);
            tarefa.descricao = novaDescricao;
            break;
        case 3: 
            let novoStatus = prompt(`Digite o novo status para a tarefa de id ${idTarefa} (S/N)`);
            novoStatus = conversorBooleano(novoStatus); 
            tarefa.status = novoStatus;
            break;
        };
        }catch (erro){
            console.error(`${erro.message}`);
            return false;
        };
        console.log(`Tarefa editada com sucesso.`);
        console.table(tarefas);
};

const listarTarefas = () => { 
    try {
        verificarArrayVazio(tarefas);
        console.log("Lista de tarefas:");
        console.table(tarefas);
    }catch (erro){
        console.error(`${erro.message}`);
    };

};

const obterTarefa = (idTarefa) => {
    try{
        verificarArrayVazio(tarefas);
        verificarExistenciaTarefa(idTarefa, tarefas);
        let tarefa = tarefas.find((tarefa)=>{return tarefa.idTarefa === idTarefa})
        console.log(`Tarefa obtida com sucesso! ${JSON.stringify(tarefa)}`);
    } catch(erro){
        console.error(`${erro.message}`);
    };
};

document.querySelector('#btnAdicionarTarefa').addEventListener('click', () => mostrarPrompts(1));
document.querySelector('#btnRemoverTarefa').addEventListener('click', () => mostrarPrompts(2));
document.querySelector('#btnEditarTarefa').addEventListener('click', () => mostrarPrompts(3));
document.querySelector('#btnListarTarefas').addEventListener('click', () => mostrarPrompts(4));
document.querySelector('#btnObterTarefa').addEventListener('click', () => mostrarPrompts(5));
