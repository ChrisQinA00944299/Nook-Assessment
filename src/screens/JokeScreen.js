import React from "react"; 
import { StyleSheet, Text, View } from 'react-native';

export default function JokeSreen({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{JSON.stringify(item)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});