import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ 
    title, 
    onPress, 
    style, 
    textStyle,
    disabled = false 
}) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    disabled: {
        backgroundColor: '#CCCCCC',
        opacity: 0.6,
    },
});

export default Button;