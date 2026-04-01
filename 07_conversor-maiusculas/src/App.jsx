import $ from './styles';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, TextInput, Text, View } from 'react-native';

export default function App() {
  const [text, changeText] = useState('')
  const [result, changeResult] = useState(null)

  const capitalize = () => changeResult(text.toUpperCase())

  return (
    <SafeAreaView style={$.container}>
      <StatusBar style="auto" />
      <View style={$.header}>
        <Text style={$.title}>Capitalizador de Texto</Text>
        <Text style={$.desc}>
          Converte todas as letras de um texto para maiúsculas.
        </Text>
      </View>
      <View style={$.main}>
        <TextInput 
          placeholder="Digite um texto qualquer..."
          placeholderTextColor="#a9a9a9"
          onChangeText={(t) => changeText(t)}
          defaultValue={text}
          style={$.input}
        />
        <Pressable style={$.button} onPress={capitalize}>
          <Text style={$.button_text}>Capitalizar</Text>
        </Pressable>
      </View>
      {result !== null && (
        <View style={$.result_wrapper}>
          <Text style={$.result_label}>Texto convertido:</Text>
          <Text style={$.result}>{result}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
