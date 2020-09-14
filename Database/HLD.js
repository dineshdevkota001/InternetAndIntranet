const {User, Objects, Relation} = require('./classes');
const runQuery = require('./queryFunctions');
const LLD = require('./LLD')

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
        objects.forEach(element => query += LLD.makeTable(element[0], element[1]));
        let res = await runQuery(query)
        console.log(res)
    }
    catch (error){
        console.log(error)
    }
}

