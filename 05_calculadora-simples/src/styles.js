import { StyleSheet } from 'react-native';

const containers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center'
  },
})

const elements = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 700
  },
  desc: {
    fontSize: 16
  },
})

export default StyleSheet.flatten([containers, elements]);