import { useState, createContext } from 'react'

export const UserContext = createContext()

function Context({children}) {
  const [user, setUser] = useState(null)

  const updateUser = (token) => {
    if (token === null)
    {
      setUser(null)
    }
    else {
      const parseJwt = (_token) => {
        try {
          return JSON.parse(atob(_token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };
      setUser({ 'token': token, 'userName': parseJwt(token).data.name });
    }
  }
  return (
    <UserContext.Provider value={{user, updateUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default Context