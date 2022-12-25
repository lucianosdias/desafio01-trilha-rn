import { useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { styles } from "./styles";
import { Brand } from "../../components/Brand";
import { Form } from "../../components/Form";
import { Summary } from "../../components/Summary";
import { TodoItem } from "../../components/TodoItem";
import { Todo } from "../../interfaces/Todo";
import { EmptyItem } from "../../components/EmptyItem";

export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddTodo(text: string) {
    if (!todos.some((t) => t.text === text)) {
      setTodos((previous) => [
        ...previous,
        { id: (todos.length + 1).toString(), text, done: false },
      ]);
    }
  }

  function handleRemoveTodo(id: string) {
    setTodos((previous) => previous.filter((t) => t.id !== id));
  }

  function handleToggleComplete(id: string) {
    const todoIndex = todos.findIndex((t) => t.id === id);
    todos[todoIndex].done = !todos[todoIndex].done;
    setTodos([...todos]);
  }

  return (
    <View style={styles.container}>
      <View style={{ position: "relative", marginBottom: 27 }}>
        <Brand />
        <Form addTodo={handleAddTodo} />
      </View>

      <Summary todos={todos} />

      <FlatList
        style={{ paddingHorizontal: 24 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            {...item}
            key={item.id}
            toggleComplete={handleToggleComplete}
            removeTodo={handleRemoveTodo}
          />
        )}
        ListEmptyComponent={<EmptyItem />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
