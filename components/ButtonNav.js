import React, {Component} from 'react';
import {Footer, FooterTab, Icon, Text, Button} from 'native-base';
import { StyleSheet, Image } from 'react-native';

export default ButtonNav = ({navigation}) =>{
    return(
        <Footer>
        <FooterTab style={style.bg}>
        <Button vertical onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
        </Button>
        <Button vertical onPress={()=>navigation.navigate('Profil')}>
        <Text>Profil</Text>
        </Button>
        <Button vertical onPress={()=>navigation.navigate('Detail')}>
        <Text>Detail</Text>
        </Button>
        </FooterTab>
        </Footer>
)}

const style = StyleSheet.create({
    bg:{
    backgroundColor: 'white',
    elevation:1
}})