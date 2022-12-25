import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../contants";
import { styles } from "./styles";

interface TodoItemProps {
  id: string;
  text: string;
  done?: Boolean;
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
}

export function TodoItem(props: TodoItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => props.toggleComplete(props.id)}
      >
        {props.done ? (
          <FontAwesome name="check-circle" size={24} color={colors.purple} />
        ) : (
          <FontAwesome name="circle-o" size={24} color={colors.blue} />
        )}
      </TouchableOpacity>

      <Text
        style={{
          ...styles.text,
          ...(props.done && {
            textDecorationLine: "line-through",
            color: colors.gray300,
          }),
        }}
      >
        {props.text}
      </Text>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => props.removeTodo(props.id)}
      >
        <FontAwesome name="trash-o" size={24} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
}
