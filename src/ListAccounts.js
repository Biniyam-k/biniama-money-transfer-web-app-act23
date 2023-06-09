import React, {useEffect, useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {DataGrid} from '@mui/x-data-grid';

import Header from "./Header";
import axios from "axios";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ListAccounts() {

    const [allAccounts, setAllAccounts] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/api/accounts')
            .then((response) => setAllAccounts(response.data))
            .catch((error) => console.log(error));

    }, []);

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 130, sortable: false,},
        {field: 'middleName', headerName: 'Middle name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {field: 'dateOfBirth', headerName: 'Date of Birth', width: 130},
        {field: 'phoneNumber', headerName: 'Phone Number', width: 130},
        {field: 'email', headerName: 'Email', width: 200},
        {field: 'pin', headerName: 'Pin', width: 130}, //, valueGetter: (params) => `${'*'.repeat(params.row.pin.length)}`},
        {field: 'balance', headerName: 'Balance', width: 130, sortable: false,},
        {field: 'openingDate', headerName: 'Opening Date', width: 130},
    ];

    return (
        <div style={{height: 400, width: '100%', marginTop: '30px'}}>
            <DataGrid
                columns={columns}
                rows={allAccounts}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default ListAccounts;
