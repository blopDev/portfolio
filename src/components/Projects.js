import { Button, Paper } from "@mui/material";

export default function Projects({ project }) {
  return (
    <>
      <a href={project.link} style={{ textDecoration: "none" }}>
        <Paper
          key={project.key}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{project.key}</h2>
          <p>{project.desc}</p>
          <img src={project.image} alt={project.key} style={{ width: "50%" }} />
        </Paper>
      </a>
    </>
  );
}
