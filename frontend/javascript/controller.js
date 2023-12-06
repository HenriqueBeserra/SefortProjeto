
//funções de coleta de informações de usuário
function organizaIformacoes (value1, value2, value3) {

    let bd  = [];
    let doc = {};
    doc.mat = value1
    doc.pw  = value2

    bd.push(doc);
    return bd;

} 

async function coletaInformacoes () {

    const formData = new FormData(document.querySelector('form'));
    const inputMatricula_value = await formData.get('numero-de-matricula') ;
    const inputData = await formData.get('pw');
    
    
    const processData = await verificaOsCampos(inputData, inputMatricula_value, organizaIformacoes)
    return processData;

}; 

function verificaOsCampos(mat, pwd, callback){

    if(mat === ''){
        window.alert('preencha os campos')
    } 
    else if( pwd ===''){
        window.alert('preencha os campos');
    }
    else{
        callback(mat, pwd)
    }
    
}

function limpaForm () {
   
    const matricula = document.querySelector("#numero-de-matricula");
    const senha     = document.querySelector('#senha');
    
    matricula.value = '';
    senha.value     = '';
};


//Funções de controle do sistema

// Funções de banco de dados

// Funções de renderização

