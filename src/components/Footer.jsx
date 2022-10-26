import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: '10px', bottom: 0, bgcolor: 'black', width: '100%', position: 'relative' }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            mt: 2,
          }}
        >
          <Typography variant="caption" style={{color:'white'}}>
          Arief Givar Prasetya &reg; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
