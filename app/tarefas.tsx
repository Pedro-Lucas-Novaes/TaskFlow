import { router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Tarefas() {
  const [iniciado, setIniciado] = useState(false);
  function configuracoes() {
    setIniciado(true);
    router.push("/configuracoes");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      <Pressable
        onPress={configuracoes}
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
      >
        <Text style={styles.textoBotao}>Configurações</Text>
      </Pressable>
      <Button title="Voltar" onPress={router.back} />
    </View>
  );
}
