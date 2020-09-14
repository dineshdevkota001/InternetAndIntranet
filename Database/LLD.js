const {User, Objects, Relation} = require('./classes');
const runQuery = require('./queryFunctions');

const IDTYPE = 'INT AUTO_INCREMENT PRIMARY KEY';
const STRING = 'VARCHAR(256)';
const INT = 'INT';
var TABLES = ['user', 'image', 'mesh', 'group']

let classToTable = (class_var, name) =>{
    let sql_start = "CREATE TABLE ";
    let sql_query = sql_start + name + '('
    let database_elements = Object.keys(class_var);
    // taking values as types of data in the database
    let database_datatypes = Object.values(class_var);

    let table_description = [];
    // loop through the variable keys
    database_elements.forEach((element,index) =>{
        table_description.push(element + ' ' +database_datatypes[index]);
    })
    sql_query += table_description.join() +');';
    return sql_query;
}

let makeTable = (class_var, name) =>{
    // add a id datastype for the database to make
    class_var._id = IDTYPE;
    // get the query
    let query = classToTable(class_var, name)
    // return the query for use
    return query
}

let makeAllTables = async () =>{
    try{
        objects = []
        // make objects before going forward
        // increase the objects here to make them into a table in database
        // an unique integer _id is added for each element (subject to change)
        objects.push([new User(STRING, STRING, STRING, STRING),'user']);
        objects.push([new Objects(STRING, STRING, INT), 'image']);
        objects.push([new Objects(STRING, STRING, INT), 'mesh']);
        objects.push([new Relation(INT, INT, INT), 'group']);
        let query = '';
        // iterate over each function 
        objects.forEach(element => query += makeTable(element[0], element[1]));
        let res = await runQuery(query)
        console.log(res)
    }
    catch (error){
        console.log(error)
    }
}

let clean = (obj) => {
    try {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
        }
    }   
    } catch (error) {
        console.log(error)
    }
    finally{
        if (obj) return obj
    }
}

let getArray = (obj) =>{
    try{
        keys = Object.keys(obj)
        values = Object.values(obj)
    }
    catch(error){
        console.error(error)
    }
    finally{
        return {keys, values}
    }
}


let add = async (type ,obj)=>{
    type = type.toLowerCase();
    let start = 'INSERT INTO '
    let query = ''
    try {
        if ( TABLES.includes(type) ){
            query = start + type;
            let {names, values} = getArray(obj);
            names = names.join();
            whats = whats.join();
            query += '('+names+') VALUES('+ whats+');';
            res = await runQuery(query, values)
            console.log(res)
        }
        else{
            console.log('ERROR! check the type')
        }
    } catch (error) {
     console.error(error)   
    }
}

let getWhere = (obj) =>{
    let clean_obj = clean(obj);
    let {keys,values} = getArray(clean_obj);
    let condition = []
    keys.forEach((element,index)=>{
        condition.push(element+'=?')
    })
    condition = condition.join();
    return [condition, values]
}

let drop = async(type,obj) =>{
    type = type.toLowerCase();
    if ( TABLES.includes(type) ){
        let {condition, values} = getWhere(obj) 
        query = "DELETE FROM "+ type +" WHERE " + condition + ';' ;
        let res = await runQuery(query,values)
        console.log(res)
    }
    else{
        console.log('ERROR! check the type')
    }
}

let read = async(read, type, obj) =>{
    let read_vals = Object.keys(clean(read));
    let reads = read_vals.join();
    type = type.toLowerCase();
    if ( TABLES.includes(type) ){ 
        let {condition, values} = getWhere(obj);
        let query = 'SELECT ' + reads + " FROM " + type + ' WHERE ' + condition +';';
        let res = await runQuery(query,values)
        console.log(res)
        return res
    }
    else{
        console.log('ERROR! check the type')
    }
}

let alter = async(update, type, obj) => {
    type = type.toLowerCase();
    if ( TABLES.includes(type) ){
        
        var [condition1, values1] = getWhere(update)
        let set = ' SET ' + condition1

        let [condition2, values2] = getWhere(obj)
        let where = " WHERE " + condition2 + ';'
        
        values = values1.concat(values2)
        query = "UPDATE "+ type +set + where;
        let res = await runQuery(query,values)
        console.log(res)
    }
    else{
        console.log('ERROR! check the type')
    }
}
