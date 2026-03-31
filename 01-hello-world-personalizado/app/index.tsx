import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>
        Olá mundo!
      </Text>
      <Text style={styles.paragraph}>
        Esse é o primeiro dos 7 apps de revisão pedidos na disciplina de Mobile Coding!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4794c7"
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: '#fff'
  },
  paragraph: {
    fontSize: 16,
    color: '#fbed56',
    textAlign: 'center'
  },
})