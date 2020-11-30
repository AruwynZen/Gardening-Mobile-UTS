import React,  { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import colors from '../assets/colors/colors';

export default Detail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <View>
          <Image style={{width: 390, height: 390}} source={require('../assets/images/monstera.png')} />
        </View>
      </View>
      <View style={styles.mainDetails}>
        <View>
          <View style={styles.detailContainer}>
            <Text style={styles.textTitle}>Monstera</Text>
            <Text style={styles.infoTitle}>Deskripsi</Text>
            <Text style={styles.infoDef}>Spesies tumbuhan berbunga yang berasal dari hutan tropis Meksiko selatan, selatan Panama. Ini telah diperkenalkan ke banyak daerah tropis, dan telah menjadi spesies invasif ringan di Hawaii, Seychelles, Pulau Ascension dan Kepulauan Society.</Text>
          </View>
          <View style={styles.detailContainer}> 
            <Text style={styles.infoTitle}>Perawatan</Text>
            <Text style={styles.infoDef}>Sebelum menanam Monstera deliciosa di pot, perlu di perhatikan dulu apakah media tanam sudah memiliki nutrisi yang cukup untuk tumbuh kembang tanaman. Tidak dapat di pungkiri setiap tanaman pasti membutuhkan cahaya matahari yang cukup untuk pertumbuhannya, tak terkecuali untuk tanaman Monstera Deliciosa, semakin banyak cahaya yang ia dapatkan maka semakin baik pula pertumbuhannya.</Text>
          </View>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonWrapper}>
            <View style={styles.button}>
            <Text style={styles.textButton}>Add Bookmark</Text>
            </View>
      </TouchableOpacity>
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
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold"
  },
  header: {
    backgroundColor: colors.background
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#8BC34A",
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 40
  },
  textButton: {
      color: "#FFFFFF",
      fontSize: 16
  },
  mainDetails: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  iconContainer: {
    flexDirection: 'row'
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white
  },
  detailContainer: {
    marginBottom: 15
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  infoDef: {
    lineHeight: 20
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
  },
});
