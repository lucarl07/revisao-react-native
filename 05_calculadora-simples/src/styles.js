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
  input_wrapper: {
    flexDirection: 'row',
    marginBlock: 32,
    gap: 16
  },
  button_grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 'auto',
    width: 180,
    gap: 20
  },
  result_wrapper: {
    marginTop: 32,
    alignItems: 'center',
    flexDirection: 'row'
  }
})

const elements = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 700
  },
  desc: {
    fontSize: 16
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#1f95a2'
  },
  button: {
    flex: 1,
    minWidth: 80,
    maxWidth: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f95a2',
    borderRadius: 16
  },
  button_text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 700
  },
  result_label: {
    fontWeight: 700,
    color: '#709450'
  },
  result: {
    color: '#709450'
  }
})

export default StyleSheet.flatten([containers, elements]);