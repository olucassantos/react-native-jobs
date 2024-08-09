import React from 'react'
import { TouchableOpacity, View, Text, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
    >
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
)

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    console.log('tabs', tabs);
    console.log('activeTab', activeTab);

    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                horizontal
                showHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
            />
        </View>
    )
}

export default Tabs