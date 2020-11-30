import * as React from 'react';
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

export default Main = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('PersonInfo')}>
        <View style={styles.subjectContainer}>
          <Image
            source={item.image}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
    <View styles={{position: 'relative'}}>
      <TextInput placeholder="Nama Tanaman yang dicari" style={styles.searchBar}/>
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
        <Image source={require('../assets/images/menulogo/home.png')} />
        </View>
        <Text style={styles.textMenu}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuBar}>
      <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
      <View style={styles.menuLogo}>
      <Image source={require('../assets/images/menulogo/help.png')} />
      </View>
        <Text style={styles.textMenu}>Detail</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.menuBar}>
      <TouchableOpacity onPress={()=>navigation.navigate('User')}>
      <View style={styles.menuLogo}>
      <Image source={require('../assets/images/menulogo/account.png')} />
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
    marginTop: 5,
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
    top: 14,
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
  }
});
