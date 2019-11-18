class ContasAPagar{
    constructor(nome, valor, inicio, quantidade , usuario, id){
        this._nome = nome;
        this._valor = valor;
        this._inicio = inicio;
        this._quantidadeParcelas = quantidade;
        this._usuario = usuario;
        this._id = id;
    }

    get nome(){
        return this._nome;
    }
    get valor(){
        return this._valor;
    }
 
    get inicio(){
        return this._inicio;
    }
    
    get quantidadeParcelas(){
        return this._quantidadeParcelas;
    }

    get usuario(){
        return this._usuario;
    }

    get id(){
        return this._id;
    }    

    get contaJson(){
        let conta = {
            nome : this._nome,
            valor : this._valor,
            inicio : this._inicio,
            quantidadeParcelas : this._quantidadeParcelas,        
            usuario: this._usuario   
        }        
        return JSON.stringify(conta);
    }

}