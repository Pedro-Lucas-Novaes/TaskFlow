import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Bem vindo" }} />
      <Stack.Screen name="tarefas" options={{ title: "Minhas Tarefas" }} />
      <Stack.Screen name="configuracoes" options={{ title: "Configurações" }} />
    </Stack>
  );
}
