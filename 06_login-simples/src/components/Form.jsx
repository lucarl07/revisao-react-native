import { StyleSheet, Text, View } from 'react-native'

const Form = ({ children }) => {
  return (
    <View style={styles.form}>
      {children}
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  form: {
    marginBlock: 48,
    alignItems: 'center',
    gap: 24
  }
})