
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { styles } from './styles';

export type CardProps = {
    id: string;
    nome: string;
    funcao: string;
    is_ativo: boolean;
}

type Props = {
    data: CardProps;
    onDelete: () => void;
    refresh: () => void;
    onAddPonto?: () => void;
}

export default function CardItemUser({ data, onDelete, onAddPonto }: Props) {

    return <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.content}>Func: {data.id}</Text>
            <Text style={styles.content}>Nome do funcionário: {data.nome}</Text>
            <Text style={styles.content}>Função do funcionário: {data.funcao}</Text>
            <Text style={styles.content}>Status do funcionário: {data.is_ativo ? "Ativo" : "Inativo"}</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={onDelete}
        >
            <MaterialIcons
                name="delete"
                size={22}
                color="#888D97"
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={onAddPonto}
        >
            <MaterialIcons
                name="plus-thick"
                size={22}
                color="#888D97"
            />
        </TouchableOpacity>
    </View>;
}
