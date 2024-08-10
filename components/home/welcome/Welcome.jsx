import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Integral", "Meio Periodo", "Freelancer", "Estagio", "Temporario"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Integral");

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Lucas</Text>
                <Text style={styles.welcomeMessage}>Find yout perfect Job</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchTerm}
                        onChangeText={(text) => setSearchTerm(text)}
                        placeholder='O que está procurando?'
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image 
                        source={icons.search} 
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                {/* Renderiza uma lista com todos os itens do array */}
                <FlatList 
                    data={jobTypes}
                    // Renderiza cada item do array com o componente TouchableOpacity
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.tab(activeJobType, item)} 
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            {/* Aqui podemos passar o item e o tipo ativo para ser usado no estilo */}
                            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    )
}

export default Welcome