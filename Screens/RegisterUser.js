import React, { Component } from 'react'
import { Text, 
         View,
         TextInput,
         Button,      
         Alert  
} from 'react-native'
//importing Realm Database
import Realm from 'realm'
//declaring DbVariable
let realm;

export default class RegisterUser extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            user_name: '',
            user_contact: '',
            user_address: '',
        };
        realm = new Realm({path: 'UserDatabase.realm'});
    }

    register_user = () =>{

    var that = this;

    const { user_name } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    if (user_name) {
      if (user_contact) {
        if (user_address) {
          realm.write(() => {
            var ID =
              realm.objects('user_details').sorted('user_id', true).length > 0
                ? realm.objects('user_details').sorted('user_id', true)[0]
                    .user_id + 1
                : 1;  
            realm.create('user_details', {
              user_id: ID,
              user_name:user_name,
              user_contact: user_contact,
              user_address: user_address,
            });
            Alert.alert(
              'Success',
              'You are registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }

    };


    render() {
        return (
            <View>
                <TextInput  
                    placeholder = 'Name'
                    underlineColorAndroid = 'black'
                    placeholderTextColor = '#FF362E'
                    onChangeText = {user_name =>this.setState({user_name})}
                />
                <TextInput  
                    placeholder = 'Contact Number'
                    underlineColorAndroid = 'black'
                    placeholderTextColor = '#FF362E'
                    onChangeText = {user_contact =>this.setState({user_contact})}
                />
               <TextInput  
                    placeholder = 'Address'
                    underlineColorAndroid = 'black'
                    placeholderTextColor = '#FF362E'
                    onChangeText = {user_address =>this.setState({user_address})}
                />
               
                    <Button 
                        title = 'SAVE'
                        color = '#2475B0'
                        onPress = {()=>{this.register_user()}}
                    />
                
            </View>
        )
    }
}
