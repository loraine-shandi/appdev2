import { Ionicons } from '@expo/vector-icons'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'


export default function Todo() {
  
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React Native Layout", completed: false },
        { id: 2, text: "Learn React Native Core Components", completed: true },

    ])

    const [search, setSearch] = useState("")
    const [filteredTodos, setFilteredTodos] = useState([])

    const create = () => {
        setTodos((prev) =>[{
            id: Date.now().toString(),
            text: todo,
            completed: false
        },...prev]) 
        setTodo("")
    }

    const update = (id) => {
        setTodos((prev)=>
            prev.map((t)=>(t.id == id ? {...t, completed:!t.completed}:t))
        )
    } 

    const handleDelete = (id) => {
        setTodos((prev)=>
        prev.filter((t)=>t.id != id)
        )
    }

    useEffect(()=>{

        setFilteredTodos(
            todos.filter((t)=>t.text.toLowerCase().includes(search.toLowerCase()))
        )

    },[search, todos])

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
    
    <View style={styles.search}>
       
        <TextInput placeholder='Search todos...'
        value={search}
        onChangeText={setSearch}
      />
       <Ionicons name="search" size={20}/>
    </View>
    

        <View style={styles.addForm}>
            <TextInput placeholder='Add todo'
            style={styles.input}
            value={todo}
            onChangeText={setTodo}
            />
            <TouchableOpacity style={styles.addButton}
            onPress={()=>create()}
            >  
                <Text> Add </Text>
            </TouchableOpacity>
        </View>
      
        <ScrollView>
            {todos.length == 0 ?(
                <View>
                    <Text>
                        Empty Todos
                    </Text>
                </View>
            ):(
                filteredTodos.map((t) => (
                    <View style={styles.todos} key={t.id}>
                        <TouchableOpacity onPress={()=>update(t.id)}>
                            <Text style={[styles.text,t.completed && styles.completed]}> {t.text} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton} onPress={()=>handleDelete(t.id)}>
                            <Ionicons name="trash" size={24} color="red" />
                        </TouchableOpacity>
                        
                    </View>
                ))
            )}
        </ScrollView>

    </View>

    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 60,
        paddingHorizontal: 15,  
        alignItems: "center"  
        
    },

    title:{
       fontSize: 40,
       fontWeight: "bold",
    
    },


    addForm: {
        flexDirection: "row",
        alignItems: "center",  
        marginTop: 10,
     
          
    },

    input: {
        backgroundColor: '#f1f1f1',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        width: 308
 
    },

    addButton: {
        height: 50,
        width: 60,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#d3d3d3'
        
    },

    text:{
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
        justifyContent: "center",
        textAlignVertical: "center"
    
    },

    completed: {
        textDecorationLine: "line-through"
    },

    deleteButton: {
        height: 50,
        width: 60,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor: "#d3d3d3"
    },

    search:{
        flexDirection: "row",
        alignItems: "center",  
        marginTop: 10,
        justifyContent:"space-between",
        backgroundColor: '#f1f1f1',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 380
     
    },

    todos: {
        flexDirection: "row",
        alignItems: "center",  
        marginVertical: 10,
        justifyContent:"space-between",
        borderRadius: 10,
        width: 380
    },
  

})

