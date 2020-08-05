import React, { Component } from 'react'
import { Text, 
         View,
         TouchableOpacity,
        StyleSheet,
        
} from 'react-native'
//importing Realm Database
import Realm from 'realm'

//declaring DbVariable
let realm;

export default class HomeScreen extends Component {

constructor(props)  {
    super(props);
    realm = new Realm({
        path:   'UserDatabase.realm',
        schema: [
            {
                name: 'user_details',
                    properties: {
                        user_id: {type: 'int' , default: 0},
                        user_name: 'string',
                        user_contact: 'string',
                        user_address: 'string'
                    },
            },
        ],
    });
}

    render() {
        return (
            <View style = {styles.container}> 
                <View style = {styles.innerView}>
                    <TouchableOpacity 
                        onPress = {() =>{
                            this.props.navigation.navigate('Register')

                }}
                        style = {styles.Btnbg}
                >
                    <Text style = {styles.btnTxt}>Register User</Text>
                    </TouchableOpacity> 
                </View>
                <View style = {styles.innerView}>
                    <TouchableOpacity 
                     onPress = {() =>{
                        this.props.navigation.navigate('Update')
                
                    }}
                        style = {styles.Btnbg}>
                        <Text style = {styles.btnTxt}>Update</Text>
                    </TouchableOpacity> 
                </View>
                <View style = {styles.innerView}>
                    <TouchableOpacity style = {styles.Btnbg}
                      onPress = {()=>{this.props.navigation.navigate('View')}}
                     >
                        <Text style = {styles.btnTxt}>View</Text>
                     </TouchableOpacity> 
                </View>
                <View style = {styles.innerView}>
                    <TouchableOpacity style = {styles.Btnbg}
                      onPress = {()=>{this.props.navigation.navigate('ViewAll')}}
                    >
                      <Text style = {styles.btnTxt}>View All</Text>
                    </TouchableOpacity> 
                    </View>
                <TouchableOpacity style = {styles.Btnbg}
                     onPress = {()=>{this.props.navigation.navigate('Delete')}}
                >
                    <Text style = {styles.btnTxt}>Delete</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin:20,
        
    },
    Btnbg:{
        backgroundColor:'#487EB0',
        borderRadius:8
    },
    btnTxt:{
        fontSize:30
    },
    innerView:{
        marginBottom:10 
    }
})
