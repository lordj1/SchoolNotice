import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const profile = () => {
  return (
    <SafeAreaView className = "bg-yellow-500  h-full">
      <View className = "items-center justify-center h-full">
        <Text className = "text-3xl text-pink-500">PROFILE</Text>
      </View>
  </SafeAreaView>
  )
}

export default profile

