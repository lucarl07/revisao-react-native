import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormInput = ({label, error, ...inputProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input} 
        {...inputProps}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({

})