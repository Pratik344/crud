import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Item } from "semantic-ui-react";
export default function Display() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/posts").then((result)=>{
            result.json().then((resp)=>{
                console.warn("result",resp)
                setData(resp)
            })
        })
    },[])
    console.warn(data)
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title m-b-0">Users List</h5>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>
                      {" "}
                      <label className="customcheckbox m-b-20">
                        {" "}
                        <input type="checkbox" id="mainCheckbox" />{" "}
                        <span className="checkmark"></span>{" "}
                      </label>{" "}
                    </th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Skill</th>
                    <th scope="col">ID</th>
                  </tr>
                </thead>
                <tbody className="customtable">
                  {
                  data.map((item)=>
                  <tr>
                    
                    <th>
                      {" "}
                      <label className="customcheckbox">
                        {" "}
                        <input type="checkbox" className="listCheckbox" />{" "}
                        <span className="checkmark"></span>{" "}
                      </label>{" "}
                    </th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.birthdayDate}</td>
                    <td>{item.Gender}</td>
                    <td>{item.emailAddress}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.skills}</td>
                    <td>{item.id}</td>
                  </tr>
  )
}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
