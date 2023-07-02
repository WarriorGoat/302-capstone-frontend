import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,  useSelector} from "react-redux";
import "./EntryForm.css";
import { registerEntry } from "../redux/entriesSlice";

const EntryFormPage = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const status = useSelector((state) => state.users.status); 
  const scope = useSelector((state) => state.users.scope)
  const [selected, setSelected]=useState(null)
  const states=["AL", "AK", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "NE", "NH", "NJ", "NM", "NV", "NY", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VI", "VT", "VA", "WA", "WI", "WV", "WY"]

  const specialties = [" ", "General Contractor", "Electrical", "Plumbing", "Concrete", "Masonry", "Framing", "Heating & Cooling", "Windows & Doors", "Roofing", "Insulation", "Flooring", "Tile", "Painting", "Landscaping", "Decking", "Siding", "Gutters", "Asphalt Paving", "Excavation", "Basements", "Trim Carpentry", "Handy Man"]

  useEffect(() => {
      if (status === "fulfilled") {
        console.log("Registration successful")
        navigate("/login");
      }
  }, [status]);

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Entry form activated");
    const data = new FormData(event.currentTarget);
    let entryObj = {
      company: data.get("company"),
      author: data.get("author"), 
      contactFirstName: data.get("contactFirstName"),
      contactLastName: data.get("contactLastName"),
      contactEmail: data.get("contactEmail"),
      webAddress: data.get("webAddress"),
      streetNum: data.get("streetNum"),
      streetName: data.get("streetName"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      licenseState: data.get("licenseState"),
      licenseNum: data.get("licenseNum"),
      licenseClass: data.get("licenseClass"),
      type0: data.get("type0"),
      type1: data.get("type1"),
      type2: data.get("type2"),
      type3: data.get("type3"),
      type4: data.get("type4"),
      type5: data.get("type5"),
      type6: data.get("type6"),
      type7: data.get("type7"),
      type8: data.get("type8"),
      type9: data.get("type9"),   
      active: true,
      freeEstimates: data.get("freeEstimates"),

    };
    dispatch(registerEntry(entryObj));
    console.log("Entry form submitted")
  }


  return (
    (scope === "contractor") ? (

      <form onSubmit={handleSubmit}>
      <div>
        <h1>Create a New Entry</h1>
        <label>Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter Company Name"
          autoComplete="Off"
        />
        <br />
        <label>Author: </label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author's Name"
          autoComplete="Off"
        />
        <br />
        <label>Contact First Name: </label>
        <input
          type="text"
          id="contactFirstName"
          name="contactFirstName"
          placeholder="First Name"
          autoComplete="Off"
        />
        <br />
        <label>Contact Last Name: </label>
        <input
          type="text"
          id="contactLastName"
          name="contactLastName"
          placeholder="Last Name"
          autoComplete="Off"
        />
        <br />
        <label>Contact E-Mail: </label>
        <textarea
          type="text"
          id="contactEmail"
          name="contactEmail"
          placeholder="E-Mail"
          autoComplete="Off"
        />
        <br />
      </div>
      <div>
        <h3>Company Address</h3>
        <label>Street Number: </label>
        <input
          type="text"
          id="streetNum"
          name="streetNum"
          placeholder="Number"
          autoComplete="Off"
        />
        <label>Street Name: </label>
        <input
          type="text"
          id="streetName"
          name="streetName"
          placeholder="Street"
          autoComplete="Off"
        />
        <br/>
        <label>City: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          autoComplete="Off"
        />
        <label>State: </label>
        <select
          name="state"
          id="state"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {states.map(state => <option value={state}>{state}</option>)}
        </select>
        <label>Zip Code: </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="zip"
          autoComplete="Off"
        />
        <br />
        <label>Company Website: </label>
        <textarea
          type="text"
          id="webAddress"
          name="webAddress"
          placeholder="https://..."
          autoComplete="Off"
        />
        <br />
      </div>
      <div>
        <h3>License Info</h3>
        <label>State: </label>
        <select
          name="licenseState"
          id="licenseState"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {states.map(state => <option value={state}>{state}</option>)}
        </select>
        <label>License Number: </label>
        <input
          type="text"
          id="licenseNum"
          name="licenseNum"
          placeholder="Number"
          autoComplete="Off"
        />
        <label>License Class: </label>
        <input
          type="text"
          id="licenseClass"
          name="licenseClass"
          placeholder="A, B, C, etc..."
          autoComplete="Off"
        />
        <br />
      </div>
      <div>
        <label>Provides Free Estimates</label>
        <select
          name="freeEstimates"
          id="freeEstimates"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          <option value="false">False</option>
          <option value="true">True</option>
          </select>
      </div>
      <div>
        <h3>Work Specialties - Fill as many as you would like</h3>
        <label>Type: </label>
        <select
          name="type0"
          id="type0"
          required="required"
          onChange={(value) => setSelected(value)}
        >
       {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type1"
          id="type1"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type2"
          id="type2"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type3"
          id="type3"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <br/>
        <label>Type: </label>
        <select
          name="type4"
          id="type4"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type5"
          id="type5"
          required="required"
          onChange={(value) => setSelected(value)}
        >
         {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type6"
          id="type6"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type7"
          id="type7"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <br/>
        <label>Type: </label>
        <select
          name="type8"
          id="type8"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <label>Type: </label>
        <select
          name="type9"
          id="type9"
          required="required"
          onChange={(value) => setSelected(value)}
        >
          {specialties.map(specialty => <option value={specialty}>{specialty}</option>)}
        </select>
        <br />
      </div>
      <button type="submit">
        Create Entry:
      </button>
    </form>

    ):(
      <div>
        <h2>You must be logged in with a contractor account to create a new contractor entry.</h2>
      </div>
    )
    
  )
}

export default EntryFormPage;
