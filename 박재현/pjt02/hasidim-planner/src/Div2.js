import React from "react";
import { useState, useEffect } from "react";

const RAID_KEY = "Raids"

let raids = []

const savedRaids = localStorage.getItem(RAID_KEY);

const Div2 = (props) => {
  console.log('Div2 props')
  console.log(props)
  function remainClock(time) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const planhours = Number(time.slice(0, 2));
    const planminutes = Number(time.slice(3, 5));
    let H = planhours - hours;
    let M = planminutes - minutes;
    if (M < 0){
      H = H - 1;
      M = M + 60;
    };
    if (H < 0){
      return "시각이 초과하였습니다."
    } else {
      return "남은 시각 : " + String(H) + '시간 ' + String(M) + '분'
    }
  }
  const [plans, setPlans] = useState(props.newRaidTime)
  if (props.newRaidTime.length !== 0) {
    // const plans = props.newRaidTime
    function deleteRaid(event) {
      const div = event.target.parentElement.parentElement;
      console.log('div.id : ' + div)
      // div.remove();
      raids = plans
      raids = raids.filter((raid) => raid.id !== parseInt(div.id))
      setPlans(raids)
    }
    console.log('setted : ' + plans)
    return (
      <div id="">
        {plans && plans.map((plan, index) => (
          <div>
            <div className="divCenter textCenter" key={index}> 
            {/* key를 date.now() 줄 것 index 값은 겹칠 확률이 높음 */}
              <span className="textCenter">하시딤 시작 시각 : {plan.date}</span>
              <br/>
              <span className="textCenter">{remainClock(plan.date)}</span>
            </div>
            <div className="divDelete" key={index}>
              <button onClick={deleteRaid}>일정 삭제</button>
            </div>
          </div>
        ))}
      </div>
    )}
  else {
    return (
      <div className="divCenter textCenter">
        <span className="textCenter">현재 계획된 하시딤이 없습니다.</span>
      </div>
    )
  }
}

export default Div2;