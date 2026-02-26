import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: { fontSize: 16, marginBottom: 10, color: '#666' },
  container: { marginBottom: 10 },
  container1: { marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  botaoEspaco: { marginTop: 20 },

  // Estilos da Lista
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 2,
  },
  alunoBotao: { flex: 1 },
  nomeLista: { fontSize: 16 },
  faltoso: { color: 'red', textDecorationLine: 'line-through' },
  removerItem: { backgroundColor: '#ffcccc', padding: 8, borderRadius: 5 },
  removerItemTexto: { color: 'red', fontWeight: 'bold' },
});
export default styles;