import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import colors from '../assets/colors/colors';
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default Userscreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.header}>
      <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={require('../assets/images/profil.jpg')}/>

          <Text style={styles.name}>User Name </Text>
          <Text style={styles.userInfo}>email.user@mail.com </Text>
      </View>
    </View>
    <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.blokButton}>
      <Text style={styles.blok}>Bookmark</Text>
      <Text>4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.blokButton2}>
      <Text style={styles.blok}>Following</Text>
      <Text>2k</Text>
    </TouchableOpacity>
    </View>
    <View>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', paddingTop: 12}}>Monstera</Text>
            <Text>Tanaman Hias</Text>
            <Text style={{color: "grey"}}>See more</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', paddingTop: 12}}>Monstera</Text>
            <Text>Tanaman Hias</Text>
            <Text style={{color: "grey"}}>See more</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', paddingTop: 12}}>Monstera</Text>
            <Text>Tanaman Hias</Text>
            <Text style={{color: "grey"}}>See more</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', paddingTop: 12}}>Monstera</Text>
            <Text>Tanaman Hias</Text>
            <Text style={{color: "grey"}}>See more</Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>
    </ScrollView>

    <View style={styles.footer}>
    <View style={styles.menuBar}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <View style={styles.menuLogo}>
        <FontAwesome
        name="home"
        size={30}
        style={{color: 'silver', alignSelf: 'center'}}
      />
        </View>
        <Text style={styles.textMenu}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuBar}>
      <TouchableOpacity onPress={pickImage}>
      <View style={styles.menuLogo}>
      <FontAwesome
        name="plus"
        size={30}
        style={{color: 'silver', alignSelf: 'center'}}
      />
      </View>
        <Text style={styles.textMenu}>Add</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.menuBar}>
      <TouchableOpacity onPress={()=>navigation.navigate('User')}>
      <View style={styles.menuLogo}>
      <FontAwesome
        name="user"
        size={30}
        style={{color: 'silver', alignSelf: 'center'}}
      />
      </View>
        <Text style={styles.textMenu}> User</Text>
      </TouchableOpacity>
      </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#81C784",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  blok: {
    color: "#000",
    fontSize: 16,
  },
  blokButton: {
    backgroundColor: "#AED581",
    width: 190, 
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blokButton2: {
    backgroundColor: "white",
    width: 190, 
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  dealWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  
  menuBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLogo: {
    width: 26,
    height:26,
  },
  textMenu: {
    fontSize: 10,
    color: "#545454",
    marginTop: 4,
    alignSelf: 'center',
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});