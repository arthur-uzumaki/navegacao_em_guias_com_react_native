import { Cover } from "@/components/Cover";
import { View } from "react-native";
import { Navigation } from "@/app/navigation/Navigation";


export function Movies() {
  return (
    <View className="flex-1 bg-black">
      <Cover />

      <Navigation />

    </View>
  )
}