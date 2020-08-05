import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
//importing realmDatabase
import Realm from 'realm'

//dec;aring DatabaseVariable
let realm;
export default class ViewAll extends Component {

constructor(props)  {
    super(props);
    this.state  = {
        FlatListItems:  [],
    },
    realm = new Realm({path: 'UserDatabase.realm'});
    var user_details = realm.objects('user_details');
    this.state = {
        FlatListItems: user_details,
    };
}


ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };


    render() {
        return (
            // FIXME: update it
            <View>
                <FlatList   
                    data = {this.state.FlatListItems}
                    ItemSeparatorComponent = {this.ListViewItemSeparator}
                    keyExtractor = {(item , index) => index.toString()}
                    renderItem = {({item}) =>(
                        <View>
                            <Text>Id: {item.user_id}</Text>
                            <Text>Name: {item.user_name}</Text>
                            <Text>Contact: {item.user_contact}</Text>
                            <Text>Address: {item.user_address}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
