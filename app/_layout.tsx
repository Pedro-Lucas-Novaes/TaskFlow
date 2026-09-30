import {Stack} from 'expo-router'

export default function Layout(){

    return(
        <Stack>
            <Stack.Screen
            name="index"
            options={{title: "TaskFlow"}}
            />

            <Stack.Screen
            name="tarefas/tarefas"
            options={{title: "Minhas Tarefas"}}
            />

            <Stack.Screen
            name="tarefas/AddTarefas"
            options={{title: "Adicionar Tarefas"}}
            />
        </Stack>
    )
}