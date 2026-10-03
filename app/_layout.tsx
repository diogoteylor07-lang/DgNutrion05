import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDb } from "@/data/db/migrate";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="dgnutrion05.db" onInit={migrateDb}>
      <Stack screenOptions={{ headerShown: false }} />
    </SQLiteProvider>
  );
}
