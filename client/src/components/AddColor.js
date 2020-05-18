import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const AddColor = ({ settingColor, colors, updateColors }) => {
  const [newColor, setNewColor] = useState(initialColor);


  const addColor = (e) => {
    setInterval(function(){
    e.preventDefault();

    axiosWithAuth()
      .post('/colors', newColor)
      .then(res => {
        console.log(res.data)

        updateColors(res.data)
        settingColor(false)
      },1)
      })
      .catch(err => console.log(err))
  }


  return (
    <div >
      <form onSubmit={addColor}>
        <legend>add color</legend>
        <label>
          color name:
          <input
            onChange={e =>
              setNewColor({ ...newColor, color: e.target.value })
            }
            value={newColor.color}
          />
        </label>
        <label>
          hex code:
          <input
            onChange={e =>
              setNewColor({
                ...newColor,
                code: { hex: e.target.value }
              })
            }
            value={newColor.code.hex}
          />
        </label>
        <div className="button-row">
          <button type="submit">add</button>
          <button onClick={() => setNewColor(false)}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddColor;