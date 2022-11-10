import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ item }) {


  return (
    <>
      <Link to={`projects/${item.key}`} style={{ textDecoration: 'none'}}>
        <Paper
          key={item.key}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{item.key}</h2>
          <img
            src={item.image}
            alt={item.key}
            style={{ width: "50%" }}

          />
          <p>{item.desc}</p>

          <Button className="CheckButton">Check it out!</Button>
        </Paper>
      </Link>
    </>
  );
}
