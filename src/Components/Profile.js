import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToUserName } from "../Services/Action/Action";

export default function Profile(props) {
  // console.log('home props: ', props);

  const [Username, setUserName] = useState("");

  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <div className="form-group">
        <div>
          <label for="exampleInputEmail1">User Name</label>
        </div>
        <div>
          <input
            type="UserName"
            class="form-control"
            id="UserName"
            name="UserName"
            placeholder="Enter UserName"
            value={Username}
            onChange={handleOnChange}
          ></input>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          name="email"
          value={localStorage.getItem("email")}
          //   placeholder="Enter email"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          dispatch(addToUserName(Username));
        }}
      >
        Add Name
      </button>
    </div>
  );
}
