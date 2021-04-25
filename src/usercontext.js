// import React, { useState } from 'react';
// let UserContext=React.createContext();

// export default UserContext;
//  export const UserProvider =({children})=>{
//      let [isAuth,setisAuth]=useState(false);
//      return <UserContext.Provider value={{isAuth,setisAuth}}>
//          {children}
//      </UserContext.Provider>
//  }

export const isAuth = () =>
	window.localStorage.getItem("app_token")
		? window.localStorage.getItem("app_token")
		: false;

    