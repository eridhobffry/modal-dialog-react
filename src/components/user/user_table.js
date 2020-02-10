import React from "react";
import PropTypes from "prop-types";

const UserTable = props => {
  const { data, setSelected, setModalState } = props;
  console.log(data);
  //   UserTable.propTypes = {
  //     // data: PropTypes.array,
  //     setSelected: PropTypes.func,
  //     setModalState: PropTypes.func
  //   };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const { id, name, age, job_title } = row;
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{job_title}</td>
              <td>
                <button
                  onClick={() => {
                    setSelected(row);
                    setModalState(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
