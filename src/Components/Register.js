import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

export default function Register() {
  <NavBar />;
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const Reg_submit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post("http://localhost:3001/posts", inputs);
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: `15px` }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            value={inputs.firstName || ""}
                            onChange={handleChange}
                            name="firstName"
                          />
                          <label className="form-label" for="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            value={inputs.lastName}
                            onChange={handleChange}
                            name="lastName"
                          />
                          <label className="form-label" for="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                            value={inputs.birthdayDate}
                            onChange={handleChange}
                            name="birthdayDate"
                          />
                          <label for="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Gender"
                            value="Female"
                            onChange={handleChange}
                            name="Gender"
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Gender"
                            value="Male"
                            onChange={handleChange}
                            name="Gender"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Gender"
                            value="Other"
                            onChange={handleChange}
                            name="Gender"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            value={inputs.emailAddress}
                            onChange={handleChange}
                            name="emailAddress"
                          />
                          <label className="form-label" for="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            value={inputs.phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
                          />
                          <label className="form-label" for="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <select
                          className="select form-control-lg"
                          value={inputs.skills}
                          onChange={handleChange}
                          name="skills"
                        >
                          <option value="1" disabled>
                            Choose option
                          </option>
                          <option value="PHP" name="PHP">
                            PHP
                          </option>
                          <option value="Python" name="Python">
                            Python
                          </option>
                          <option value="JS" name="JS">
                            JS
                          </option>
                        </select>
                        <label className="form-label select-label">
                          Choose option
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                        id="mainInput"
                        onClick={Reg_submit}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
