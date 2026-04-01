import { StyleSheet, Text } from 'react-native'

const Title = ({ value }) => {
  return <Text style={styles.title}>{value}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 800,
    color: '#5a3c5a'
  }
})