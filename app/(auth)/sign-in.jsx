import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {icons, images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const [isSubmitting, setisSubmitting] = useState(false)


  const submit = () => {

  }

  return (
    <SafeAreaView className = "bg-yellow-500 h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={icons.schoolLogo}
            resizeMode="contain"
            className = "w-[115px] h-[35px]"
          />
          <Text className = "text-2xl text-black-100 mt-10 font-psemibold">
            Sign in to {' '}
            <Text className = "text-blue-950">SCHOOL NOTICE</Text>
          </Text>

          <FormField 
          title = "Email"
          value = {form.email}
          handleChangeText = {(e) => setform({...form, email: e})}
          otherStyles = "mt-7"
          keyboardType = "email-address"
          />

          <FormField 
          title = "Password"
          value = {form.password}
          handleChangeText = {(e) => setform({...form, password: e})}
          otherStyles = "mt-7"
          />
          
          <CustomButton 
            title = "Sign In"
            handlePress = {() => router.replace('home')}
            containerStyle = "mt-7"
            isLoading = {isSubmitting}
          />

          <View className = "justify-center pt-5 flex-row gap-2">
              <Text className = "text-lg text-gray-800 font-pregular">
                Don't have account ?
              </Text>
              <Link href="/sign-up" >
                <Text className= "text-lg font-semibold text-white">Sign Up</Text>
              </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn