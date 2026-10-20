import Card from "@/components/Card";
import Titulo from "@/components/Titulo";
import { styles } from "@/styles/global";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Atividades() {
  const [post, setPost] = useState<Post | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarPost() {
      try {
        const resposta = await axios.get<Post>(
          "https://jsonplaceholder.typicode.com/posts/1",
        );

        setPost(resposta.data);
      } catch (error) {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    carregarPost();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Card>
          <Titulo texto="Publicação" />

          {carregando ? (
            <>
              <ActivityIndicator size="large" color="#007bff" />
              <Text style={styles.descricao}>Carregando publicação...</Text>
            </>
          ) : erro ? (
            <Text style={styles.descricao}>Erro ao carregar a publicação!</Text>
          ) : (
            <>
              <Text style={styles.descricao}>{post?.title}</Text>

              <Text style={styles.descricao}>{post?.body}</Text>
            </>
          )}
        </Card>
      </View>
    </SafeAreaView>
  );
}
