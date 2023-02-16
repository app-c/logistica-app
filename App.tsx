import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { api } from "./src/utils";
import { IGd, INota, IPonto } from "./src/dto";

export default function App() {
  const [data, setData] = useState<IPonto[]>([]);
  const li = useCallback(async () => {
    const rs = await api.get("/");
    setData(rs.data);
  }, []);

  useEffect(() => {
    li();
  }, []);

  const filDados = useMemo(() => {
    const gd = [] as IGd[];
    const nota = [] as INota[];
    if (data) {
      data.forEach((j) => {
        let nt = { nota: "" };

        nota.forEach((h) => {
          if (h.nota !== j.Nota) {
            nt = { nota: j.Nota };
          }
        });

        nota.push(nt);
      });
    }

    return nota;
  }, [data]);

  console.log(filDados);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
