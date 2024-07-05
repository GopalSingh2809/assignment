import React from 'react';
import UseForm from '../components/UseForm';

const FirstPage = () => {
  return (
    <div style={
        {height:"400px",
         width:"400px",
         border:"2px solid blue",
         borderRadius:"10px",
         boxShadow:"8px 8px 8px blue"
        }
    }>
      <h1 style={{fontWeight:600,margin:"15px 0px 0px 50px"}}>Enter our Details</h1>
      <UseForm/>
    </div>
  )
}

export default FirstPage
