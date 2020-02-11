class ContasAPagarView{
    constructor(elemento){

        this._elemento = elemento;
        
        this._elemento.addEventListener("click", (event)=>{
            if(event.target.textContent === 'Excluir'){ 
                let contasAPagarController = new ContasAPagarController();              
                contasAPagarController.apagarContaAPagar(event.target.attributes.IDLINHA.value);                     
                event.target.parentNode.remove();                
                }
            }
        );
        
    }

   
    atualizarGrid(linha){
        let mesInicio = moment(linha.inicio).month();
        
        let linhaTabela = document.createElement("tr");      
        linhaTabela.setAttribute("id", linha.id);                       
        
        let parcelas = this._retornarQuantidadeParcelas(mesInicio, linha);

        linhaTabela.appendChild(this._criarColuna(linha.nome, linha));
        
        this._criarColunasZeradas(linhaTabela, mesInicio);         
        
        this._criarColunasComValorParcela(linha, linhaTabela, parcelas);
        
        this._elemento.appendChild(linhaTabela);       
        // teste para o git
        this._limparFormulario();
    }
    
    _criarColuna(valor, conta = null){
        let colunaTabela = document.createElement("td");
        if(conta != null){ 
            colunaTabela.setAttribute("IDLINHA", conta.id); 
        }
        colunaTabela.textContent = valor; 
        return colunaTabela; 
    }

    _criarColunasZeradas(linhaTabela, quantidadeMeses){
        for (let i = 0; i < quantidadeMeses; i++){
            linhaTabela.appendChild(this._criarColuna(this._formatarParaMoeda(0)));
        }           
    }

    _criarColunasComValorParcela(linha, linhaTabela, quantidadeMeses){
        for (let i = 0; i < quantidadeMeses; i++){
            linhaTabela.appendChild(this._criarColuna(this._formatarParaMoeda(linha.valor/linha.quantidadeParcelas), linha));
        }        

        for (let i = 0; i < 12 - (moment(linha.inicio).month() + quantidadeMeses ) ; i++){
            linhaTabela.appendChild(this._criarColuna(this._formatarParaMoeda(0)));
        }        

        linhaTabela.appendChild(this._criarColuna('Excluir', linha));
        
    }

    _retornarQuantidadeParcelas(mesInicio, linha){
        let parcelas = (12 - mesInicio);
        if ( parcelas > linha.quantidadeParcelas){
            parcelas = linha.quantidadeParcelas;
        }

        return parcelas;
    }

    _limparFormulario(){
        $("#inputValor").val(''); 
        $("#inputData").val('');
        $("#inputContaPagar").val('');
        $("#inputParcelas").val('');
        $("#inputContaPagar").focus();        
    }

    _formatarParaMoeda(numero){
        var formatado = "R$ " + numero.toFixed(2).replace(".",",");
        return formatado;
    }



}