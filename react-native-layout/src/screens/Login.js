// import {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import login from '../../assets/login.png'
import { Ionicons } from '@expo/vector-icons';

const Login = ({setPage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={login} style={styles.image}/>
        <Text style={styles.signup}>Log In</Text>
      </View>
      <View style={styles.content}>
        
        <View style={styles.input}>
            <Ionicons name="mail-outline" size={22} color="gray" />
            <Text style={styles.text}>Email</Text>
        </View>
        <View style={styles.input}>
            <Ionicons name="lock-closed-outline" size={22} color="gray" />
            <Text style={styles.text}>Password</Text>
        </View>

        
      </View>
      <View style={styles.footer}>
        <View style={styles.button}>
            <Text style={styles.textbutton}>Log In</Text>
        </View>
        <View style={styles.footerFooter}>
            <Text>Don't Have an Account?</Text>
            <Text onPress={()=>setPage('signup')} style={{marginHorizontal: 10}}>Signup</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(172, 194, 218)',

  },
  header: {
    flex: 1,
    paddingBottom: 80,
    alignItems: "center"
  },
  content: {
    flex: 2,
    justifyContent: "center",
    paddingTop: 50,
    alignItems: "center"
  },
  footer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  signup: { 
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width:  300,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
    margin: 4

  },
  text: {
    fontSize: 16   
  },

  button: {
    backgroundColor: 'rgb(0, 66, 124)',
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    borderRadius: 40


  },
  textbutton: {
    fontSize: 20,
    color: "white"
  },
  image:{
    width: '200',
    height: '200'
  },
  footerFooter:{
    flexDirection: 'row',
    marginTop: 20
  }
});

export default Login;
