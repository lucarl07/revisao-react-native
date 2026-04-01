import { StyleSheet, Text, TextInput, View } from 'react-native'

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
  container: {
    display: 'flex',
    gap: 8
  },
  label: {
    color: '#395fa5'
  },
  input: {
    width: 240,
    backgroundColor: '#e8e8e8',
    borderBottomColor: '#395fa5',
    borderBottomWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  error: {
    color: '#bb4254'
  }
})