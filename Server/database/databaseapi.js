const { User, Objects, Relation } = require('./classes');
// const runQuery = require('./queryFunctions');
const LLD = require('./Basics')



isUserValid = async (username) => {
    let user1 = new User(true)
    let user2 = new User(username)
    user2.password = 
    returnObj = await LLD.get(user1, 'user', user2)
    if (returnObj)
        if (returnObj.length === 1) {
            return true
        }
    return false
}

// this is here for compatibility reason. It is deprecated and will be removed soon
getuserid = async (username) => {
    let user1 = new User()
    user1._id = true
    let user2 = new User(username)
    let returnObj = await LLD.get(user1, 'user', user2)
    if (returnObj) {
        return returnObj[0]._id
    }
}

validate_user = async (username) =>{
    let user1 = {_id:true, password:true}
    let user2 = {username: username};
    let returnObj =await LLD.get(user1, 'user', user2)
    if (returnObj) {
        return returnObj[0]
    }
    return 'false'
}

addUser = async (signupdetails) => {
    const type = 'user';
    const postObject = new User(signupdetails.username, signupdetails.email);
    postObject.password = signupdetails.password 
    // console.log(postObject)
    await LLD.post(type, postObject);
    let returnObj = await LLD.get({_id:true}, type, postObject)
    if (returnObj) return returnObj[0];
    return false;
}

deleteUser = async(id) =>{
    type = 'user';
    let condition = {_id:id}
    const returnObj = await LLD.drop(type, condition)
    return returnObj;
}

// Resources start here
getResource = async (type, _id = null) => {
    let toread = new Objects(true, true)
    let condition = null
    if (_id) condition = { _id: _id }
    let returnObj = await LLD.get(toread, type, condition)
    console.log(returnObj)
    return returnObj[0].filename;
}
getfromCondition = async (type, condition) => {
    let toread = new Objects(true, true)
    toread._id = true
    const returnObj = await LLD.get(toread, type, condition)
    return returnObj;
}

postResource = async (type, object) => {
    // Basic condition checks here
    let postObject = new Objects(object.name, object.filename, object.userid)
    await LLD.post(type, postObject)
    const returnObj = getfromCondition(type,postObject)
    return returnObj;
}

putResource = async (toput, type, objectid) => {
    // Basic condition checks here
    let putObject = new Objects(toput.name, toput.filename, toput.userid)
    let checkObject = { _id: objectid }
    await LLD.put(putObject, type, checkObject)
    const returnObj =await getfromid(type, objectid)
    return returnObj;
}
deleteResource = async (type, objectid) => {
    let condition = { _id: objectid }
    const returnObj = await LLD.drop(type, condition)
    return returnObj;
}
deletefromUser = async (type, userid) => {
    let condition = { userid:userid }
    const returnObj = await LLD.get({filename: true}, type, condition)
    await LLD.drop(type, condition)
    return returnObj;
}
module.exports = { isUserValid, addUser, validate_user, getuserid, deleteUser, getResource, getfromCondition, postResource, putResource, deleteResource, deletefromUser }
