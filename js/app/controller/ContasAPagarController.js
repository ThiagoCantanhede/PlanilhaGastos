class ContasAPagarController{
    constructor(){
        this._listaContasAPagar = new ListaContasAPagar();
        this._valor = $("#inputValor"); 
        this._inicio = $("#inputData");
        this._nome = $("#inputContaPagar");
        this._quantidadeParcelas = $("#inputParcelas");
    }

    _retornarObjetoContaAPartirDosCamposDaTela(){
        return new ContasAPagar(this._nome.val(), this._valor.val(), this._inicio.val(), this._quantidadeParcelas.val(), this._recuperaParametro('email'));
    }

    montarGridComContasDoBancoDeDados(){
        this._listaContasAPagar.limparLista();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/contas_a_pagar/'+this._recuperaParametro('email'));    
        xhr.responseType = 'json';      
        xhr.send();
        let self = this;
        xhr.onload = function() {
            let responseObj = xhr.response;
            responseObj.map(c=>{
                let conta = new ContasAPagar(c.nome, c.valor, moment(c.inicio).add(1,'months'), c.quantidadeParcelas, c._id);
                console.log(conta);
                self._listaContasAPagar.adiciona(conta);            
            })
        };        
    }

    inserirContaAPagar(event){
        event.preventDefault(); 
        let conta = this._retornarObjetoContaAPartirDosCamposDaTela();
        
        var http = new XMLHttpRequest();
        var url = 'http://localhost:3000/contas_a_pagar';
        var params = conta.contaJson;    
       
        http.open('POST', url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(params);        
        setTimeout(() => {
            this.montarGridComContasDoBancoDeDados();    
        }, 100);
        
    }    

    apagarContaAPagar(id){
        var http = new XMLHttpRequest();
        var url = 'http://localhost:3000/contas_a_pagar/' + id;   
       
        http.open('DELETE', url, true);      
        http.send(null);
    }  

    _recuperaParametro(parameter) {  
        var loc = location.search.substring(1, location.search.length);   
        var param_value = false;   
        var params = loc.split("&");   
        for (let i=0; i<params.length;i++) {   
            let param_name = params[i].substring(0,params[i].indexOf('='));   
            if (param_name == parameter) {                                          
                param_value = params[i].substring(params[i].indexOf('=')+1)   
            }   
        }   
        if (param_value) {   
            return param_value;   
        }   
        else {   
            return undefined;   
        }   
    }    



}