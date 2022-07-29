import { SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/input'
import Container from '../../components/Common'
import CustomButton from '../../components/customButton'

export default function Login() {
    const [value,onChangeText] =useState ("")

  return (
    <Container>
      <Input 
       label="Username"
       onChangeText={onChangeText}
       value={value} 
        />
      <Input 
       label="Password"
       icon={<Text>Hide</Text>}
       iconPosition="right"
       onChangeText={onChangeText}
       value={value} 
        />
        <CustomButton secondary title="Submit" loading={true} disabled={true}/>

    </Container>
   
  )
}