export const verificarArrayVazio = (tarefas) =>{
    if(tarefas.length === 0){
        throw new Error("0 array está vazio, não existem tarefas salvas.");
    };
};

export const verificarExistenciaTarefa = (idTarefa, tarefas) =>{
    let existe = tarefas.some(tarefa => tarefa.idTarefa === idTarefa);
    if(!existe) { 
        throw new Error("A tarefa com o id digitado não existe no array!"); 
    };
};

export const verificarCampos = (nome, descricao) => {
    if (!nome || !descricao) {
        throw new Error("Por favor, preencha todos os campos! "); 
    };
};

export const verificarOpcaoDigitada = (opcaoDigitada) => {
    if (opcaoDigitada !== 1 && opcaoDigitada !== 2 && opcaoDigitada !== 3 && opcaoDigitada !== 4){
        throw new Error("Ops! opção digitada inválida. ");
    };
};

