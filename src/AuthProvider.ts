import React, { useState } from 'react'
import { StyleSheet, Text, View, Route, AsyncStorage } from 'react-native'

export const AuthContext = React.createContext(); 

interface AuthProviderProps{

}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState(null);
    return (
      <AuthContext.Provider value={{
        user,
        login: () => {
          const fakeUser = { username: 'abel'};
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser))
        }
        logout: () => {
          AsyncStorage.removeItem("user")

        }
      }}>
         {children}
      </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({})
