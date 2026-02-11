import {View, Text, StyleSheet} from 'react-native';

export default function ProfileDemo(){
    return(
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.header}>Name:</Text>
                <Text>Shandi Loraine S. Belen</Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.header}>Course & Year:</Text>
                <Text>BSIS 3B</Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.header}>Age:</Text>
                <Text>20 yrs. old</Text>
            </View>
             <View style={styles.text_container}>
                <Text style={styles.header}>Favorite Hobby:</Text>
                <Text>Singing </Text>
            </View>
            <View style={styles.column_container}>
                <Text style={styles.header}>3 Pet peeves </Text>
                <Text>1. Gusto laging naaayon sa gusto niya yung nangyayari, yung convinient lang sakaniya, hindi iniisip yung iba.</Text>
                <Text>2. Masyadong mahangin. Nagbubuhat ng sariling bangko</Text>
                <Text>3. Gusto siya lagi bida</Text>
            </View>


            
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: '#4c6aab',
        alignItems: 'center',
        padding:60
    },
    text_container:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap:5

    },

    column_container:{
        display:'flex',
        flexDirection: 'column'
    },
    header:{
        fontWeight:'bold'
    }
})