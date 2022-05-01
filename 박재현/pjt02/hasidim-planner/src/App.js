import { useState, useEffect } from "react";
import React from "react";
import RaidList from "./RaidList"
import styles from "./App.css";

const raidTime = document.getElementById("add")
const raidInput = document.querySelector("#appt")
const raidPlans = document.getElementById("plans")

const RAID_KEY = "Raids"

let raids = [

];

function saveRaid() {
  localStorage.setItem("Raids", JSON.stringify(raids))
}

const CreateList = () => {
  const [countList, setCountList] = useState([0])

  const onAddRaid = () => {
    let countArr = [...countList]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter)
    setCountList(countArr)
  }
}


function App() {
  const [raidPlanList, setRaidPlanList] = useState([...raids])

  function handleToDoSubmit(event){
    let planArr = [...raidPlanList];
    event.preventDefault();
    // console.log(event)
    // console.log(event.target[0].value)
    const newRaidTime = event.target[0].value;
    event.target[0].value = "";
    const newRaidObj = {
      date: newRaidTime,
      id: Date.now(),
      name16: "해릭",
    }
    raids.push(newRaidObj);
    planArr.push(newRaidObj);
    setRaidPlanList(planArr);
    console.log(raids);
    saveRaid(newRaidTime);
  }

  return (
    <div>
        <nav>
          <h1 id="header">하시딤 플래너</h1>
        </nav>
        <form id="add" onSubmit={handleToDoSubmit} style={{display: "flex", justifyContent: "center", marginTop: "20px", marginBottom:"20px"}}>
          <label htmlFor="appt">레이드 시각:</label>
          <input type="time" id="appt" name="appt"/>
          <input type="submit" value="새 일정 추가"/>
        </form>
        <RaidList newRaidTime={raids}/>
    </div>
  );
}

export default App;

// 여기서부터 바닐라JS


// function paintRaid(newRaidTime){
//   const div1 = document.createElement("div");
//   div1.id = newRaidTime.id;

//   const div2 = document.createElement("div");
//   div2.classList.add("divCenter");
//   div2.classList.add("textCenter")
//   const span1_div2 = document.createElement("span");
//   span1_div2.classList.add("textCenter")
//   span1_div2.innerText = "하시딤 시작 시각 : " + newRaidTime.date
//   const br = document.createElement("br");
//   const span2_div2 = document.createElement("span");
//   span2_div2.classList.add("textCenter");
//   span2_div2.innerText = remainClock(newRaidTime.date);
//   div2.appendChild(span1_div2);
//   div2.appendChild(br);
//   div2.appendChild(span2_div2);
  

//   const div3 = document.createElement("div");
//   div3.classList.add("div3");

//   const div5 = document.createElement("div");
//   div5.classList.add("div5");

//   const group1 = document.createElement("div");
//   group1.classList.add("group");
//   const group1_text = document.createElement("div");
//   group1_text.classList.add("group_text");
//   const group1_text_div = document.createElement("div");
//   group1_text_div.classList.add("group_text_div");
//   group1_text_div.innerText = '1조';
//   group1_text.appendChild(group1_text_div);
//   const group1_party = document.createElement("div");
//   group1_party.classList.add("group_party");


//   const group1_party_player1 = document.createElement("div");
//   group1_party_player1.classList.add("player");

//   const group1_player1_role = document.createElement("div");
//   group1_player1_role.classList.add("role");
//   const group1_player1_role_img = document.createElement("img")
//   group1_player1_role_img.src = 'img/skill_1.png';
//   group1_player1_role.appendChild(group1_player1_role_img);

//   const group1_player1_name = document.createElement("div");
//   group1_player1_name.classList.add("name");
//   group1_player1_name.innerText = "새우는맵다";

//   const group1_player1_buff = document.createElement("div");
//   group1_player1_buff.classList.add("buff");
//   group1_player1_buff.innerText = "서포트 샷";

//   group1_party_player1.appendChild(group1_player1_role);
//   group1_party_player1.appendChild(group1_player1_name);
//   group1_party_player1.appendChild(group1_player1_buff);

//   const group1_party_player2 = document.createElement("div");
//   group1_party_player2.classList.add("player");

//   const group1_player2_role = document.createElement("div");
//   group1_player2_role.classList.add("role");
//   const group1_player2_role_img = document.createElement("img")
//   group1_player2_role_img.src = 'img/skill_2.png';
//   group1_player2_role.appendChild(group1_player2_role_img);

//   const group1_player2_name = document.createElement("div");
//   group1_player2_name.classList.add("name");
//   group1_player2_name.innerText = "델리하임";

//   const group1_player2_buff = document.createElement("div");
//   group1_player2_buff.classList.add("buff");
//   group1_player2_buff.innerText = "잿빛 연막술";

//   group1_party_player2.appendChild(group1_player2_role);
//   group1_party_player2.appendChild(group1_player2_name);
//   group1_party_player2.appendChild(group1_player2_buff);

//   const group1_party_player3 = document.createElement("div");
//   group1_party_player3.classList.add("player");

//   const group1_player3_role = document.createElement("div");
//   group1_player3_role.classList.add("role");
//   const group1_player3_role_img = document.createElement("img")
//   group1_player3_role_img.src = 'img/skill_3.png';
//   group1_player3_role.appendChild(group1_player3_role_img);

//   const group1_player3_name = document.createElement("div");
//   group1_player3_name.classList.add("name");
//   group1_player3_name.innerText = "김카이";

//   const group1_player3_buff = document.createElement("div");
//   group1_player3_buff.classList.add("buff");
//   group1_player3_buff.innerText = "미르";

//   group1_party_player3.appendChild(group1_player3_role);
//   group1_party_player3.appendChild(group1_player3_name);
//   group1_party_player3.appendChild(group1_player3_buff);

//   group1_party.appendChild(group1_party_player1);
//   group1_party.appendChild(group1_party_player2);
//   group1_party.appendChild(group1_party_player3);

//   group1.appendChild(group1_text);
//   group1.appendChild(group1_party);

//   div5.appendChild(group1)

//   // 그룹 2

//   const group2 = document.createElement("div");
//   group2.classList.add("group");
//   const group2_text = document.createElement("div");
//   group2_text.classList.add("group_text");
//   const group2_text_div = document.createElement("div");
//   group2_text_div.classList.add("group_text_div");
//   group2_text_div.innerText = '2조';
//   group2_text.appendChild(group2_text_div);
//   const group2_party = document.createElement("div");
//   group2_party.classList.add("group_party");


//   const group2_party_player1 = document.createElement("div");
//   group2_party_player1.classList.add("player");

//   const group2_player1_role = document.createElement("div");
//   group2_player1_role.classList.add("role");
//   const group2_player1_role_img = document.createElement("img")
//   group2_player1_role_img.src = 'img/skill_1.png';
//   group2_player1_role.appendChild(group2_player1_role_img);

//   const group2_player1_name = document.createElement("div");
//   group2_player1_name.classList.add("name");
//   group2_player1_name.innerText = "Janey";

//   const group2_player1_buff = document.createElement("div");
//   group2_player1_buff.classList.add("buff");
//   group2_player1_buff.innerText = "스크류 어퍼, 레이지 임팩트";

//   group2_party_player1.appendChild(group2_player1_role);
//   group2_party_player1.appendChild(group2_player1_name);
//   group2_party_player1.appendChild(group2_player1_buff);

//   const group2_party_player2 = document.createElement("div");
//   group2_party_player2.classList.add("player");

//   const group2_player2_role = document.createElement("div");
//   group2_player2_role.classList.add("role");
//   const group2_player2_role_img = document.createElement("img")
//   group2_player2_role_img.src = 'img/skill_2.png';
//   group2_player2_role.appendChild(group2_player2_role_img);

//   const group2_player2_name = document.createElement("div");
//   group2_player2_name.classList.add("name");
//   group2_player2_name.innerText = "쳬셔렌";

//   const group2_player2_buff = document.createElement("div");
//   group2_player2_buff.classList.add("buff");
//   group2_player2_buff.innerText = "None";

//   group2_party_player2.appendChild(group2_player2_role);
//   group2_party_player2.appendChild(group2_player2_name);
//   group2_party_player2.appendChild(group2_player2_buff);

//   const group2_party_player3 = document.createElement("div");
//   group2_party_player3.classList.add("player");

//   const group2_player3_role = document.createElement("div");
//   group2_player3_role.classList.add("role");
//   const group2_player3_role_img = document.createElement("img")
//   group2_player3_role_img.src = 'img/skill_3.png';
//   group2_player3_role.appendChild(group2_player3_role_img);

//   const group2_player3_name = document.createElement("div");
//   group2_player3_name.classList.add("name");
//   group2_player3_name.innerText = "폴라몬";

//   const group2_player3_buff = document.createElement("div");
//   group2_player3_buff.classList.add("buff");
//   group2_player3_buff.innerText = "하데스";

//   group2_party_player3.appendChild(group2_player3_role);
//   group2_party_player3.appendChild(group2_player3_name);
//   group2_party_player3.appendChild(group2_player3_buff);

//   group2_party.appendChild(group2_party_player1);
//   group2_party.appendChild(group2_party_player2);
//   group2_party.appendChild(group2_party_player3);

//   group2.appendChild(group2_text);
//   group2.appendChild(group2_party);

//   div5.appendChild(group2)

//   const group3 = document.createElement("div");
//   group3.classList.add("group");
//   const group3_text = document.createElement("div");
//   group3_text.classList.add("group_text");
//   const group3_text_div = document.createElement("div");
//   group3_text_div.classList.add("group_text_div");
//   group3_text_div.innerText = '3조';
//   group3_text.appendChild(group3_text_div);
//   const group3_party = document.createElement("div");
//   group3_party.classList.add("group_party");


//   const group3_party_player1 = document.createElement("div");
//   group3_party_player1.classList.add("player");

//   const group3_player1_role = document.createElement("div");
//   group3_player1_role.classList.add("role");
//   const group3_player1_role_img = document.createElement("img")
//   group3_player1_role_img.src = 'img/skill_1.png';
//   group3_player1_role.appendChild(group3_player1_role_img);

//   const group3_player1_name = document.createElement("div");
//   group3_player1_name.classList.add("name");
//   group3_player1_name.innerText = "정냥";

//   const group3_player1_buff = document.createElement("div");
//   group3_player1_buff.classList.add("buff");
//   group3_player1_buff.innerText = "상태 지원";

//   group3_party_player1.appendChild(group3_player1_role);
//   group3_party_player1.appendChild(group3_player1_name);
//   group3_party_player1.appendChild(group3_player1_buff);

//   const group3_party_player2 = document.createElement("div");
//   group3_party_player2.classList.add("player");

//   const group3_player2_role = document.createElement("div");
//   group3_player2_role.classList.add("role");
//   const group3_player2_role_img = document.createElement("img")
//   group3_player2_role_img.src = 'img/skill_2.png';
//   group3_player2_role.appendChild(group3_player2_role_img);

//   const group3_player2_name = document.createElement("div");
//   group3_player2_name.classList.add("name");
//   group3_player2_name.innerText = "테마키";

//   const group3_player2_buff = document.createElement("div");
//   group3_player2_buff.classList.add("buff");
//   group3_player2_buff.innerText = "None";

//   group3_party_player2.appendChild(group3_player2_role);
//   group3_party_player2.appendChild(group3_player2_name);
//   group3_party_player2.appendChild(group3_player2_buff);

//   const group3_party_player3 = document.createElement("div");
//   group3_party_player3.classList.add("player");

//   const group3_player3_role = document.createElement("div");
//   group3_player3_role.classList.add("role");
//   const group3_player3_role_img = document.createElement("img")
//   group3_player3_role_img.src = 'img/skill_3.png';
//   group3_player3_role.appendChild(group3_player3_role_img);

//   const group3_player3_name = document.createElement("div");
//   group3_player3_name.classList.add("name");
//   group3_player3_name.innerText = "니하트";

//   const group3_player3_buff = document.createElement("div");
//   group3_player3_buff.classList.add("buff");
//   group3_player3_buff.innerText = "None";

//   group3_party_player3.appendChild(group3_player3_role);
//   group3_party_player3.appendChild(group3_player3_name);
//   group3_party_player3.appendChild(group3_player3_buff);

//   group3_party.appendChild(group3_party_player1);
//   group3_party.appendChild(group3_party_player2);
//   group3_party.appendChild(group3_party_player3);

//   group3.appendChild(group3_text);
//   group3.appendChild(group3_party);

//   div5.appendChild(group3)

//   const group4 = document.createElement("div");
//   group4.classList.add("group");
//   const group4_text = document.createElement("div");
//   group4_text.classList.add("group_text");
//   const group4_text_div = document.createElement("div");
//   group4_text_div.classList.add("group_text_div");
//   group4_text_div.innerText = '4조';
//   group4_text.appendChild(group4_text_div);
//   const group4_party = document.createElement("div");
//   group4_party.classList.add("group_party");


//   const group4_party_player1 = document.createElement("div");
//   group4_party_player1.classList.add("player");

//   const group4_player1_role = document.createElement("div");
//   group4_player1_role.classList.add("role");
//   const group4_player1_role_img = document.createElement("img")
//   group4_player1_role_img.src = 'img/skill_1.png';
//   group4_player1_role.appendChild(group4_player1_role_img);

//   const group4_player1_name = document.createElement("div");
//   group4_player1_name.classList.add("name");
//   group4_player1_name.innerText = "이련";

//   const group4_player1_buff = document.createElement("div");
//   group4_player1_buff.classList.add("buff");
//   group4_player1_buff.innerText = "전장의 서곡";

//   group4_party_player1.appendChild(group4_player1_role);
//   group4_party_player1.appendChild(group4_player1_name);
//   group4_party_player1.appendChild(group4_player1_buff);

//   const group4_party_player2 = document.createElement("div");
//   group4_party_player2.classList.add("player");

//   const group4_player2_role = document.createElement("div");
//   group4_player2_role.classList.add("role");
//   const group4_player2_role_img = document.createElement("img")
//   group4_player2_role_img.src = 'img/skill_2.png';
//   group4_player2_role.appendChild(group4_player2_role_img);

//   const group4_player2_name = document.createElement("div");
//   group4_player2_name.classList.add("name");
//   group4_player2_name.innerText = "데니스";

//   const group4_player2_buff = document.createElement("div");
//   group4_player2_buff.classList.add("buff");
//   group4_player2_buff.innerText = "None";

//   group4_party_player2.appendChild(group4_player2_role);
//   group4_party_player2.appendChild(group4_player2_name);
//   group4_party_player2.appendChild(group4_player2_buff);

//   const group4_party_player3 = document.createElement("div");
//   group4_party_player3.classList.add("player");

//   const group4_player3_role = document.createElement("div");
//   group4_player3_role.classList.add("role");
//   const group4_player3_role_img = document.createElement("img")
//   group4_player3_role_img.src = 'img/skill_3.png';
//   group4_player3_role.appendChild(group4_player3_role_img);

//   const group4_player3_name = document.createElement("div");
//   group4_player3_name.classList.add("name");
//   group4_player3_name.innerText = "플라체";

//   const group4_player3_buff = document.createElement("div");
//   group4_player3_buff.classList.add("buff");
//   group4_player3_buff.innerText = "None";

//   group4_party_player3.appendChild(group4_player3_role);
//   group4_party_player3.appendChild(group4_player3_name);
//   group4_party_player3.appendChild(group4_player3_buff);

//   group4_party.appendChild(group4_party_player1);
//   group4_party.appendChild(group4_party_player2);
//   group4_party.appendChild(group4_party_player3);

//   group4.appendChild(group4_text);
//   group4.appendChild(group4_party);

//   div5.appendChild(group4)


//   const group5 = document.createElement("div");
//   group5.classList.add("group");
//   const group5_text = document.createElement("div");
//   group5_text.classList.add("group_text");
//   const group5_text_div = document.createElement("div");
//   group5_text_div.classList.add("group_text_div");
//   group5_text_div.innerText = '5조';
//   group5_text.appendChild(group5_text_div);
//   const group5_party = document.createElement("div");
//   group5_party.classList.add("group_party");


//   const group5_party_player1 = document.createElement("div");
//   group5_party_player1.classList.add("player");

//   const group5_player1_role = document.createElement("div");
//   group5_player1_role.classList.add("role");
//   const group5_player1_role_img = document.createElement("img")
//   group5_player1_role_img.src = 'img/skill_1.png';
//   group5_player1_role.appendChild(group5_player1_role_img);

//   const group5_player1_name = document.createElement("div");
//   group5_player1_name.classList.add("name");
//   group5_player1_name.innerText = "Thisdevil";

//   const group5_player1_buff = document.createElement("div");
//   group5_player1_buff.classList.add("buff");
//   group5_player1_buff.innerText = "None";

//   group5_party_player1.appendChild(group5_player1_role);
//   group5_party_player1.appendChild(group5_player1_name);
//   group5_party_player1.appendChild(group5_player1_buff);

//   const group5_party_player2 = document.createElement("div");
//   group5_party_player2.classList.add("player");

//   const group5_player2_role = document.createElement("div");
//   group5_player2_role.classList.add("role");
//   const group5_player2_role_img = document.createElement("img")
//   group5_player2_role_img.src = 'img/skill_3.png';
//   group5_player2_role.appendChild(group5_player2_role_img);

//   const group5_player2_name = document.createElement("div");
//   group5_player2_name.classList.add("name");
//   group5_player2_name.innerText = "앗흥읏흥잇힝";

//   const group5_player2_buff = document.createElement("div");
//   group5_player2_buff.classList.add("buff");
//   group5_player2_buff.innerText = "None";

//   group5_party_player2.appendChild(group5_player2_role);
//   group5_party_player2.appendChild(group5_player2_name);
//   group5_party_player2.appendChild(group5_player2_buff);

//   const group5_party_player3 = document.createElement("div");
//   group5_party_player3.classList.add("player");

//   const group5_player3_role = document.createElement("div");
//   group5_player3_role.classList.add("role");
//   const group5_player3_role_img = document.createElement("img")
//   group5_player3_role_img.src = 'img/skill_3.png';
//   group5_player3_role.appendChild(group5_player3_role_img);

//   const group5_player3_name = document.createElement("div");
//   group5_player3_name.classList.add("name");
//   group5_player3_name.innerText = "루나사그레이";

//   const group5_player3_buff = document.createElement("div");
//   group5_player3_buff.classList.add("buff");
//   group5_player3_buff.innerText = "None";

//   group5_party_player3.appendChild(group5_player3_role);
//   group5_party_player3.appendChild(group5_player3_name);
//   group5_party_player3.appendChild(group5_player3_buff);

//   group5_party.appendChild(group5_party_player1);
//   group5_party.appendChild(group5_party_player2);
//   group5_party.appendChild(group5_party_player3);

//   group5.appendChild(group5_text);
//   group5.appendChild(group5_party);

//   div5.appendChild(group5)

//   const group6 = document.createElement("div");
//   group6.classList.add("group");
//   const group6_text = document.createElement("div");
//   group6_text.classList.add("group_text");
//   const group6_text_div = document.createElement("div");
//   group6_text_div.classList.add("group_text_div");
//   group6_text_div.innerText = '자생';
//   group6_text.appendChild(group6_text_div);
//   const group6_party = document.createElement("div");
//   group6_party.classList.add("group_party");


//   const group6_party_player1 = document.createElement("div");
//   group6_party_player1.classList.add("player");

//   const group6_player1_role = document.createElement("div");
//   group6_player1_role.classList.add("role");
//   const group6_player1_role_img = document.createElement("img")
//   group6_player1_role_img.src = 'img/skill_1.png';
//   group6_player1_role.appendChild(group6_player1_role_img);

//   const group6_player1_name = document.createElement("div");
//   group6_player1_name.classList.add("name");
  
//   if (newRaidTime.name16){
//     group6_player1_name.innerText = String(newRaidTime.name16);
//   } else {
//     const group6_player1_name_form = document.createElement("form");
//     group6_player1_name_form.id = newRaidTime.name16 + "name16";
//     const group6_player1_name_input = document.createElement("input");
//     group6_player1_name_input.type = "text";
//     const name16Form = document.getElementById(newRaidTime.name16 + "name16");
//     const name16Input = document.querySelector(`#${newRaidTime.name16}`+'name16 input');
//     group6_player1_name_form.appendChild(group6_player1_name_input);
//     group6_player1_name.appendChild(group6_player1_name_form)

//     function name16Refresh(event) {
//       event.preventDefault();
//       const name16New = name16Input.value;
//       name16Input = "";
//       newRaidTime.name16 = name16New;
//       group6_player1_name.innerText = String(newRaidTime.name16);
//       group6_player1_name_form.classList.add("none");
//     }
//     name16Form.addEventListener("submit", name16Refresh);
//   }
  

//   const group6_player1_buff = document.createElement("div");
//   group6_player1_buff.classList.add("buff");
//   group6_player1_buff.innerText = "데스 마커";

//   group6_party_player1.appendChild(group6_player1_role);
//   group6_party_player1.appendChild(group6_player1_name);
//   group6_party_player1.appendChild(group6_player1_buff);

//   group6_party.appendChild(group6_party_player1);

//   group6.appendChild(group6_text);
//   group6.appendChild(group6_party);

//   div5.appendChild(group6)

//   const div6 = document.createElement("div");
//   div6.classList.add("div6");
//   const div6_div1 = document.createElement("div");
//   div6_div1.classList.add("div6_div1");
//   div6_div1.innerText = "남은 버프 & 디버프"
//   const div6_ul = document.createElement("ul");
//   const div6_li_1 = document.createElement("li");
//   div6_li_1.innerText = "서포트 샷";
//   div6_ul.appendChild(div6_li_1);
//   const div6_li_2 = document.createElement("li");
//   div6_li_2.innerText = "데스 마커";
//   div6_ul.appendChild(div6_li_2);
//   const div6_li_3 = document.createElement("li");
//   div6_li_3.innerText = "전장의 서곡";
//   div6_ul.appendChild(div6_li_3);
//   const div6_li_4 = document.createElement("li");
//   div6_li_4.innerText = "스크류 어퍼";
//   div6_ul.appendChild(div6_li_4);
//   const div6_li_5 = document.createElement("li");
//   div6_li_5.innerText = "잿빛 연막술";
//   div6_ul.appendChild(div6_li_5);
//   const div6_li_6 = document.createElement("li");
//   div6_li_6.innerText = "죽음의 무도";
//   div6_ul.appendChild(div6_li_6);
//   const div6_li_7 = document.createElement("li");
//   div6_li_7.innerText = "상태 지원";
//   div6_ul.appendChild(div6_li_7);
//   const div6_li_8 = document.createElement("li");
//   div6_li_8.innerText = "이면을 보는 눈";
//   div6_ul.appendChild(div6_li_8);
//   const div6_li_9 = document.createElement("li");
//   div6_li_9.innerText = "힘의 결속";
//   div6_ul.appendChild(div6_li_9);
//   const div6_li_10 = document.createElement("li");
//   div6_li_10.innerText = "하데스";
//   div6_ul.appendChild(div6_li_10);
//   const div6_li_11 = document.createElement("li");
//   div6_li_11.innerText = "미르";
//   div6_ul.appendChild(div6_li_11);
//   const div6_li_12 = document.createElement("li");
//   div6_li_12.innerText = "레이지 임팩트";
//   div6_ul.appendChild(div6_li_12);
//   const div6_li_13 = document.createElement("li");
//   div6_li_13.innerText = "도끼 스매쉬";
//   div6_ul.appendChild(div6_li_13);


//   div6.appendChild(div6_div1);
//   div6.appendChild(div6_ul);

//   div3.appendChild(div5);
//   div3.appendChild(div6);


//   const div4 = document.createElement("div");
//   div4.classList.add("divDelete")
//   const button_delete = document.createElement("button");
//   button_delete.innerText = "일정 삭제";
//   button_delete.addEventListener("click", deleteRaid);
//   div4.appendChild(button_delete);

//   div1.appendChild(div2);
//   div1.appendChild(div3);
//   div1.appendChild(div4);
//   raidPlans.appendChild(div1);
// }


// function handleToDoSubmit(event){
//   event.preventDefault();
//   const newRaidTime = raidInput.value;
//   raidInput.value = "";
//   const newRaidObj = {
//     date: newRaidTime,
//     id: Date.now(),
//     name16: "해릭",
//   }
//   raids.push(newRaidObj);
//   paintRaid(newRaidObj);
//   saveRaid(newRaidTime);
// }

// function nameSubmit(info){
//   info.preventDefault();

// }

// useEffect(() => {
//   raidTime.addEventListener("submit", handleToDoSubmit);
// });

// const savedRaids = localStorage.getItem(RAID_KEY);

// if(savedRaids !== null){
//   const parsedRaids = JSON.parse(savedRaids);
//   raids = parsedRaids;
//   parsedRaids.forEach(paintRaid);
// }