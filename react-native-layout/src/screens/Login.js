// import {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.signup}>Log In</Text>
      </View>
      <View style={styles.content}>
        
        <View style={styles.input}>
          <Text style={styles.text}>Email</Text>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Password</Text>
        </View>

        
      </View>
      <View style={styles.footer}>
        <View style={styles.button}>
            <Text style={styles.textbutton}>Sign Up</Text>
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
    flex: 2,
    justifyContent: "flex-end",
    paddingBottom: 80,
    alignItems: "center"
  },
  content: {
    flex: 3,
    justifyContent: "flex-start",
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

    borderRadius: 15,
    height: 50,
    backgroundColor: "white",
    borderColor: 'rgb(11, 43, 78)',
    paddingHorizontal: 15,
    width: '80%',
    justifyContent: "center",
    marginBottom: 15,
    
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
  }
});

export default Login;
