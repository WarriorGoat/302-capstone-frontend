import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryForm.css";

const EntryFormPage = (props) => {
  const backendUrl = process.env.REACT_APP_BACKEND;
  const [company, setCompany] = useState("");
  const [author, setAuthor] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [webAddress, setWebAddress] = useState("")
  const [streetNum, setStreetNum] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [licenseState, setLicenseState] = useState("")
  const [licenseNum, setLicenseNum] = useState("");
  const [licenseClass, setLicenseClass] = useState("");
  const [workType0, setWorkType0] = useState("");
  const [workType1, setWorkType1] = useState("");
  const [workType2, setWorkType2] = useState("");
  const [workType3, setWorkType3] = useState("");
  const [workType4, setWorkType4] = useState("")
  const [workType5, setWorkType5] = useState("");
  const [workType6, setWorkType6] = useState("");
  const [workType7, setWorkType7] = useState("");
  const [workType8, setWorkType8] = useState("");
  const [workType9, setWorkType9] = useState("");
  const [freeEstimates, setFreeEstimates] = useState(["false"]);

  //instantiate navigator
  const navigate = useNavigate();

  const handleCreateEntry = async () => {
    axios
      .post(`${backendUrl}/entries/create-one`, {
        company: company,
        author: author,
        contactFirstName: firstName,
        contactLastName: lastName,
        contactEmail: email,
        webAddress: webAddress,
        streetNum: streetNum,
        streetName: streetName,
        city: city,
        state: state,
        zipCode: zipCode,
        licenseState: licenseState,
        licenseNum: licenseNum,
        licenseClass: licenseClass,
        type0: workType0,
        type1: workType1,
        type2: workType2,
        type3: workType3,
        type4: workType4,
        type5: workType5,
        type6: workType6,
        type7: workType7,
        type8: workType8,
        type9: workType9, 
        freeEstimates: freeEstimates
        
      })
      .then(function () {
        navigate("/list");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form>
      <div>
        <h1>Create a New Entry</h1>
        <label>Company: </label>
        <input
          type="text"
          placeholder="Enter Company Name"
          autoComplete="Off"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <br />
        <label>Author: </label>
        <input
          type="text"
          placeholder="Author's Name"
          autoComplete="Off"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <br />
        <label>Contact First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="Off"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <label>Contact Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="Off"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <label>Contact E-Mail: </label>
        <textarea
          type="text"
          placeholder="E-Mail"
          autoComplete="Off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <p>Company Address</p>
        <label>Street Number: </label>
        <input
          type="text"
          placeholder="Number"
          autoComplete="Off"
          onChange={(e) => {
            setStreetNum(e.target.value);
          }}
        />
        <label>Street Name: </label>
        <input
          type="text"
          placeholder="Street"
          autoComplete="Off"
          onChange={(e) => {
            setStreetName(e.target.value);
          }}
        />
        <label>City: </label>
        <input
          type="text"
          placeholder="City"
          autoComplete="Off"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label>State: </label>
        <select
          name="stateList"
          id="stateList"
          required="required"
          onChange={(e)=> {
            setState(e.target.value)
          }} 
        >
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="GU">GU</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="PR">PR</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VI">VI</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>
        <label>Zip Code: </label>
        <input
          type="text"
          placeholder="zip"
          autoComplete="Off"
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
        />
        <br />
        <label>Company Website: </label>
        <textarea
          type="text"
          placeholder="https://..."
          autoComplete="Off"
          onChange={(e) => {
            setWebAddress(e.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <p>License Info</p>
        <label>State: </label>
        <select
          name="stateList"
          id="stateList"
          required="required"
          onChange={(e)=> {
            setLicenseState(e.target.value)
          }}
        >
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="GU">GU</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="PR">PR</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VI">VI</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>
        <label>License Number: </label>
        <input
          type="text"
          placeholder="Number"
          autoComplete="Off"
          onChange={(e) => {
            setLicenseNum(e.target.value);
          }}
        />
        <label>License Class: </label>
        <input
          type="text"
          placeholder="A, B, C, etc..."
          autoComplete="Off"
          onChange={(e) => {
            setLicenseClass(e.target.value);
          }}
        />
        <br />
      </div>
      <div>
        <p>Provides Free Estimates</p>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setFreeEstimates(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="true">True</option>
          <option value="false">False</option>
          </select>
      </div>
      <div>
        <p>Work Specialties - Fill as many as you would like</p>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType0(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType1(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType2(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType3(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType4(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType5(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType6(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType7(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType8(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <label>Type: </label>
        <select
          name="specialtiesList"
          id="specialtiesList"
          required="required"
          onChange={(e)=> {
            setWorkType9(e.target.value)
          }}
        >
          <option value=" "></option>
          <option value="General Contractor">General Contractor</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Concrete">Concrete</option>
          <option value="Masonry">Masonry</option>
          <option value="Framing">Framing</option>
          <option value="Heating & Cooling">Heating & Cooling</option>
          <option value="Windows & Doors">Windows & Doors</option>
          <option value="Roofing">Roofing</option>
          <option value="Insulation">Insulation</option>
          <option value="Flooring">Flooring</option>
          <option value="Tile">Tile</option>
          <option value="Painting">Painting</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Decking">Decking</option>
          <option value="Siding">Siding</option>
          <option value="Gutters">Gutters</option>
          <option value="Asphalt Paving">Asphalt Paving</option>
          <option value="Excavation">Excavation</option>
          <option value="Basements">Basements</option>
          <option value="Trim Carpentry">Trim Carpentry</option>
          <option value="Handy Man">Handy Man</option>
        </select>
        <br />
      </div>
      <button
        onClick={() => {
          handleCreateEntry();
        }}
      >
        Create Entry:
        {/* {" "} */}
      </button>
    </form>
  );
};

export default EntryFormPage;
