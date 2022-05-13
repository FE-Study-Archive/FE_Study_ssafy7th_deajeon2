import React from "react";

const RAID_KEY = "Raids"

let raids = []

const savedRaids = localStorage.getItem(RAID_KEY);


function deleteRaid(event) {
  const div = event.target.parentElement;
  div.remove();
  raids = raids.filter((raid) => raid.id !== parseInt(div.id));
}




const Div4 = () => {
  return (
    <div className="divDelete">
      <button onClick={deleteRaid}>일정 삭제</button>
    </div>
  );
}

export default Div4;