import { View } from "react-native";
import Logo from "../../assets/logo.svg";
import { styles } from "./styles";

export function Brand() {
  return (
    <View style={styles.container}>
      <Logo width={110} height={32} style={styles.logo} />
    </View>
  );
}
