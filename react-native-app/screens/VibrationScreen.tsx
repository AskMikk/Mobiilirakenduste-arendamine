import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../types';
import { Vibration } from 'react-native';

type VibrationScreenProps = StackScreenProps<RootStackParamList, 'Vibration'>;

export const VibrationScreen: React.FC<VibrationScreenProps> = ({ route }) => {
    const { duration } = route.params;
    const [durationInput, setDurationInput] = useState(duration.toString());

    const handleVibration = () => {
        Vibration.vibrate(parseInt(durationInput, 10));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vibration Screen</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={durationInput}
                onChangeText={setDurationInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleVibration}>
                <Text style={styles.buttonText}>Vibrate</Text>
            </TouchableOpacity>
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
        marginBottom: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 12,
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});