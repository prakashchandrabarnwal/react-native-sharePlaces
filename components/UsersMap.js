/**
 * Created by prakashchandrabarnwal on 07/01/18.
 */

import React from 'react';
import {View,StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const styles=StyleSheet.create({
    mapContainer:{
        width:'100%',
        height:"80%",
        marginBottom:20,
        marginTop:20
    },
    map:{
        width:'100%',
        height:'100%'
    }
})


export default usersMap=(props)=>{
    let userLocationMarker=null;
    if(props.userLocation){
        userLocationMarker=<MapView.Marker coordinate={props.userLocation}/>
    }

    const userMarkers =props.userPlaces.map(userPlace=><MapView.Marker coordinate={userPlace} key={userPlace.id}/>);

        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 12.9086918,
                        longitude: 77.6333533,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region= {props.userLocation}
                >
                    {userLocationMarker}
                    {userMarkers}
                </MapView>
            </View>
        );

}
