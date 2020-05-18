import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
    const [bub, Ata] = useState(100);
  const [colorList, setColorList] = useState([]);

useEffect(() => {
setInterval(function(){
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => console.log(err))

  },1200)

  }, [])

  return (
    <div className="app-cont">

      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles style={{boxShadow:'2px 1px 5px 2px black', border:'5px ridge black' }} className ="bubs" colors={colorList}/>
    </div>
  );
};

export default BubblePage;
