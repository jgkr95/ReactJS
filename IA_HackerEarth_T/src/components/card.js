import React from 'react';
import './card.css';
import { useHistory } from "react-router-dom";

const Card = ({data}) => {
    const history = useHistory();

    const handleCardClick = () =>{
        history.push(`/candidates/${data.id}`)
    }

    return (
        <div className='card' onClick={handleCardClick}>
            <div className='display'>

            <div className='id'><label>Id: <b>{data.id}</b></label></div>
            <div><img className='img' src={data.Image} /></div>
            <div className='name'><label>Name: <b>{data.name}</b></label></div>
            </div>
        </div>
    )
}
export default React.memo(Card);