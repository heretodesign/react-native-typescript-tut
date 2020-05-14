import React from 'react'
import { StyleSheet, Text, View, Route } from 'react-native'

interface CenterProps{}

export const Center: React.FC<CenterProps> = ({children}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{children}</Text>
    </View>
  );
}

