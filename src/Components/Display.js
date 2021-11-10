// import axios from "axios";
import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Update from "./Update";
// import axios from "axios";
// import { item } from "semantic-ui-react";
<NavBar />;
export default function Display() {
  const [uid, setUid] = useState("");
  console.log("uid: ", uid);

  const componentDidMount = () => {
    axios.get("http://localhost:3001/profile").then(
      (res) => {
        console.log("res:", res);
        localStorage.getItem("email");
        console.log("localstorege", localStorage);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const [data, setData] = useState([]);
  //const [check, setCheck] = useState();
  useEffect(() => {
    getList();
  }, []);
  console.warn(data);
  const getList = () => {
    console.log("heyy", localStorage);
    if (localStorage.length === 0) {
      alert("Please Login First");
    } else {
      fetch("http://localhost:3001/posts").then((result) => {
        result.json().then((resp) => {
          console.warn("result", resp);
          setData(resp);
        });
      });
    }
  };
  const deleteRow = (id) => {
    if (localStorage.length === 0) {
      alert("Please Login First");
    } else {
      axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
        console.log(res);
        console.log(res.data);
        getList();
      });
    }
  };
  // const updateRow = (id) => {
  //   if (localStorage.length === 0) {
  //     alert("Please Login First");
  //   } else {
  //     localStorage.setItem("id", id);
  //     console.log(localStorage);
  //   }
  // };

  return (
    <>
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
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="customtable">
                    {data.map((item) => (
                      <tr>
                        <th>
                          {" "}
                          <label className="customcheckbox">
                            {" "}
                            <input
                              type="checkbox"
                              className="listCheckbox"
                            />{" "}
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
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteRow(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            // onClick={() => updateRow(item.id)}
                          >
                            <Link to={`/update?id=${item.id}`}>Update</Link>
                            
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
