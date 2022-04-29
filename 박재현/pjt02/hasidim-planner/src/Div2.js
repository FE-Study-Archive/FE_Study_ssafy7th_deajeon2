import React from "react";

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
  if (props.newRaidTime.length !== 0) {
    const plans = props.newRaidTime
    console.log(plans)
    return (
      <div>
        {plans && plans.map((plan, index) => (
      <div className="divCenter textCenter" key={index}>
        <span className="textCenter">하시딤 시작 시각 : {plan.date}</span>
        <br/>
        <span className="textCenter">{remainClock(plan.date)}</span>
      </div>))}
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