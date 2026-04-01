import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Form = ({ children }) => {
  return (
    <View style={styles.form}>
      {children}
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})