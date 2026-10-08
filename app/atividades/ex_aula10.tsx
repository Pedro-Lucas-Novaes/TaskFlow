import Botao from "@/components/Botao";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { styles } from "../../styles/global";

const tarefas = [
  {
    id: "1",
    nome: "Teclado",
    preco: "120",
  },
  {
    id: "2",
    nome: "Monitor",
    preco: "500",
  },
  {
    id: "3",
    nome: "Mouse",
    preco: "250",
  },
];

// const tarefas2 = [
//   {
//     title: "Pendentes",
//     data: ["Estudar react native", "Entregar tarefa de PDM"],
//   },
//   {
//     title: "Concluidas",
//     data: ["Entregar tarefa de Estatistica"],
//   },
// ];

// const secoes = [
//   {
//     title: "Pendentes",
//     data: tarefas.filter((tarefa) => !tarefa.concluida),
//   },
//   {
//     title: "Concluidas",
//     data: tarefas.filter((tarefa) => tarefa.concluida),
//   },
// ];

export default function Tarefas() {
  function voltarInicio() {
    router.dismissAll();
    router.push("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <FlatList
        data={tarefas}
        contentContainerStyle={{ padding: 25 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {/* <TarefaCard titulo={item.nome} descricao="" prioridade="" /> */}
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco}</Text>
          </>
        )}
        ListEmptyComponent={<Text>Nenhuma Produto encontrado na Lista.</Text>}
      />

      <Botao texto="Voltar" onPress={router.back} />
    </View>
  );
}
