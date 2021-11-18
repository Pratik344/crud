import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeFromCart } from "../Services/Action/removeFromCartAction";
import {increment} from "../Services/Action/handleIncrementAction"
import { decrement } from "../Services/Action/handleDecrementAction";
export default function Cart() {
  const cart = useSelector((cart) => cart.addToCart);
  const updateCart=useSelector((updateCart)=>updateCart.removeFromCart)
  console.log('updateCart: ', updateCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  },[cart.cardData]);
  return (
    <div>
      <Table className="">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Avatar</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cardData.map((item) => (
            <TableRow>
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">
                <img
                  style={{
                    height: 48,
                    width: 48,
                    border: "2px solid",
                    "border-radius": 50,
                  }}
                  src={item.img}
                />
              </TableCell>
              <TableCell align="left">{item.title}</TableCell>
              <TableCell align="left">{item.author}</TableCell>
              <TableCell>
                <button onClick={()=>dispatch(decrement(item.id))}>-</button>
                <input
                  type="text"
                  placeholder={item.quantity}
                />
                <button onClick={()=>dispatch(increment(item.id))} >+</button>
              </TableCell>
              <TableCell align="left">
                {<span>₹ {item.price}</span>}
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="card-total">
              <h3>
                card total: <span> {cart.totalAmount}₹ </span>
              </h3>
              <button>CheckOut</button>
            </div>
    </div>
  );
}
