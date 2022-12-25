import { TouchableOpacity } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import { styles } from "./styles";
import { colors } from "../../contants";

interface ButtonProps {
  onAdd: () => void;
}

export function AddButton(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onAdd}>
      <FeatherIcon name="plus-circle" size={16} color={colors.white} />
    </TouchableOpacity>
  );
}
