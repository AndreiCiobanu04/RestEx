import React from 'react'
import {useParams} from 'react-router-dom';
import { retrieveSpecificMessage } from './services/DataService';




const specificMessage = () => {

    const {id} = useParams();

    const[message, setMessage] = useStet([]);

 function getSpecificMessage(id){
     retrieveSpecificMessage(id).then(response => setMessage(response.data))

 }


    return(
        <div>
                
        </div>
    )

    
}
