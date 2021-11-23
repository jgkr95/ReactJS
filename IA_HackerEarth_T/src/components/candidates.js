import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import Card from './card'
import CandidateContext from '../candidatesContext'
import './candidates.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Candidate = (props) => {

    const { candidatesData, setData } = useContext(CandidateContext)

    useEffect(() => {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json').then((res) => {
            const resData = JSON.parse(JSON.stringify(res))['data'];
            setData(resData)
        }).catch((err) => console.log(err))

    }, [])

    //     const arr = [1,2,3,4,5,6,7,8,9]
    // let obj={}
    //     const handleChange = (e,i) =>{
    //         console.log(e.target.value,i)
    //         // let temp = {...obj}
    //         // temp[i]=e.target.value;
    //         // obj=temp;
    //         obj[i]=e.target.value;
    //         console.log("obj",obj)
    //     }

    return (
        <div className='candidate'>
            {candidatesData && candidatesData.map((candidate, index) => {
                return <Card key={+new Date() + Math.random()} data={candidate} />
            })}
            {candidatesData.length == 0 && <h1>No matching Candidates</h1>}
        </div>
        // <>
        //     {arr.map((x, i) =>
        //         <FormControl component="fieldset">
        //             <FormLabel component="legend"><b>{x}</b></FormLabel>
        //             <RadioGroup
        //                 aria-label="gender"
        //                 // defaultValue="female"
        //                 value={obj.i}
        //                 onChange={(e) => handleChange(e, i)}
        //                 name="radio-buttons-group"
        //             >
        //                 <FormControlLabel value={1} control={<Radio />} label="1" />
        //                 <FormControlLabel value={2} control={<Radio />} label="2" />
        //                 <FormControlLabel value={3} control={<Radio />} label="3" />
        //                 <FormControlLabel value={4} control={<Radio />} label="4" />
        //             </RadioGroup>
        //         </FormControl>)
        //     }
        // </>
    )
}

export default React.memo(Candidate);