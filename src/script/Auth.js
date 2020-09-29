export default class Auth{
    isAuth(){
        return window.localStorage.getItem('auth')
    }
    authenticated(login, password){
        if(login && password){
            window.localStorage.setItem('auth', 'true')
            return {isAuth:true, status: 'authentication' }
        }
        return {isAuth:false, status: 'not all fields are filled in'}
    }
}