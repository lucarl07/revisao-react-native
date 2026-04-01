import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import $ from './styles'

export default function App() {
  const [numA, setNumA] = useState(null)
  const [numB, setNumB] = useState(null)
  const [result, setResult] = useState(null)

  const sum = () => setResult(numA + numB)
  const subtract = () => setResult(numA - numB)
  const multiply = () => setResult(numA * numB)
  const divide = () => {
    if (numB == 0) {
      setResult('Divisão impossível de ser realizada.')
      return;
    }
    return setResult(numA / numB)
  }

  return (
    <SafeAreaView style={$.container}>
      <StatusBar style="auto" />
      <View style={$.header}>
        <Text style={$.title}>Calculadora Simples</Text>
        <Text style={$.desc}>Realiza operações aritméticas entre dois números.</Text>
      </View>
      <View style={$.input_wrapper}>
        <TextInput 
          placeholder='1º Termo'
          placeholderTextColor='#1f95a2'
          onChangeText={(val) => setNumA(Number(val))}
          defaultValue={numA}
          style={$.input} />
        <TextInput 
          placeholder='2º Termo'
          placeholderTextColor='#1f95a2'
          onChangeText={(val) => setNumB(Number(val))}
          defaultValue={numB}
          style={$.input} />
      </View>
      <View style={$.button_grid}>
        <Pressable 
          style={$.button}
          onPress={sum}
        >
          <Text style={$.button_text}>+</Text>
        </Pressable>
        <Pressable 
          style={$.button}
          onPress={subtract}
        >
          <Text style={$.button_text}>-</Text>
        </Pressable>
        <Pressable 
          style={$.button}
          onPress={multiply}
        >
          <Text style={$.button_text}>×</Text>
        </Pressable>
        <Pressable 
          style={$.button}
          onPress={divide}
        >
          <Text style={$.button_text}>÷</Text>
        </Pressable>
      </View>
      {result !== null && (
        <View style={$.result_wrapper}>
          <Text style={$.result_label}>Resultado: </Text>
          <Text style={$.result}>{result}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
