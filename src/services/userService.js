//export - dışardan import edilebileceği anlamına geliyor
//default - js file based olduğu için default bunu ekledik
export default class UserService{

    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=> u.id === id)
    }

}

//SOLID
//S : single responsibility = bir fonksiyon sadece bir işi yapar