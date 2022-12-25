import { TextInput, View } from "react-native";
import { colors } from "../../contants";
import { styles } from "./styles";

interface InputProps {
  text: string;
  onChange: (text: string) => void;
}

export function Input({ text, onChange }: InputProps) {
  return (
    <TextInput
      style={styles.textInput}
      value={text}
      onChangeText={(e) => onChange(e)}
      placeholderTextColor={colors.white}
      placeholder="Adicione uma nova tarefa"
    />
  );
}
