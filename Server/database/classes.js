class Objects{
    constructor(){
        this.name;
        this.filename;
        this.userid;
    }
    details(name, filename, userid){
        this.name = name;
        this.filename = filename;
        this.userid = userid;
    }
}

class User{
    constructor(){
        this.name
        this.username
        this.email
        this.password
    }
    details(name= this.name, username=this.username, email = this.email, password=this.password){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class Relation{
    constructor(){
        this.id1;
        this.id2;
        this.id3;
    }

    details(id1, id2, userid){
        this.id1 = id1;
        this.id2 = id2;
        this.id3 = userid;
    }
}

module.exports = {User, Objects, Relation}
