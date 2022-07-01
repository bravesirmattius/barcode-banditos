import * as React from 'react'
import { View } from 'react-native-web'

export default function MainScreen() {
  return (
   <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
   </View> 
  )
}