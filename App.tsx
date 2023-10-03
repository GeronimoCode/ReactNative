import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TextInput style={styles.nomecpt} placeholder=' Nome'/>

      <TextInput style={styles.datansc} placeholder=' Data Nacimento'/>

      <TextInput style={styles.usuario} placeholder=' Usuario'/>

      <TextInput style={styles.senha} placeholder=' Senha'/>

      <TextInput style={styles.email} placeholder=' E-mail'/>

      <TextInput style={styles.confemail} placeholder=' Confirme seu Email'/>

      <TextInput style={styles.cpf} placeholder=' CPF'/>

      <TouchableOpacity style={styles.button}> <text style={styles.fontecdtr}>Cadastrar</text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nomecpt: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  datansc: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  usuario: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  senha: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  email: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  confemail: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  cpf: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 13,
    height: 24,
  },

  fontecdtr:{
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1
    
  },

  button:{
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor:'blue',
    width: 100 ,
    marginTop: 15, 
    height: 25,

  }
});
