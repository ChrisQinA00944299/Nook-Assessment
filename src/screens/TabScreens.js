import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export const TabOne = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is tab one.</Text>
        </View>
    );
}
export const TabTwo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is tab two.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
