import styles from './styles'; // Importando da sua pasta styles
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  // --- ESTADOS DE AUTENTICAÇÃO ---
  const [verificador, setVerificador] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [cpf, setcpf] = useState('');
  const usuarioCorreto = 'usuarioMassa';
  const cpfCorreto = '11111111111';

  // --- ESTADOS DA LISTA DE TAREFAS ---
  const [novaTarefa, setNovaTarefa] = useState('');
  const [lista, setLista] = useState([]);

  // --- FUNÇÃO DE LOGIN (TELA 1) ---
  function verificadorcpf() {
    if (cpf === cpfCorreto && usuario === usuarioCorreto) {
      setVerificador(true);
    } else {
      Alert.alert('Erro', 'Usuário ou CPF incorretos');
    }
  }

  // --- FUNÇÕES DA LISTA (TELA 2) ---
  
  // 1. ADICIONAR TAREFA
  function adicionarTarefa() {
    if (novaTarefa.trim() === '') {
      Alert.alert('Aviso', 'Digite o nome da tarefa');
      return;
    }
    const novoItem = {
      id: Math.random().toString(),
      nome: novaTarefa,
      concluida: false,
    };
    setLista([...lista, novoItem]);
    setNovaTarefa('');
  }

  // 2. REMOVER TAREFA
  function removerItem(id) {
    setLista(lista.filter((item) => item.id !== id));
  }

  // 3. MARCAR COMO CONCLUÍDA
  function marcarConcluida(id) {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item
      )
    );
  }

  // 4. CONTADOR DE TAREFAS CONCLUÍDAS
  const totalConcluidas = lista.filter(item => item.concluida).length;

  return (
    <View style={styles.containerGeral}>
      {verificador ? (
        /* --- TELA 2: LISTA DE TAREFAS --- */
        <View style={{ flex: 1 }}>
          <Text style={styles.titulo}>Minhas Tarefas</Text>
          
          <View style={styles.containerAdicionar}>
            <TextInput
              style={styles.inputAdicionar}
              placeholder="O que precisa ser feito?"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
            />
            <Button title="Add" onPress={adicionarTarefa} />
          </View>

          <Text style={styles.contadorTexto}>
            Concluídas: {totalConcluidas} de {lista.length}
          </Text>

          <FlatList
            data={lista}
            keyExtractor={(item) => item.id}
            // 5. MENSAGEM ALTERNATIVA (LISTA VAZIA)
            ListEmptyComponent={
              <View style={styles.boxVazio}>
                <Text style={styles.textoVazio}>Nenhuma tarefa cadastrada ainda! ✨</Text>
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() => marcarConcluida(item.id)}
                  style={styles.alunoBotao}>
                  <Text style={[styles.nomeLista, item.concluida && styles.concluida]}>
                    {item.nome} {item.concluida ? ' (✓)' : ''}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removerItem}
                  onPress={() => removerItem(item.id)}>
                  <Text style={styles.removerItemTexto}>Excluir</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Button title="Sair" color="red" onPress={() => setVerificador(false)} />
        </View>
      ) : (
        /* --- TELA 1: LOGIN --- */
        <View>
          <Text style={styles.titulo}>Login</Text>
          <View style={styles.container}>
            <Text>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o usuário"
              value={usuario}
              onChangeText={setUsuario}
            />
          </View>
          <View style={styles.container1}>
            <Text>CPF</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o CPF"
              value={cpf}
              onChangeText={setcpf}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.botaoEspaco}>
            <Button title="Entrar" onPress={verificadorcpf} />
          </View>
        </View>
      )}
    </View>
  );
}