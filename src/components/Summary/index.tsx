import { View, Text } from "react-native";
import { Todo } from "../../interfaces/Todo";
import { styles } from "./styles";

interface SummaryProps {
  todos: Todo[];
}

export function Summary({ todos = [] }: SummaryProps) {
  return (
    <View style={styles.summary}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ ...styles.text, ...styles.createdText }}>Criadas</Text>
        <Text style={styles.counter}>{todos.length}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ ...styles.text, ...styles.doneText }}>Concluídas</Text>
        <Text style={styles.counter}>{todos.filter((t) => t.done).length}</Text>
      </View>
    </View>
  );
}
