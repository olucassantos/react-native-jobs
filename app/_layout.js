import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    // Carrega as fontes necessárias para o aplicativo
    // O useFonts é um hook do expo-font que carrega as
    // fontes e retorna um array com duas posições
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    // A função abaixo serve para esconder a tela de splash assim que as fontes forem carregadas
    // Isso é importante para que o usuário não veja a tela de splash por muito tempo
    // A função useCallback é uma função que é executada apenas uma vez, e não a cada renderização
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Se as fontes não foram carregadas, retorna null para não renderizar nada
    if (!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;