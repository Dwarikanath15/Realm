import React, { Component } from 'react'
import { Text, View } from 'react-native'
//importing realmDatabase
import Realm from 'realm'
//declaring database Variable
let realm;

export default class ViewScreen extends Component {

constructor(props)  {
    super(props);
    realm = new Realm({path: 'UserDatabase.realm'});
    this.state = {
        input_user_id: '',
        userData: '',
    };
}
//method to serach user 
searchUser = () => {
    //TODO: create Search method
}


    render() {
        return (
             //FIXME: updation required
            <View>
               
                <Text> textInComponent </Text>
            </View>
        )
    }
}
