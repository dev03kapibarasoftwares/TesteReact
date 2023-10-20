
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { styles } from './styles';

export type CardPontoProps = {
    local: string;
    is_entrada: boolean;
    user_id: string;
}

type Props = {
    data: CardPontoProps;
    onDelete: () => void;
    refresh: () => void;
}

export default function CardItemPonto({ data, onDelete }: Props) {

    return <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.content}>Local: {data.local}</Text>
            <Text style={styles.content}>User: {data.user_id}</Text>
            <Text style={styles.content}>Tipo: {data.is_entrada ? "Entrada" : "Saída"}</Text>
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
    </View>;
}
