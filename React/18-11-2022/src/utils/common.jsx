

function logg(islog,login){
    if(localStorage.getItem("logins")=="true"){
            
        islog(true)
        console.log(login);
    }
        else if(localStorage.getItem("logins")=="false"){
            islog(false)
            console.log(login);
        }

}
export default logg