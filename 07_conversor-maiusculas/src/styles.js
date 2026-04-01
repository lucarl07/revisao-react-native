import { StyleSheet } from 'react-native';

const views = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginInline: 32,
  },
  main: {
    alignItems: 'center',
    marginBlock: 32,
    gap: 16
  },
  result_wrapper: {
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 32
  }
});

const elements = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: 'center'
  },
  desc: {
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    maxWidth: 360,
    borderBottomWidth: 1,
    borderBottomColor: '#e36f3e',
    color: '#bb4b1b'
  },
  button: {
    width: 180,
    paddingBlock: 12,
    borderRadius: 12,
    backgroundColor: '#e36f3e',
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center'
  },
  result_label: {
    fontWeight: 700
  },
  result: {
    textAlign: 'center'
  }
})

export default StyleSheet.flatten([views, elements]);