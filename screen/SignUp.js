import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AuthContext from '../context/AuthContext';


export default Signupscreen = ({navigation}) => {
    const {signup} = React.useContext(AuthContext);
    const [email, onChangeEmail] = React.useState('');
    // const [mail, onChangeMail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [confirm, setConfirm] = React.useState('');
    // const [alert, showAlert] = React.useState('');
    
    // const onAlert = () => {
    //   if (email === '' && password === '' && mail === '') {
    //     showAlert(true);
    //     return;
    //   }
    //   navigation.navigate('Login');
    // }

    async function onSignup() {
        setLoading(true);
        try {
          if (confirm !== password) {
            setError(true);
          } else {
            await signup({email, password});
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Let's Sign You In CoGarden</Text>
        <View style={styles.formWrapper}>
            {/* <View>
            <Text style={styles.emailText}>Username</Text>
            <View style={styles.emailInputWrapper}>
                <TextInput
                style={styles.emailInput}
                onChangeText={(text) => onChangeEmail(text)}
                value={email}
                />
            </View>
            </View> */}
            <View>
            <Text style={styles.emailText}>E-mail</Text>
            <View style={styles.emailInputWrapper}>
                <TextInput
                style={styles.emailInput}
                onChangeText={(text) => onChangeEmail(text)}
                value={email}
                />
            </View>
            </View>
            <View>
            <Text style={styles.emailText}>Password</Text>
            <View style={styles.emailInputWrapper}>
                <TextInput
                secureTextEntry={true}
                style={styles.emailInput}
                onChangeText={(text) => onChangePassword(text)}
                value={password}
                />
            </View>
            </View>
            <View>
            <Text style={styles.emailText}>Confirm Password</Text>
            <View style={styles.emailInputWrapper}>
            <TextInput
              secureTextEntry={true}
              value={confirm}
              onChangeText={(text) => setConfirm(text)}
              style={styles.emailInput}
            />
            </View>
            </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper} loading={loading} onPress={onSignup}>
            <View style={styles.button}>
            <Text style={styles.textButton}>Sign Up</Text>
            </View>
        </TouchableOpacity>
        {/* {alert ? ( 
          <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{color: 'red'}}>Masih ada data yang kosong, mohon dilengkapi!</Text>
          </View>
        ):null} */}
        <View style={styles.footerWrapper}>
            <Text style={styles.firstText}>
            Already have an account?
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.secondText}>  Login</Text>
            </TouchableOpacity>
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: '90%',
        width: '100%'
        },
    title: {
        fontSize: 24,
        color: "#A1887F",
        textAlign: 'center',
        marginBottom: 10,
        margin: 10
    },
    circleWrapper: {
        alignItems: 'center',
    },
    whiteCircle: {
        backgroundColor: "#FFFFFF",
        marginTop: -65,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    formWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    emailText: {
        marginBottom: 10,
        color: "#C5C5C5",
        marginTop:10
    },
    emailInput: {
        height: 40,
        borderBottomColor: "#C5C5C5",
        borderBottomWidth: 1,
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: "#8BC34A",
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 40
    },
    textButton: {
        color: "#FFFFFF",
        fontSize: 16
    },
    footerWrapper: {
        alignItems: 'center',
        marginTop: 20
    },
    firstText: {
        paddingRight: 10
    },
    secondText: {
        color: "#339CFF"
    }
});
