import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'










const Home = () => {


  return (
    <SafeAreaView className = "bg-yellow-500  h-full">
      <View className = "items-center justify-center h-full">
        <Text className = "text-3xl text-pink-500">HOME</Text>
      </View>
  </SafeAreaView>
  )
}

export default Home