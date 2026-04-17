import React, { useState } from 'react';
import {

View,
Text,
StyleSheet,
FlatList,
TouchableOpacity,
Image,
SafeAreaView,
} from 'react-native';

const CartScreen = ({ navigation }) => {
const [cartItems, setCartItems] = useState([
    {
        id: '1',
        name: 'Whey Protein',
        price: 89.90,
        quantity: 1,
        image: 'https://via.placeholder.com/80',
    },
    {
        id: '2',
        name: 'Creatine',
        price: 45.00,
        quantity: 2,
        image: 'https://via.placeholder.com/80',
    },
]);

const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
        removeItem(id);
    } else {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    }
};

const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
};

const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                <Text style={styles.quantityBtn}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                <Text style={styles.quantityBtn}>+</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={styles.removeBtn}>✕</Text>
        </TouchableOpacity>
    </View>
);

return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Carrinho</Text>
        <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={true}
        />
        <View style={styles.footer}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutBtn}>
                <Text style={styles.checkoutBtnText}>Finalizar Compra</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#f5f5f5' },
title: { fontSize: 24, fontWeight: 'bold', padding: 16, color: '#333' },
itemContainer: { flexDirection: 'row', backgroundColor: '#fff', margin: 8, padding: 12, borderRadius: 8, alignItems: 'center' },
image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
itemInfo: { flex: 1 },
itemName: { fontSize: 16, fontWeight: '600', color: '#333' },
itemPrice: { fontSize: 14, color: '#666', marginTop: 4 },
quantityContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
quantityBtn: { fontSize: 20, color: '#007AFF', fontWeight: 'bold', padding: 4 },
quantity: { fontSize: 14, fontWeight: '600', color: '#333' },
removeBtn: { fontSize: 18, color: '#FF3B30', fontWeight: 'bold', padding: 8 },
footer: { padding: 16, borderTopWidth: 1, borderTopColor: '#ddd', backgroundColor: '#fff' },
totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
totalLabel: { fontSize: 16, fontWeight: '600', color: '#333' },
totalValue: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
checkoutBtn: { backgroundColor: '#007AFF', padding: 16, borderRadius: 8, alignItems: 'center' },
checkoutBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default CartScreen;