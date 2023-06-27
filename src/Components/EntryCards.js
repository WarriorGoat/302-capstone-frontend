import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryCards.css";
import axios from "axios";
import { MichiganLink } from "./LicenseLinks";

// Blog Card
const EntryCards = (props) => {
  const [entryList, setEntryList] = useState(props);

  const navigate = useNavigate();
  // const MichiganLink = MichiganLink();

  const DeleteCard = (props) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND}/entries/deleteOne/${props}`)
      .then(function (response) {
        axios
          .get(`${process.env.REACT_APP_BACKEND}/entries/all`)
          .then(function (res) {
            setEntryList(res.data.entries);
            navigate("/list");
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const entryCard = (props) => {
    const entry = props.entry;
    const license = entry.licenseInfo;
    const address = entry.companyAddress;
    const workTypes = entry.workTypes;
    console.log(entry);
    return (
      <div className="card col" key={entry.id}>
        <div className="card-header">
          <h2 className="card-title">Company: {entry.company}
          </h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Contact Name:</b>{" "}
              {entry.contactFirstName + " " + entry.contactLastName}
            </li>
            <li className="list-group-item">
              <b>Contact E-Mail:</b> {entry.contactEmail}
            </li>
            <li className="list-group-item">
              <b>Company Address:</b>{" "}
              {address?.streetNum +
                " " +
                address?.streetName +
                " - " +
                address?.city +
                ", " +
                address?.state +
                " " +
                address?.zipCode}
            </li>
            <li className="list-group-item">
              <b>Company Website:</b> {entry.webAddress}
            </li>
            <li className="list-group-item">
              <b>License Info:</b>{" "}
              {license?.licenseState +
                " License # " +
                license?.licenseNum +
                ", Class: " +
                license?.licenseClass}
                 <a href={`${MichiganLink}${license?.licenseNum}`} target = "blank"> Click here to verify</a>
            </li>
            <li className="list-group-item">
              <b>Free Estimates:</b> {entry.freeEstimates? "Yes":"No"}
            </li>
            <li className="list-group-item">
              <b>Work Specialites:</b>{" "}
              {workTypes?.type0 +
                ", " +
                workTypes?.type1 +
                ", " +
                workTypes?.type2 +
                ", " +
                workTypes?.type3 +
                ", " +
                workTypes?.type4 +
                ", " +
                workTypes?.type5 +
                ", " +
                workTypes?.type6 +
                ", " +
                workTypes?.type7 +
                ", " +
                workTypes?.type8 +
                ", " +
                workTypes?.type9}
            </li>
            <li className="list-group-item">
              <b>Creation Date:</b> {entry.createdAt}
            </li>
            <li className="list-group-item">
              <b>Last Updated:</b> {entry.updatedAt}
            </li>
            {/* <button
              className="deleteCard"
              onClick={() => {
                DeleteCard(entry.id);
              }}
            >
              Delete Entry
            </button> */}
          </ul>
          {/* </div> */}
        </div>
      </div>
    );
  };
  return (
    <>
      {/* <div className="card">{entryCard(props)}</div> */}
      <div className="row align-items-start">{entryCard(props)}</div>
    </>
  );
};

export default EntryCards;
