import React from 'react'

let UserContext = React.createContext({login:false, username:''})
const UserProvider = UserContext.Provider

export {UserProvider}
export default UserContext