import Botao from "@/components/Botao";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Tarefas() {
  function voltarInicio() {
    router.dismissAll();
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      <Botao texto="Voltar" onPress={router.back} />

      <Botao
        texto="Configurações"
        onPress={() => router.push("/configuracoes")}
      />

      <Botao texto="INICIO" onPress={voltarInicio} />

      <Botao texto="Excluir" onPress={voltarInicio} cor="#c42626ff" />
    </View>
  );
}
