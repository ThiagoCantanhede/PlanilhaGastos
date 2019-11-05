class Login{
    constructor(email, senha){
        this._email = email;
        this._senha = senha;
    }

    get email(){
        return this._email;
    }
    get senha(){
        return this._senha;
    }
 
    get LoginJson(){
        let usuario = {
            email : this._email,
            senha : this._senha,
        }        
        return JSON.stringify(usuario);
    }

}