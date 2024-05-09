import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text } from "react-native";

export function Cover() {
  return (
    <ImageBackground
      source={require('@/assets/cover.jpeg')}
      className="w-full h-80"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.2)', '#000']}
        className="flex-1 justify-end p-6"
      >
        <Text
          className="text-sm font-bold text-white bg-orange-600 h-8 w-8  
          text-center mb-2 align-middle rounded "
        >
          12
        </Text>
        <Text
          className="text-2xl font-bold text-white"
        >
          Avengers
        </Text>

        <Text
          className="text-base text-gray-400"
        >
          Ação, Aventura, Fantasia, Ficção
        </Text>

        <Text className="text-base mt-4 text-white">
          03 horas e 02 minutos
        </Text>

      </LinearGradient>
    </ImageBackground>
  )
}