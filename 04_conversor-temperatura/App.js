import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [temp, setTemp] = useState(null)
  const [result, setResult] = useState(null)

  const celsiusToFahrenheit = () => setResult((temp * 1.8 + 32).toFixed(1))

  const fahrenheitToCelsius = () => setResult(((temp - 32) / 1.8).toFixed(1))

  return (
    <SafeAreaView style={$.container}>
      <StatusBar style="auto" />
      
      <View style={$.header}>
        <Text style={$.title}>Conversor de Temperatura</Text>
        <Text style={$.desc}>Converte de Celsius para Fahrenheit, e vice-versa.</Text>
      </View>
      
      <View style={$.main}>
        <TextInput 
          placeholder='Digite uma temperatura (ºC/ºF)...'
          placeholderTextColor='#dd9595'
          onChangeText={(value) => setTemp(value)} 
          defaultValue={temp} 
          style={$.input} />
        
        {!Number.isNaN(result) && (
          <Text style={$.result}>
            Resultado: {result}
          </Text>
        )}
      </View>
      
      <View style={$.footer}>
        <Pressable
          style={$.btn_A}
          onPress={celsiusToFahrenheit}
        >
          <Text style={$.text_btn}>Converter para ºC</Text>
        </Pressable>
        <Pressable
          style={$.btn_B}
          onPress={fahrenheitToCelsius}
        >
          <Text style={$.text_btn}>Converter para ºF</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const $ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f3f3f',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    alignItems: 'center'
  },
  main: {
    alignItems: 'center',
    gap: 16
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  title: {
    color: 'white',
    fontWeight: 700,
    fontSize: 32
  },
  desc: {
    color: 'white',
    fontSize: 16
  },
  input: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  result: { color: 'white' },
  text_btn: { color: 'white' },
  btn_A: { 
    backgroundColor: '#1f95a2',
    padding: 12,
    borderRadius: 12
  },
  btn_B: { 
    backgroundColor: '#44834b',
    padding: 12,
    borderRadius: 12
  }
});
