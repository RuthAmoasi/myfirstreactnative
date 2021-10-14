import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';

export default function Login() {
    return (
        <View style= {{flex: 1, justifyContent:"center", alignItems: "center"}}> 
        <Image 
            style={{
                width:150,
                height:150,
                borderRadius:15,
                marginBottom: 20
            }}
            source ={{uri: "https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}}/>
            <Text style = {{color: "rgba(0,0,0,0.6)", fontSize: 23}}>Welcome to </Text>
            <Text style={{
                color:"black", 
                fontWeight:600,
                fontFamily: " Arial, sansSerif",
                fontSize:23
            }}>Power Bike Shop</Text>

            <TouchableOpacity style={{
                backgroundColor: "#e3e3e3",
                paddingHorizontal:30,
                paddingVertical:10,
                borderRadius:10,
                marginTop:15
            }}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={{color: "black"}}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: "black",
                paddingHorizontal:30,
                paddingVertical:10,
                borderRadius:10,
                marginTop:10
            }}>
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{color:"white"}}>Login with Apple</Text>
            </TouchableOpacity>
        </View>
    );
    
}

