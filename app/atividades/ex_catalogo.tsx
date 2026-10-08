import { styles } from "@/styles/global";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Posts = {
  id: number;
  nome: string;
};

export default function Home() {
  const [post, setPost] = useState<Posts[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await axios.get("http://68.211.112.101:3000/produtos");

        console.log(res.data);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setPost(res.data);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (erro) {
    return (
      <View style={styles.container}>
        <Text>Erro! Não foi possível carregar os dados.</Text>
      </View>
    );
  }

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={40} color="red" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.id} - {item.nome}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
