import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./DataTable.scss";
import ModelPopUp from "layout/ModelPopUp/ModePopUp";
import ModelPopUpConfirm from "layout/ModelPopUp/ModelPopUpConfirm";

const DataTable = (props) => {
  const [openPopUp, setopenPopUp] = useState(false);
  const [openConPopUp, setConPopUp] = useState(false);
  const HandlePopup = (value) => setopenPopUp(value);
  const HandleConPopup = (value) => setConPopUp(value);
  const handleDelete = (id) => {
    setConPopUp(true);
    //delete the item
    // mutation.mutate(id)
  };
  const handleEdit = (id) => {
    console.log("edit function");
    setopenPopUp(true);
  };
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        console.log(params),
        (
          <div className="action">
            {/* <Link to={`/${props.slug}/${params.row.transId}`}>
              <EditIcon color="info" />
            </Link> */}
            <div className="Edit" onClick={() => handleEdit(params.row.id)}>
              <EditIcon color="info" />
            </div>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <DeleteIcon />
            </div>
          </div>
        )
      );
    },
  };
  return (
    <>
      <div className="dataTable">
        <DataGrid
          className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
      <ModelPopUp isopen={openPopUp} setpopup={HandlePopup} />

      <ModelPopUpConfirm isopen={openConPopUp} setpopup={HandleConPopup} />
    </>
  );
};

export default DataTable;
