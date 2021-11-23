import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import CandidateContext from '../candidatesContext';
import './header.css'

const Header = () => {
    const { setData } = React.useContext(CandidateContext)
    const [searchValue, setSearchValue] = useState('')

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json').then((res) => {
            const resData = JSON.parse(JSON.stringify(res))['data'];
            setApiData(resData);
            setData(resData)
            // console.log(JSON.parse(JSON.stringify(res))['data']);
        }).catch((err) => console.log(err))
    }, [])

    const handleChange = e => {
        e.preventDefault()
        setSearchValue(e.target.value)

        if (e.target.value.length > 0) {
            const temp = apiData && apiData.filter((x) => x?.name?.toLowerCase() == e.target.value.toLowerCase())
            setData(temp)
        } else setData(apiData)
    }

    return (
        <nav>

            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <input type='text' onChange={handleChange} />
                    <Link to="/candidates">Candidates</Link>
                    <Link to="/shortlisted">Shortlisted</Link>
                    <Link to="/rejected">Rejected</Link>
                </div>
            </div>
        </nav>
    )
}
export default React.memo(Header);