import React,{useContext,useEffect,useState} from 'react';
import './card.css';
import CandidateContext from '../candidatesContext'
import '../components/candidateCard.css'

const Card = (props) => {

    const {rejectedList, acceptedList, setAcceptedList, setRejectedList, candidatesData } = useContext(CandidateContext)
    
    const CandidateId = props.match.params.id
    const [data, setCardData] = useState([])

    useEffect(() => {
        const data = candidatesData.filter((x)=> x.id === CandidateId)
        setCardData(data[0])
    }, [CandidateId])

    const handleAccept = () =>{
        setAcceptedList([...acceptedList, data.id])
        alert("ShortListed...")
    }

    const handleReject = () =>{
        setRejectedList([...rejectedList, data.id])
        alert('Rejected...')
    }

    return (
        <div 
        className='card' >
            <div className='display'>
            <div className='id'><label>{data?.id}</label></div>
            <div><img className='img' src={data?.Image} /></div>
            <div className='name'><label>{data?.name}</label></div>

            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
            </div>
        </div>
    )
}
export default React.memo(Card);