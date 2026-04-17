import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Academia</Text>
                <Text style={styles.subtitle}>Bem-vindo ao seu treino</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                    <Text style={styles.statValue}>5</Text>
                    <Text style={styles.statLabel}>Treinos Semana</Text>
                </View>
                <View style={styles.statCard}>
                    <Text style={styles.statValue}>12</Text>
                    <Text style={styles.statLabel}>Exercícios</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Próximo Treino</Text>
                <TouchableOpacity style={styles.workoutCard}>
                    <Text style={styles.workoutTitle}>Peito e Tríceps</Text>
                    <Text style={styles.workoutTime}>Hoje • 10:00 AM</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ações Rápidas</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar Treino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                    <Text style={styles.buttonTextSecondary}>Ver Histórico</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        color: '#e0e0e0',
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        padding: 15,
        gap: 10,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
    },
    section: {
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    workoutCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    workoutTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    workoutTime: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButton: {
        backgroundColor: '#f0f0f0',
    },
    buttonTextSecondary: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
});