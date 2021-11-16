import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function Cart() {
  const cart = useSelector((cart) => cart.addToCart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  console.log("cartjs: ", cart);

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
          {cart.map((item) => (
            <TableRow>
              <TableCell align="left">{item.cardData.id}</TableCell>
              <TableCell align="left">
                <img
                  style={{
                    height: 48,
                    width: 48,
                    border: "2px solid",
                    "border-radius": 50,
                  }}
                  src={item.cardData.img}
                />
              </TableCell>
              <TableCell align="left">{item.cardData.title}</TableCell>
              <TableCell align="left">{item.cardData.author}</TableCell>
              <TableCell>
                <button>-</button>
                <input
                  type="text"
                  placeholder={item.cardData.quantity}
                  disabled
                />
                <button >+</button>
              </TableCell>
              <TableCell align="left">
                {<span>₹ {item.cardData.price}</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
