class ListaContasAPagar{
    constructor(){
        this._listaContasAPagar = [];
        this._ContasAPagarView = new ContasAPagarView(document.querySelector("#planilhaM"));
    }

    adiciona(ContasAPagar){
        this._listaContasAPagar.push(ContasAPagar);
        this._ContasAPagarView.atualizarGrid(ContasAPagar);    
    }

    limparLista(){
        this._listaContasAPagar = [];    
    }
    
    get listaContasAPagar(){
        return this._listaContasAPagar;
    }
}