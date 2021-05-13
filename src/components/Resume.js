import React, { Fragment, useState } from "react";
import { Box,Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { Page } from 'react-pdf'
import { Document } from 'react-pdf/dist/esm/entry.webpack'
import pdfimg from '../pdfFolder/CV_JitheshKumar_feb.pdf'

function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage,setNextPage]=useState(false);
  const [prevPage,setPrevPage]=useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const previouse=(()=>{

    if(pageNumber<=1){
      setPrevPage(true)
      setNextPage(false)
    }
     else
     {
       setPageNumber(pageNumber - 1)
    setPrevPage(false)
     }
  });

  const nextP=(()=>{

    if(pageNumber>=4){
      setNextPage(true)
      setPrevPage(false)
    }
    else{
      setPageNumber(pageNumber + 1)
    setNextPage(false)
    }
  });

  return (
    <Fragment>
      <Navbar></Navbar>
      <Box>
        <p style={{backgroundColor:'#F4C430'}}>Page {pageNumber} of {numPages}</p>
        <Button variant="contained" disabled={prevPage} onClick={()=>previouse()}>prev</Button>
        <Button variant="contained" disabled={nextPage} onClick={()=>nextP()}>Next</Button>
        <Document
          file={pdfimg}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
    </Fragment>
  );
}

export default Resume;
