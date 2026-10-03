import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>DgNutrion05</Text>
      <Text style={styles.title}>Seu controle alimentar</Text>
      <Text style={styles.subtitle}>
        Fundação inicial pronta. O aplicativo foi configurado para funcionar
        offline e evoluir por módulos.
      </Text>

      <Pressable style={styles.button} onPress={() => router.push("/diario")}>
        <Text style={styles.buttonText}>Abrir diário</Text>
      </Pressable>

      <Text style={styles.version}>Fase 1 · v0.1.0 · pt-BR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "center",
    backgroundColor: "#F7F8FA"
  },
  brand: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "#1F2937"
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#667085",
    marginTop: 12,
    marginBottom: 28
  },
  button: {
    backgroundColor: "#111827",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700"
  },
  version: {
    marginTop: 24,
    color: "#98A2B3",
    textAlign: "center"
  }
});
