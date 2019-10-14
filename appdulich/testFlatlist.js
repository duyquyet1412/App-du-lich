import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.128/webservice/getdata.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
        <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <View>
                <Text>{item.TEN}</Text>
                <Image
          style={{width: 66, height: 58}}
          source={{uri: item.AVA}} />
            </View>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
