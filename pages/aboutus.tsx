import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import { Paper } from "@mui/material";
import React from 'react'
import Iframe from "react-iframe";


type Props = {}

const AboutUs = ({}: Props) => {
  return (
    <Layout>
       <Paper sx={{ height: "86vh" }}>
        <Iframe
          url="https://sci.chandra.ac.th/newsci/index.php/office-major/sci-sci/12-sci-major/1-cs-01"
          width="100%"
          height="100%"
          id="myId"
          display="inline"
          position="relative"
        />
      </Paper>
    </Layout>
  );
};

export default withAuth(AboutUs);