import { View, Text, StyleSheet } from "react-native";

export default function DiarioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diário alimentar</Text>
      <Text style={styles.text}>
        Esta tela é a fundação do diário. A busca de alimentos, refeições,
        snapshots e totais será implementada nas próximas fases.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 70, backgroundColor: "#F7F8FA" },
  title: { fontSize: 28, fontWeight: "800", color: "#111827" },
  text: { marginTop: 12, fontSize: 16, lineHeight: 24, color: "#667085" }
});
