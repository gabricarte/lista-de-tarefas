export const conversorBooleano = (status) =>{
    if (status.toLowerCase().trim() === "s"){
        return true;
    } else if (status.toLowerCase().trim() === "n"){
        return false;
    }else{
        throw new Error(`Por favor, digite "S" ou "N" para definir corretamente o status da tarefa. `);
    }
};