class LoginController{
    constructor(){
        this._email = $("#inputEmail");
        this._senha = $("#inputPassword");
    }    

    _inserirUsuario(usuario){       
        var http = new XMLHttpRequest();
        var url = 'http://localhost:3000/usuarios';
        var params = usuario.LoginJson;    
        
        console.log(params)
        
        http.open('POST', url, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(params);                      
    }

    tratarLogin(event){
        event.preventDefault();
        
        let email = this._email.val();
        let senha = this._senha.val();
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'http://localhost:3000/usuarios/'+email);    
        xhr.responseType = 'json';      
        xhr.send();
        
        let self = this;
        
        xhr.onload = function() {
            let responseObj = xhr.response;
            if (responseObj.length == 0){ 
                let usuario = new Login(email, senha);
                self._inserirUsuario(usuario);
                window.location.replace('planilha.html?email='+ email)  
            }
            else{
                responseObj.map(usuario => {
                    if(usuario.senha !== senha){
                        alert('Senha inválida!');
                        self._senha.focus();
                    }
                    else{
                        window.location.replace('planilha.html?email='+ email)          
                    }
                })    
            }
        };  


           

    }


}