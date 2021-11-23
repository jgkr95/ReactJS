import React from 'react';
import CandidateContext from '../candidatesContext'
import Card from './card';

const Status = (props) => {
    const {rejectedList, acceptedList, candidatesData } = React.useContext(CandidateContext)
    
    const data = props.accepted ? candidatesData.filter(x=> acceptedList.includes(x.id)) : candidatesData.filter(x=> rejectedList.includes(x.id))
    
    return (
    <div>
        {props.accepted ? <h1>Shortlisted Candidates</h1> : <h1>Rejected Candidates</h1> }
        <div style={{display: 'flex'}}>
        {
            data.map((candidate)=>{
                return <Card key={+new Date() + Math.random()} data={candidate} hideActions />
            })
        }
        </div>
    </div>
    )
}
export default React.memo(Status);