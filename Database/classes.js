class Objects{
    constructor(name, filename){
        this.filename = filename;
        this.name = name;
    }
}
class User{
    constructor(name, email, username,password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getDetails(){
        return this.name, this.email, this.username;
    }

    setDetails(name= this.name, email = this.email, username=this.username){
        this.name = name;
        this.email = email;
        this.username = username;
    }
}
class Relation{
    constructor(id1, id2, userid){
        this.id1 = id1;
        this.id2 = id2;
        this.id3 = userid;
    }
}

module.exports = {User, Objects, Relation}
