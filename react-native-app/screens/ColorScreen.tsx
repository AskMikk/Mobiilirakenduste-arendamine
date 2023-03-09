import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../types';

type ColorScreenProps = StackScreenProps<RootStackParamList, 'Color'>;

export const ColorScreen: React.FC<ColorScreenProps> = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const handleColorChange = (color: string) => {
        setBackgroundColor(color);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.title}>Choose a color:</Text>
            <View style={styles.colorContainer}>
                <TouchableOpacity
                    style={[styles.colorButton, { backgroundColor: '#ff0000' }]}
                    onPress={() => handleColorChange('#ff0000')}
                />
                <TouchableOpacity
                    style={[styles.colorButton, { backgroundColor: '#00ff00' }]}
                    onPress={() => handleColorChange('#00ff00')}
                />
                <TouchableOpacity
                    style={[styles.colorButton, { backgroundColor: '#0000ff' }]}
                    onPress={() => handleColorChange('#0000ff')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    colorButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginHorizontal: 8,
        borderWidth: 2,
        borderColor: '#fff',
    },
});