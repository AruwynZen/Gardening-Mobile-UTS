import React from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text 
} from 'react-native';

export default Loginscreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [alert, showAlert] = React.useState('');
    
    const onAlert = () => {
      if (email === '' && password === '') {
        showAlert(true);
        return;
      }
      navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={[styles.loginBox]}>
        <Text style={[styles.font]}>Gardening</Text>
        <TextInput placeholder="Username" 
        style={[styles.inputText]} 
        onChangeText={(text) => onChangeEmail(text)} 
        value={email}
        />
        <TextInput placeholder="Password" 
        secureTextEntry={true} 
        style={[styles.inputText]} 
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        />
        <TouchableOpacity style={[styles.buttonLogin]} onPress={onAlert}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        {alert ? (
          <View style={{alignItems: 'center'}}>
          <Text style={{color: 'red'}}>Username dan Password Salah</Text>
          </View>
        ):null}
        <View style={styles.footerWrapper}>
        <Text>
          {"Don't have an account?"}
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.colorText}>  Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
        </View>
)}

const styles = StyleSheet.create({
  container: {
  justifyContent: 'center',
  height: '90%',
  width: '100%'
  },
  loginBox: {
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: 16,
  padding: 16
  },
  font: {
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 20,
  margin: 10
  },
  inputText: {
  height: 40,
  borderColor: "blue",
  backgroundColor: "white",
  borderRadius: 5,
  margin: 10,
  borderRadius: 8,
  padding: 10,
  margin: 10
  },
  buttonLogin: {
  backgroundColor: "#8BC34A",
  alignItems: 'center',
  margin: 10,
  borderRadius: 8,
  padding: 10,
  margin: 10
  },
  buttonText: {
  color: "#ffff"
  },
  colorText: {
      color: "#339CFF"
  },
  footerWrapper: {
    alignItems: 'center',
    marginTop: 20
  }
});