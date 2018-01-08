/**
 * Created by prakashchandrabarnwal on 07/01/18.
 */

import React from 'react'
import {Button} from 'react-native'

const fetchLoaction=props=>{
    return (
        <Button title="My Current Location" onPress={props.onGetLocation}/>
    );
};

export default fetchLoaction;