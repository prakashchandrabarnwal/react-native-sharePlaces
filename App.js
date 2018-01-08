import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native'
import FetchLocation from './components/FetchLocation'
import UserMap from './components/UsersMap'

export default class App extends React.Component {
   state={
      userLocation:null,
       usersPlaces:[]
    }

  getUserLocationHandler=()=>{
      navigator.geolocation.getCurrentPosition(postion=>{
        this.setState({
             userLocation:{
                 latitude: postion.coords.latitude,
                 longitude: postion.coords.longitude,
                 latitudeDelta: 0.0922,
                 longitudeDelta: 0.0421,
             }
         });
          fetch('https://my-project-1515100655451.firebaseio.com/places.json',{
              method:'POST',
              body:JSON.stringify({ latitude: postion.coords.latitude,
                  longitude: postion.coords.longitude})
          }).then(res=>console.log(res))
              .catch(err=>console.log(err))

              },err=>console.log(err))
  }
    getUserPlacesHandler=()=>{
        fetch('https://my-project-1515100655451.firebaseio.com/places.json')
            .then(res=>res.json())
            .then(parsedRes=>{
                const placesArray=[];
                for(const key in parsedRes){
                    placesArray.push({
                        latitude:parsedRes[key].latitude,
                        longitude:parsedRes[key].longitude,
                        id:key
                    })
                }
                this.setState({usersPlaces:placesArray})
            })
            .catch(err=>console.log(err))
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={{margin:'auto'}}>
              <Button title="Get My Places"
              onPress={this.getUserPlacesHandler}/>
          </View>

        <UserMap
         style={{marginBottom:20}}
            userLocation={this.state.userLocation}
            userPlaces={this.state.usersPlaces}/>

            <FetchLocation onGetLocation={this.getUserLocationHandler}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
