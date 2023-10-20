import React, { useState, useRef } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { database } from '../../databases';
import Ponto from '../../databases/models/PontoModel';
import DatePicker from 'react-native-date-picker';


type PontoProps = {
    local: string;
    user_id: string;
    refresh: () => void;
}

export function AddPontos(props: PontoProps) {

    const [local, setLocal] = useState(props.local);
    const [feito_at, setFeitoAt] = useState(new Date());
    const [is_entrada, setEntrada] = useState(false);
    const [user_id, setUser] = useState(props.user_id);

    async function handleAddPonto() {

        await database.write(async () => {
            await database.get<Ponto>('ponto').create(data => {
                data.user.id = user_id,
                    data.local = local,
                    data.feito_at = feito_at.getTime(),
                    data.is_entrada = is_entrada
            })
        })

        props.refresh();
    }

    return (

        <View style={styles.content}>
            <View>
                <CheckBox
                    containerStyle={{ backgroundColor: '#222', width: '100%'}}
                    textStyle={{ color: 'white', fontSize: 15}}
                    iconRight
                    title="Entrada"
                    checked={is_entrada}
                    onPress={() => setEntrada(!is_entrada)}
                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}>
                        Local:
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(val) => setLocal(val)}
                    />
                </View>
                <DatePicker
                style={{alignContent: 'center', justifyContent: 'center', flex: 1}}
                    androidVariant='nativeAndroid'
                    theme='dark'
                    date={feito_at}
                    onDateChange={setFeitoAt}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddPonto}
                    activeOpacity={0.6}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#222',
        height: 500
    },
    input: {
        color: '#fff',
        backgroundColor: '#000',
        borderWidth: 1,
        marginLeft: 8,
        borderColor: '#fff',
        padding: 10,
        flex: 1
    },
    button: {
        backgroundColor: '#1E90FF',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    }
});