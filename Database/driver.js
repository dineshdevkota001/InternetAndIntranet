const { resolve } = require('path');
const {User, Objects, Relation} = require('./classes');
pool = require('./pool');
const runQuery = require('./queryFunctions');
function createDatabase(){
    let query = "CREATE DATABASE IF NOT EXISTS 3Dviewer2;"
    runQuery(query);
}

function createTable(){
    let mesh = "CREATE TABLE Mesh(meshid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), filename VARCHAR(255));";
    let image = "CREATE TABLE Image(imageid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), filename VARCHAR(255));";
    let user = "CREATE TABLE User(userid INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), username VARCHAR(255), password VARCHAR(255));";
    let group = "CREATE TABLE Groups(groupid INT AUTO_INCREMENT PRIMARY KEY, meshid INT, imageid INT, userid INT);";
    runQuery(mesh + image + user + group);
}

module.exports.add = (type, details) => {
    type = type.toLowerCase();
    if (type === 'user'){
        runQuery("INSERT INTO User(name,email,username,password) VALUES(?, ?, ?, ?)",Object.values(details))
    }
    else if ( type === "image"){ 
        runQuery("INSERT INTO Image(name, filename) VALUES (?, ?)", Object.values(details))
    }
    else if (type === 'mesh'){
        runQuery("INSERT INTO Mesh(name, filename) VALUES (?, ?)", Object.values(details))
    }
    else if (type === 'group'){
        runQuery("INSERT INTO Group(meshid, imageid) VALUES (?, ?, ?)", Object.values(details))
    }
    else
        console.log('please try a valid type')
    return
}

module.exports.dropbyId = function (type, id){
    type = type.toLowerCase();
    if (type === 'user'){
        runQuery("DELETE FROM User WHERE userid=?;",[id])
    }
    else if ( type === "image"){ 
        runQuery("DELETE FROM User WHERE imageid=?;", [id])
    }
    else if (type === 'mesh'){
        runQuery("DELETE FROM User WHERE meshid=?;", [id])
    }
    else if (type === 'group'){
        runQuery("DELETE FROM User WHERE groupid=?;",[id])
    }
    else
        console.log('please try a valid type which includes "user", "image", "mesh", "group"')
    return
}

module.exports.drop = function (type, details){
    type = type.toLowerCase();
    if (type === 'user'){
        runQuery("DELETE FROM User WHERE userid=?", Objects.values(classes));
    }
    else if ( type === "image"){ 
        runQuery("DELETE FROM User WHERE imageid=?", Objects.values(classes));
    }
    else if (type === 'mesh'){
        runQuery("DELETE FROM User WHERE meshid=?", Objects.values(classes));
    }
    else if (type === 'group'){
        runQuery("DELETE FROM User WHERE groupid=?",Objects.values(classes));
    }
    else
        console.log('please try a valid type which includes "user", "image", "mesh", "group"')
    return
}

module.exports.verifyPassword = async (username, password) => {
    res = await runQuery('SELECT userid FROM User WHERE username=? and password=?',[username,password])
    if (res.length == 1){
        return true}
    else{
        return false}
}

module.exports.getUserid = async (username) => {
    res = await runQuery('SELECT userid FROM User WHERE username=?',[username])
    if (res.length > 0){
        console.log(res[0].userid);
        return res[0].userid;}
    else{
        return false}
}

module.exports.getImages = async (username) => {
    query = 'SELECT i.filename \
            FROM Image as i,\
            User as u, Group as g\
            WHERE g.userid = u.userid, g.imageid = i.imageid , userid = ?'
    res = await runQuery(query, [username])
}

test = async () => {
    res = await runQuery('SELECT * FROM User',[]);
    console.log(Object.values(res[0]));
}
