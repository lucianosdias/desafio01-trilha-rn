import { useState } from "react";
import { View } from "react-native";
import { AddButton } from "../../components/Button";
import { Input } from "../../components/Input";

import { styles } from "./styles";

interface FormProps {
  addTodo: (todo: string) => void;
}

export function Form(props: FormProps) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.addForm}>
        <Input text={newTodo} onChange={setNewTodo} />
        <AddButton
          onAdd={() => {
            props.addTodo(newTodo);
            setNewTodo("");
          }}
        />
      </View>
    </View>
  );
}
