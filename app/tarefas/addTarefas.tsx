import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddTarefas() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <View>
      <Text>Nova Tarefa</Text>
      <TextInput
        style={styles.campo}
        onChangeText={(texto) => {
          setTitulo(texto);
        }}
        placeholder="Digite o titulo da tarefa"
      />
      <TextInput
        value={descricao}
        style={styles.campo}
        onChangeText={(texto) => {
          setDescricao(texto);
        }}
        placeholder="Digite a descrição da tarefa"
        multiline
      />

      <Text style={{ fontSize: 50, fontWeight: "bold" }}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderWidth: 3,
  },
});
