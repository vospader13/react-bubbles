import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
    const [bub, Ata] = useState(100);
  useEffect(() => {
    const changeVal =  bub.state +100;


    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)),
      key: `${i }`
    }));

    setBubbleData(generateBubbleData);
  }, [colors]);

console.log(bub)
  return (
    <div className="bubble-wrap round">
      <p>bubbles</p>
      <Svg width={1700} height={500}>

        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[1000, 500]}
          includeRoot={true}
          nodeEnter={d => ({ ...d, r: 15 })}
          animate
        >
          {nodes =>

            nodes
              .map(({ x, y, r, key }, i) => {

                if (i < colors.length) {

                  return (
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                      fill={colors[i].code.hex}
                    />

                  );
                }
              })
              .filter(v => colors)
          }

        </Pack>


      </Svg>
    </div>
  );
};

export default Bubbles;