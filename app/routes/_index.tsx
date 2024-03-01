import { Container, Box, Typography, Link } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import ProTip from "~/components/ProTip";
import { Link as RemixLink } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} color="primary">
          Remix + MUI + Vite Example
        </Typography>
        <ProTip />
        <RemixLink to="/error">Test Error Boundary</RemixLink>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
