import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { database } from '../../databases';
import User from '../../databases/models/UserModel';

type UserProps = {
    nome: string;
    funcao: string;
    is_ativo: boolean;
    refresh: () => void;
}

export function AddUsers(props: UserProps) {
    const [nome, setNome] = useState(props.nome);
    const [funcao, setFuncao] = useState(props.funcao);
    const [ativo, setAtivo] = useState(props.is_ativo);

    async function handleAddUser() {

        await database.write(async () => {
            await database.get<User>('user').create(data => {
                data.nome = nome,
                    data.funcao = funcao,
                    data.is_ativo = ativo
            })
        })

        props.refresh();
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nome:"
                onChangeText={(nome) => setNome(nome)}
                style={styles.input}
            /><TextInput
                placeholder="Função:"
                onChangeText={(funcao) => setFuncao(funcao)}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddUser}
                activeOpacity={0.6}
            >
                <Text>Adicionar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#222',
        margin: 8,
        padding: 5
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        marginRight: 8,
        color: '#222',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#1E90FF',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});