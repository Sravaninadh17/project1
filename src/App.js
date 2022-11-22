import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import things from './image2.jpg'; 
import thing from './image1.jpg';
import thing3 from './image3.jpg';
import thing4 from './image4.jpg';


export default function SimpleAccordion() {

  function BasicButton1() {
    return ( <div><img src={thing} height="250" align="auto" width="auto"  /> </div>  
    );
  };
  function BasicButton2() {
    return ( <div><img src={things} height="250" align="auto" width="auto"  /> </div>  
    );
  };
  function BasicButton3() {
    return ( <div><img src={thing3} height="250" align="auto" width="auto"  /> </div>  
    );
  };
  function BasicButton4() {
    return ( <div><img src={thing3} height="250" align="auto" width="auto"  /> </div>  
    );
  };


  return (
    <div  style={{display: 'flex',
    flexDirection: "column",
   justifyContent: 'space-around',
   justifyContent: 'space-between',
   margin: '10px',
   alignContent: 'center',
   alignItems:'center',}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:'red'}}>WebLA Class1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'green'}}>
            The Video will be Uploaded Soon
          </Typography>
          < BasicButton1 />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'red'}}>WebLA Class2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{color:'blue'}}>
            The Video will be Uploaded Soon
          </Typography>
          < BasicButton2 />
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'red'}}>WebLA Class3</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{color:'green'}}>
            The Video will be Uploaded Soon
          </Typography>
          < BasicButton3 />
        </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color:'red'}}>WebLA Class4</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{color:'green'}}>
            The Video will be Uploaded Soon
          </Typography>
          < BasicButton4 />
        </AccordionDetails>
        </Accordion>
      
    </div>
  );
}