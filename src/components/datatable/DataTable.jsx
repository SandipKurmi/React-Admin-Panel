import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource'
import { useState } from 'react';
import './datatable.scss'
import { Link } from 'react-router-dom'


const DataTable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: (params) => {
            return (
                <div className="callAction">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]



    return (
        <div className="datatable" >
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid className="userDataTable"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable