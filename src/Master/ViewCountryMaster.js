import DataTable from "layout/DataTable/DataTable";
import React, { useEffect } from "react";
import AllServices from "services/AllServices";

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
var countryLists;
var service = new AllServices();
const ViewCountryMaster = () => {
  useEffect(() => {
    console.log("fetching api");
    GetCountryList();
  });

  const GetCountryList = () => {
    service
      .ViewCountryList()
      .then((data) => {
        countryLists = data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var countryList = [];

  countryLists.forEach((elements, index, array) => {
    var item = {};
    item.id = index;
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
