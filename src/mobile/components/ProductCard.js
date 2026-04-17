import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ title, price, image }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                {/* Image component here */}
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 20,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 12,
        backdropFilter: 'blur(10px)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 5,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(200, 200, 200, 0.75)',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        color: 'rgba(200, 200, 200, 0.75)',
    },
});

export default ProductCard;