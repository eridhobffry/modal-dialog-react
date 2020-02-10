import React from "react";
import PropTypes from "prop-types";

const UserDetail = ({ name, age, job_title, gender, country }) => {
  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Job Title: {job_title}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Country: {country}</h4>
    </div>
  );
};

UserDetail.PropTypes = {};

export default UserDetail;
