import React from 'react'
import { StyleSheet, Text, View, Route } from 'react-native'
import { NavigationContainer, StackActions, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { Center } from './Center';
import { AuthParamList, AuthNavProps } from './AuthParamsList';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

interface RoutesProp{}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<'Login'>) {
  return (
    <Center>
      <Text>We are highly favored by God hey</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  )
}

function Register({ navigation, route }: 
  AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>You must create an account</Text>
      <Button
        title="Go to Login"
        containerStyle={{height: 0}} buttonStyle={{margin: 10, padding: 20, borderRadius: 5}}
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  )
}

export const Routes: React.FC<RoutesProp> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          header: () => null
        }}
        initialRouteName="Login">
        <Stack.Screen
          screen={{
            headerTitle: "Sign In"
          }}
          name="Login" 
          component={Login} 
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})
