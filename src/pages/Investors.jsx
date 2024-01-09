import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DataTable from "react-data-table-component";
import {Button} from "reactstrap";

const Investors = () => {
    const columns = [
        {
            name: "Firm #",
            selector: (row) => row.firmID,
            sortable: true
        },
        {
            name: "Firm Name",
            selector: (row) => row.firmName,
            sortable: true
        },
        {
            name: "Firm Type",
            selector: (row) => row.firmType,
            sortable: true
        },
        {
            name: "Date Added",
            selector: (row) => row.yearEst,
            sortable: true
        },
        {
            name: "Address",
            selector: (row) => row.address,
            sortable: true
        },
        {
            selector: (row) => row.firmID,
            cell: (row) => <Button onClick={() => openInvestor(row.firmID)}>View Details</Button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        }
    ];

    const [investors, setInvestors] = useState([]);
    const navigate = useNavigate();

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
            sessionStorage.setItem('api_token', api_token);
            const getObject = async () => {
                const res = await fetch('https://api.preqin.com/api/Investor?FirmID=2670,2792,332,3611', {
                    method: 'GET', headers: {
                        'Authorization': `Bearer ` + api_token,
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();
                console.log("data.data ", data.data);
                setInvestors(data.data);
            };
            await getObject()
        };
        authorize();

    }, []);

    const openInvestor = (id) => {
        navigate(`/investors/${id}`);
    };


        return (<div>
            <h2>Investors</h2>
            <DataTable
                columns={columns}
                data={investors}
                defaultSortField
                striped
                pagination
                subHeader
                subHeaderComponent
            />

        </div>);
};

export default Investors


