import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource'

import './datatable.scss'


const DataTable = () => {
    const actionColumn = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="callAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]



    return (
        <div className="datatable" >
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