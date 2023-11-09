import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DataTable from "layout/DataTable/DataTable";
import React, { useEffect, useState } from "react";

//import AllServices from "services/AllServices";

const columns = [
  {
    field: "id",
    headerName: "Id",
    minwiWidth: 90,
  },
  {
    field: "countryname",
    headerName: "CountryName",
    minWidth: 150,
    type: "string",
  },
  //   {
  //     field: "img",
  //     headerName: "Avatar",
  //     width: 100,
  //     renderCell: (params) => {
  //       return <img src={params.row.img || "/noavatar.png"} alt="" />;
  //     },
  //   },
  {
    field: "currency",
    type: "string",
    headerName: "Currency",
    minWidth: 150,
  },
  {
    field: "nationalityname",
    type: "string",
    headerName: "Nationality Name",
    minWidth: 150,
  },
  {
    field: "callingcode",
    type: "string",
    headerName: "Calling Code",
    minWidth: 200,
  },
  //   {
  //     field: "verified",
  //     headerName: "Verified",
  //     width: 150,
  //     type: "boolean",
  //   },
];

var countryLists = [];
//var service = new AllServices();
const ViewCountryMaster = () => {
  const [isLoading, setisLoding] = useState();
  const [isError, setisError] = useState(null);
  useEffect(() => {
    console.log("fetching api");

    GetCountryList();
  }, []);

  const GetCountryList = async () => {
    try {
      setisLoding(true);
      const response = await fetch(
        "http://localhost:5012/api/Master/GetCountryDetails",
        { method: "Get" }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      countryLists = data.result;
      setisLoding(false);
      console.log(countryLists);
    } catch (error) {
      setisLoding(false);
      setisError(error.message);
    }
    // service
    //   .ViewCountryList()
    //   .then((data) => {
    //     countryLists = data;
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  var countryList = [];

  countryLists.forEach((elements, index, array) => {
    var item = {};
    item.id = index + 1;
    item.transId = elements.transid;
    item.countryname = elements.countryname;
    item.currency = elements.currency;
    item.nationalityname = elements.nationalityname;
    item.callingcode = elements.callingcode;
    countryList.push(item);
  });
  const userRows = countryList;
  return (
    <>
      {isLoading ? (
        <Backdrop open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : isError ? (
        <Box
          component={"div"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          <Typography color={"InfoText"}>Something Went wrong</Typography>
        </Box>
      ) : (
        <div className="users">
          <DataTable slug="users" columns={columns} rows={userRows} />
        </div>
      )}
    </>
  );
};

export default ViewCountryMaster;
