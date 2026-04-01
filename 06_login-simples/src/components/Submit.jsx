import { Pressable, StyleSheet, Text } from 'react-native'

const Submit = ({ action }) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.text}>Fazer login</Text>
    </Pressable>
  )
}

export default Submit

const styles = StyleSheet.create({})