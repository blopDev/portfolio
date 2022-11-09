import { Button, Paper } from "@mui/material";

export default function Item({item})
{
    return (
        <Paper justifyContent="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{item.key}</h2>
            <img justifyContent="center" src={item.image} alt={item.key} style={{ width: "50%", height: "auto" }}/>
            <p>{item.desc}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

