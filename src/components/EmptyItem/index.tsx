import { Text, View } from "react-native";
import { styles } from "./styles";
import EmptyIcon from "../../assets/emptyIcon.svg";

export function EmptyItem() {
  return (
    <View style={styles.container}>
      <EmptyIcon height={56} width={56} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
