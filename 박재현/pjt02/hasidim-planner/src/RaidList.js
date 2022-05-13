import React from "react";
import Div2 from "./Div2";
// import Div3 from "./Div3";
// import Div4 from "./Div4";
// import Div4 from "./Div4";

const RaidList = (props) => {
  console.log(props)

  return (
    <div id={'plans'}>
      <Div2 newRaidTime={props.newRaidTime}/>
      {/* <Div3 />
      <Div4 /> */}
    </div>
  )
}

export default RaidList;