import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text style={style.meuTexto}>Olá Mundo!</Text>
      <Text>Bem Vindo Pedro!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  meuTexto: {
    color: "red",
    fontSize: 20,
  },
});
