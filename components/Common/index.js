import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const Container =({children})=>{
    return (
        <ScrollView>
           <View style={styles.wrapper}>{children}</View>
        </ScrollView>
    )
}
export default Container