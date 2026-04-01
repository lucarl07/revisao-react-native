// Módulos e componentes pré-fabricados:
import { useReducer } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Módulos e componentes personalizados:
import $ from './styles'
import Form from './components/Form';
import Submit from './components/Submit';
import FormInput from './components/FormInput';

function defReducer(prev, next) {
  return { ...prev, ...next }
}

export default function App() {
  const [formState, alterFormState] = useReducer(defReducer, { email: '', password: '' })
  const [formErrors, setFormErrors] = useReducer(defReducer, { email: '', password: '' })

  const onSubmit = () => {
    const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/ 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (formState.email.length <= 0) {
      // E-mail incompleto.
      setFormErrors({ email: 'Digite o seu e-mail.'})
    } else if (!formState.email.match(emailRegex)) {
      // E-mail sem obedecer as normas padrão para um e-mail.
      setFormErrors({ email: 'Digite um e-mail válido.' })
    } else {
      setFormErrors({ email: '' })
    }

    if (formState.password.length <= 0) {
      // Senha incompleta.
      setFormErrors({ password: 'Digite a sua senha.' })
    } else if (!formState.password.match(passwordRegEx)) {
      // Senha com menos de 8 caracteres e/ou sem ao menos um número, letra maiúscula ou letra minúscula.
      setFormErrors({ password: 'Digite uma senha com ao menos: \n- uma letra maiúscula \n- uma letra minúscula \n- um número \nE totalizando 8 caracteres.' })
    } else {
      setFormErrors({ password: '' })
    }
  }

  return (
    <SafeAreaView style={$.app}>
      <StatusBar style="auto" />
      <Text style={$.title}>Faça login no Portal do Aluno</Text>
      <Form>
        <FormInput
          label="E-mail:"
          inputMode="email"
          onChangeText={(email) => alterFormState({email})}
          defaultValue={formState.email}
          error={formErrors.email}
        />
        <FormInput
          label="Senha:"
          inputMode="text"
          secureTextEntry={true}
          onChangeText={(password) => alterFormState({password})}
          defaultValue={formState.password}
          error={formErrors.password}
        />
        <Submit action={onSubmit} />
      </Form>
    </SafeAreaView>
  );
}
