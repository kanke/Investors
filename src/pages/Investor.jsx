import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Investor = () => {
    const {id} = useParams();
    const [investor, setInvestor] = useState([]);
    const api_token = sessionStorage.getItem('api_token');

    useEffect(() => {
        fetch(`https://api.preqin.com/api/Investor?FirmID=${id}`, {
            method: 'GET', headers: {
                'Authorization': `Bearer ` + api_token,
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setInvestor(res.data[0])
            });
    });

        return (
            <div>
                <h2>Investor Details for {investor.firmID}</h2>
                <div>PE(Private Equity): {investor.pe}</div>
                <div>PD(Private Debt): {investor.pd}</div>
                <div>RE(Real Estate): {investor.re}</div>
                <div>INF(Infrastructure): {investor.inf}</div>
                <div>NR(Natural Resources): {investor.nr}</div>
                <div>HF(Hedge Funds): {investor.hf}</div>
            </div>
        );

};

export default Investor;