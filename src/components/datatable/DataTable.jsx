import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource'

import './datatable.scss'
import { Link } from 'react-router-dom'


const DataTable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="callAction">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
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
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable