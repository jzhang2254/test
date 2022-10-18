import React, { useRef, useState } from "react";
import winePic from '../image/top21.jpg';

function WineList() {
    const [formValue, setFormValue] = useState('');
    return (
      <>
        <img className="img" src={winePic} alt="tempoary"/>
  
        <form onSubmit={sendQuery}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter Wine Name Here"
          />
          <button type="submit" disabled={!formValue}>
            🕊️
          </button>
        </form>
  
        <ol>
          <li>1. Enclosed above, beneath, before, behind</li>
          <li>2. In green uncertainty, from which a shark</li>
          <li>3. At any time may dash</li>
          <li>
            4. And doom you like some huge demonic fate...
          </li>
          <li>......</li>
        </ol>
      </>
    );
  }

  const sendQuery = async (e) => {
    //send a query to database 
  }

  export default WineList;