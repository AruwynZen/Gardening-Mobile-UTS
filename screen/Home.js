import React, { useState, useEffect } from 'react';
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
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default Main = ({ navigation }) => {
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
    <View style={{flex: 1}}>
    <View >
      <TextInput style={styles.searchBar} placeholder="Nama Tanaman yang dicari" style={styles.searchBar}/>
      <Image style={styles.iconsearch} source={require('../assets/images/menulogo/search.png')}/>
    </View>
    <ScrollView style={styles.container}>
      <View style={styles.dealContainer}>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', }}>Monstera</Text>
            <Text>Tanaman Hias</Text>
            <Text style={{color: "grey"}}>See more</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dealWrapper}>
          <Image style={{marginRight: 20, width: 100, height: 100}} source={require('../assets/images/monstera.png')} />
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
          <View>
            <Text style={{fontWeight: 'bold', }}>Monstera</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchBar: {
    borderWidth: 1,
    marginTop: 25,
    borderColor: "grey", 
    borderRadius: 24,
    backgroundColor: "#ffff",
    height: 45,
    fontSize: 14,
    paddingLeft: 45,
    paddingRight: 14,
  },
  iconsearch: {
    position: "absolute",
    top: 35,
    left: 12
  },
  dealContainer: {
    marginTop: 20
  },
  dealWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footer: {
    zIndex: 2,
    backgroundColor: "#ffff",
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  }
});
