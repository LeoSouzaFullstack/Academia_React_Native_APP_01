import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const OrdersScreen = ({ navigation }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            // Replace with your API endpoint
            const response = await fetch('https://api.example.com/orders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderOrderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.orderCard}
            onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}
        >
            <Text style={styles.orderId}>Pedido #{item.id}</Text>
            <Text style={styles.orderDate}>{item.date}</Text>
            <Text style={styles.orderTotal}>Total: R$ {item.total}</Text>
            <Text style={[styles.orderStatus, { color: item.status === 'delivered' ? '#4CAF50' : '#FF9800' }]}>
                {item.status === 'delivered' ? 'Entregue' : 'Pendente'}
            </Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Pedidos</Text>
            {orders.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
            ) : (
                <FlatList
                    data={orders}
                    renderItem={renderOrderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listContent: {
        paddingBottom: 16,
    },
    orderCard: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    orderDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    orderTotal: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    orderStatus: {
        fontSize: 12,
        fontWeight: '600',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 32,
    },
});

export default OrdersScreen;