import DataTable from "layout/DataTable/DataTable";
import React, { useEffect } from "react";
//import AllServices from "services/AllServices";

const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 90,
  },
  {
    field: "countryname",
    headerName: "CountryName",
    width: 150,
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
    width: 150,
  },
  {
    field: "nationalityname",
    type: "string",
    headerName: "Nationality Name",
    width: 150,
  },
  {
    field: "callingcode",
    type: "string",
    headerName: "Calling Code",
    width: 200,
  },
  //   {
  //     field: "verified",
  //     headerName: "Verified",
  //     width: 150,
  //     type: "boolean",
  //   },
];

// const userRows = [
//   {
//     id: "1",
//     countryname: "Malaysia",
//     currency: "MYR",
//     nationalityname: "Malaysian",
//     callingcode: "61",
//   },
// ];
var countryLists=[
    
        {
          "transid": "31247fbd-5096-41ad-931c-c5b485b2634c",
          "countryname": "Malaysia",
          "currency": "MYR",
          "nationalityname": "Malaysian",
          "callingcode": "61",
          "rco": "",
          "rcm": "2023-11-04T09:21:32.2391221",
          "luo": "",
          "lum": null,
          "sts": 0,
          "delstatus": 0
        }
      
];
//var service = new AllServices();
const ViewCountryMaster = () => {
  useEffect(() => {
    console.log("fetching api");
    GetCountryList();
  },[]);

  const GetCountryList = async() => {

    const res =await fetch({
        method:"Get",
        url:"http://localhost:5012/api/Master/GetDetails"
    })
    const data= await res.json();
    console.log(data);
    countryLists=data;
    console.log(countryLists)
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

  var countryList = [
  ];

  countryLists.forEach((elements, index, array) => {
    var item = {};
    item.id=index+1;
    item.countryname = elements.countryname;
    item.currency = elements.currency;
    item.nationalityname = elements.nationalityname;
    item.callingcode = elements.callingcode;
    countryList.push(item);
  });
  const userRows = countryList;
  return (
    <>
      <div className="users">
        <DataTable slug="users" columns={columns} rows={userRows} />
      </div>
    </>
  );
};

export default ViewCountryMaster;
