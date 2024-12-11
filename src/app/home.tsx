import { api } from "@/services/api";
import { useEffect } from "react";
import { Alert, View } from "react-native";

export default function Home() {

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      console.log(data)

    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias")
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <View>

    </View>
  )
}