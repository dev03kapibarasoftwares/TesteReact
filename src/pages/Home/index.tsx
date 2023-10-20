import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../../databases';
import { AddUsers } from '../../components/AddUser';
import { AddPontos } from '../../components/AddPonto';
import { useEffect, useRef, useState } from 'react';
import CardUser from '../../components/CardUser';
import User from '../../databases/models/UserModel';
import CardPonto from '../../components/CardPonto';
import Ponto from '../../databases/models/PontoModel';
import { Modalize } from 'react-native-modalize';

const UserList = () => {
    const modalizeRef = useRef(null);

    const [users, setUsers] = useState<User[]>([]);
    const [pontos, setPontos] = useState<Ponto[]>([])
    const [nome, setNome] = useState<string>('');
    const [funcao, setFuncao] = useState<string>('');
    const [ativo, setAtivo] = useState(true);
    const [local, setLocal] = useState('');
    const [feito_at, setFeitoAt] = useState(new Date());
    const [is_entrada, setEntrada] = useState(false);
    const [is_aprovado, setAprovado] = useState(false);
    const [user_id, setUserId] = useState('');

    async function fetchUser() {
        const userCollection = database.get<User>('user');
        const response = await userCollection.query().fetch();
        setUsers(response);
    }

    async function fetchPonto() {
        const pontoCollection = database.get<Ponto>('ponto');
        const response = await pontoCollection.query().fetch();
        setPontos(response);
    }

    async function deleteUser(item: User) {
        await database.write(async () => {
            item.destroyPermanently();
        });

        fetchUser();
    }

    async function deletePonto(item: Ponto) {
        await database.write(async () => {
            item.destroyPermanently();
        });

        fetchPonto();
    }

    useEffect(() => {
        fetchUser();
        fetchPonto();
    }, [])

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    function AddPonto(user: User) {
        setUserId(user.id);
        onOpen();
    }

    return (
        <>
            <FlatList
                data={users}
                keyExtractor={(item, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CardUser refresh={() => fetchUser()} onDelete={() => deleteUser(item)} onAddPonto={() => AddPonto(item)}
                    data={{
                        id: item.id,
                        nome: item.nome,
                        funcao: item.funcao,
                        is_ativo: item.is_ativo
                    }} />}
                ListHeaderComponent={() => <AddUsers nome={nome} funcao={funcao} is_ativo={ativo} refresh={() => fetchUser()} />}
            />
            <FlatList
                data={pontos}
                keyExtractor={(item, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CardPonto refresh={() => fetchPonto()} onDelete={() => deletePonto(item)
                }
                    data={{
                        local: item.local,
                        is_entrada: item.is_entrada,
                        user_id: item.user.id
                    }} />}
            />
            <Modalize
                ref={modalizeRef}
                modalStyle={{ backgroundColor: '#222' }}
                snapPoint={370}
                HeaderComponent={
                    <View style={{
                        width: '100%', 
                        height: 50,  
                        alignItems: 'center',
                        justifyContent: 'center'                        
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#fff'
                        }}>Adicionando Ponto</Text>
                    </View>
                }
            >
                <AddPontos local={local} user_id={user_id} refresh={() => fetchPonto()} />
            </Modalize>
        </>
    )
}

export function Home() {
    return <UserList />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        paddingTop: 20
    }
});