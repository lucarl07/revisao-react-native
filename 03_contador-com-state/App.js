import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)

  return (
    <SafeAreaView style={$.container}>
      <StatusBar style="auto" />
      
      <View style={$.header}>
        <Text style={$.title}>Contador com State</Text>
        <Text style={$.desc}>É bem simples: Você aumenta e diminui o valor dele!</Text>
      </View>
      
      <View style={$.main}>
        <Text style={$.count}>
          Número: {count}
        </Text>
        <View style={$.btn_wrapper}>
          <Pressable
            style={$.btn_A}
            onPress={increaseCount}
          >
            <Text style={$.text_btn}>+1</Text>
          </Pressable>
          <Pressable
            style={$.btn_B}
            onPress={decreaseCount}
          >
            <Text style={$.text_btn}>-1</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const $ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top'
  },
  header: {
    alignItems: 'center',
    marginBlock: 128,
    marginInline: 32
  },
  main: {
    alignItems: 'center',
    gap: 16
  },
  btn_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  title: {
    fontWeight: 700,
    fontSize: 32,
    textAlign: 'center'
  },
  desc: {
    fontSize: 16,
    textAlign: 'center'
  },
  count: {
    fontSize: 20
  },
  text_btn: { 
    color: 'white',
    fontSize: 16,
    fontWeight: 700
  },
  btn_A: { 
    backgroundColor: '#1f95a2',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 12
  },
  btn_B: { 
    backgroundColor: '#44834b',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 12
  }
});
