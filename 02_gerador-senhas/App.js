import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [charAmount, setCharAmount] = useState(null)
  const [password, setPassword] = useState(null)

  const createPassword = () => {
    const intCharAmount = parseInt(charAmount)
    const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charListLen = charList.length

    let output = ''
    for (let i = 0; i < intCharAmount; i++) {
      output += charList.charAt(
        Math.floor(Math.random() * charListLen)
      );
    }
    setPassword(output)
  }

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Senhas</Text>
        <TextInput
          placeholder='Digite quantos caracteres deve ter a senha...'
          onChangeText={val => setCharAmount(val)}
          defaultValue={charAmount}
          style={styles.charAmount}
        />
        <Pressable 
          style={styles.button}
          onPress={createPassword}
        >
          <Text style={styles.button_text}>Gerar senha</Text>
        </Pressable>
      </View>
      {password && (
        <View style={bottom_container}>
          <Text style={styles.bold}>Senha gerada: </Text>
          <Text style={styles.password}>{password}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 128,
    alignItems: 'center',
    gap: 64
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  bottom: {
    gap: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  charAmount: {
    borderBottomWidth: 1,
    borderBottomColor: '#3f3f93'
  },
  button: {
    backgroundColor: '#3f3f93',
    paddingBlock: 12,
    paddingInline: 16,
    borderRadius: 16,
  },
  button_text: {
    color: '#fff'
  },
  bold: {
    fontWeight: 700,
    fontSize: 20,
    color: '#4e933f'
  },
  password: {
    fontSize: 24,
    color: '#4e933f'
  }
});

const bottom_container = StyleSheet.compose(styles.container, styles.bottom)