import {useEffect, useState} from "react";

const Investors = () => {
    const [investors, setInvestors] = useState([]);

    useEffect(() => {
        let api_token;
        const authorize = async () => {
            const res = await fetch('https://api.preqin.com/connect/token', {
                method: 'POST', headers: {
                    'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'
                }, body: new URLSearchParams({
                    username: process.env.REACT_APP_USER_NAME, apikey: process.env.REACT_APP_API_KEY
                })
            });
            const data = await res.json();
            api_token = data.access_token;
            const getObject = async () => {
                const res = await fetch('https://api.preqin.com/api/Investor?FirmID=2670,2792,332,3611', {
                    method: 'GET', headers: {
                        'Authorization': `Bearer ` + api_token,
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();
                setInvestors(data.data);
            };
            await getObject()
        };
        authorize();

    }, []);

    if (investors.length) {
        return (<div>
            <h1>Investors</h1>
            <div className="investors">
                {investors.map((investor, index) => (<div className="investor"
                                                          key={index}>
                    <div className="title">{investor.FirmID}</div>
                    <div className="title">{investor.FirmName}</div>
                    <div className="body">{investor.firmType}</div>
                    <div className="title">{investor.yearEst}</div>
                    <div className="body">{investor.address}</div>
                </div>))}
            </div>
        </div>);
    }
};
export default Investors