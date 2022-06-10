import React from "react"
import "../css/submit.css";

import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

// For Backend !
let problemHeader = "Rocket Altitude";
let problem = `น้อง ๆ เคยขึ้นจรวจมั้ยครับ 5555555 พี่เนี่ยนะ เคยขึ้นจรวจครั้งนึงไปดาวอังคาร คราวเนี้ย เวลาเราขึ้นไปสู่ชั้นบรรยากาศต่าง ๆ เนี่ย มันก็จะมีจอคอยบอกความสูงของจรวจเราใช่มะ ก็คือจะเป็นตัวเลขขึ้นตามนี้ 1982, 2020, 2043, 2130 เมตรไปเรื่อย ๆ

ปัญหามันคืออย่างนี้ พี่อะ ต้องคอยดูสถานการณ์ว่า จรวดมันมีแนวโน้มว่าจะตกมั้ย ไม่งั้นถ้าอยู่ดี ๆ ไม่มีใครเฝ้า จรวดมันน้ำมันหมดกระทันหันแล้วพี่ตกก็ตายพอดี

วิธีทำคือ น้องต้องนับจำนวนครั้งที่ความสูงมันลดลง จากความสูงครั้งก่อนหน้า (มันไม่มีความสูงก่อนหน้าความสูงครั้งแรก) ในตัวอย่างดังนี้เลย

1982 (N/A ไม่มีความสูงก่อนหน้า)
2020 (เพิ่มขึ้น)
2043 (เพิ่มขึ้น)
2130 (เพิ่มขึ้น)
2112 (ลดลง)
2230 (เพิ่มขึ้น)
2342 (เพิ่มขึ้น)
2432 (เพิ่มขึ้น)
2420 (ลดลง)
2444 (เพิ่มขึ้น)

จากตัวอย่างเนี่ย มันมีผลการวัดทั้งหมด 2 ครั้ง ที่ความสูงมันลดลง

ให้น้องเขียนโปรแกรมหาจำนวนครั้งที่ความสูงมันลดลงให้หน่อยครับ แหะ ๆ`;

let input=`1982
2020
2043
2130
2112
2230
2228
2332
2420
2410`;
let output=`3`;

let result = "P-PP-P****";
let code = "";

const Home = () => {
  let resultToShow = result;
  resultToShow = beautify(resultToShow);
  return (
    <div className="app-body">
      <div className="wrapper">
        <div className="problem">
          <div className="topic">
            <div className="header"><span>{problemHeader}</span></div>
            <div className="detail">{problem}</div>
          </div>
          <div className="input-output">
            <div className="input">
              <div className="header">Input</div>
              <div className="detail">{input}</div>
            </div>
            <div className="output">
              <div className="header">Output</div>
              <div className="detail">{output}</div>
            </div>
          </div>
        </div>
        <div className="editor">
          <div className="result">{resultToShow}</div>
          <div className="text-editor">
            <CodeMirror
              value={code}
              height="500px"
              extensions={[cpp()]}
              theme="dark"
              placeholder="Enter your code..."
              onChange={(value) => {
                code = value;
                console.log(code);
              }}
              autoFocus="true"
            />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home

// Function to convert boring result to colorful result
let beautify = (str) => {
  // Function for span wrapping
  let addSpan = (content, css) => {
    return <span className={css}>{content}</span>;
  }

  // Construct new result
  let result = [];
  for (let i in str) {
    let c = str[i]
         if (c === "P") result.push(addSpan(c, "white")); 
    else if (c === "-") result.push(addSpan(c, "red"));
    else result.push(<span>{c}</span>);
  }
  return result;
}
