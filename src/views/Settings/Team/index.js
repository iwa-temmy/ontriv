import React, { useState } from "react";
import Table from "../../../components/Table";
import { MdDelete } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import NewTeamMember from "./AddNewMember";

const teamMembers = [
  {
    id: 1,
    name: "Samuel James",
    email: "Jamessam92@gmail.com",
    createDate: "12/04/21",
    role: "Finance",
  },
  {
    id: 2,
    name: "Samuel James",
    email: "Jamessam92@gmail.com",
    createDate: "12/04/21",
    role: "Finance",
  },
  {
    id: 3,
    name: "Samuel James",
    email: "Jamessam92@gmail.com",
    createDate: "12/04/21",
    role: "Finance",
  },
  {
    id: 4,
    name: "Samuel James",
    email: "Jamessam92@gmail.com",
    createDate: "12/04/21",
    role: "Finance",
  },
  {
    id: 5,
    name: "Samuel James",
    email: "Jamessam92@gmail.com",
    createDate: "12/04/21",
    role: "Finance",
  },
];

const Team = () => {
  const [addState, setAddState] = useState(false);

  const cols = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        cellClass: "py-3 list-client-item-bold ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Email Address",
        accessor: "email",
        cellClass: "py-3 list-client-item ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Role",
        accessor: "role",
        cellClass: "py-3 list-client-item ",
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: "Date Created",
        accessor: "createDate",
        cellClass: "py-3 list-client-item ",
        Cell: (props) => <>{props.value}</>,
      },

      {
        Header: "Action",
        accessor: "id",
        cellClass: "py-3 list-client-delete list-client-item",
        Cell: (props) => (
          <>
            <MdDelete
              size="14px"
              className="pt-0"
              onClick={() => {
                console.log(props.value);
              }}
            />
            <span className="pt-2 mb-0 text-underline">Delete</span>
          </>
        ),
      },
    ],
    []
  );
  return (
    <div className="mb-0 mt-2 overflow-auto team-section p-5 bg-white">
      <div className="header-section my-3 d-flex justify-content-between">
        <h1>Team Members</h1>
        <div
          className="btn-lg  create-button align-items-center cursor-pointer "
          onClick={() => {
            setAddState(true);
          }}
        >
          <h6 className="mb-0">
            <HiPlus color="#2465ec" className="create-icon" />
            ADD A NEW TEAM MEMBER
          </h6>
        </div>
      </div>
      <Table
        columns={cols}
        data={teamMembers}
        divided
        shadow
        defaultPageSize={6}
        pagePosition="center"
      />
      <NewTeamMember addState={addState} setAddState={setAddState} />
    </div>
  );
};

export default Team;
