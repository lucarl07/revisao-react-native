import { Pressable, StyleSheet, Text } from 'react-native'

const Submit = ({ action }) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.text}>Fazer login</Text>
    </Pressable>
  )
}

export default Submit

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 140,
    borderRadius: 32,
    backgroundColor: '#395fa5'
  },
  text: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    color: '#fff'
  }
})