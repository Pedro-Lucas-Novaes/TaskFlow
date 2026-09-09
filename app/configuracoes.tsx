import { router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Configuracoes() {
  const [iniciado, setIniciado] = useState(false);

  function iniciarAplicacao() {
    setIniciado(true);
    router.push("/tarefas");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Configurações</Text>
      <Pressable
        onPress={iniciarAplicacao}
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
      >
        <Text style={styles.textoBotao}>Tarefas</Text>
      </Pressable>
      <Button title="Voltar" onPress={router.back} />
    </View>
  );
}
