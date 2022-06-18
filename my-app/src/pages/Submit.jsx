import React, { useState, useEffect } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation } from "react-router-dom";

import "../css/submit.css";

import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";

let json = {
  userId: "62a4b0a81a443f1fa5ae06f0",
  questionId: "6299c0597a7ed0113ea80664",
  sourceCode: "int main() { return 1; }"
};
const result = fetch("https://compile.bxdman.com/compile", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmE0YjBhODFhNDQzZjFmYTVhZTA2ZjAiLCJ1c2VybmFtZSI6InVzZXI0IiwiaWF0IjoxNjU0OTY0Mjk3LCJleHAiOjE2NTU1NjkwOTd9.00cS2kAJU3iyy_acusz5BgkH1euKQAMP3VNx6sqLeLs"
  },
  body: JSON.stringify(json),
})
  .then(res => res.json())
  .then((result) => {
  console.log(result);
})

// For Backend !
let code = "";

const Home = () => {
  let query = useQuery();

  let questionID = query.get("id");
  if (!questionID) questionID = "6299c0167a7ed0113ea8065c";

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.bxdman.com/question/" + questionID)
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })
  }, [])

  let rankText = "ง่ายมาก";
  if (items.rank === 2) rankText = "ง่าย";
  if (items.rank === 3) rankText = "ปานกลาง";
  if (items.rank === 4) rankText = "ยาก";
  if (items.rank === 5) rankText = "ยากมาก";

  if (error)
    return <div className="app-body">Invalid question id.</div>
  else if (isLoaded) {
    let examples = [];
    for (let i = 0; i < 3; i++) {
      examples.push(
        <div>
        <h2>ตัวอย่างที่ {i+1}:</h2>
        <code>
          <div><h1>ข้อมูลนำเข้า:</h1><p>{items.ex_input[i]}</p></div><br/>
          <div><h1>ข้อมูลขาออก:</h1><p>{items.ex_output[i]}</p></div>
        </code>
        </div>
      );
    }
    let hint = "ไม่มี";
    if (items.note) hint = items.note;

    return (
      <div className="app-body">
        <div className="wrapper">
          <div className="problem">
            <div>
              <Tabs>
                <TabList className="problem-tab">
                  <Tab className="problem-tab-button">รายละเอียด</Tab>
                  <Tab className="problem-tab-button">รูปภาพ</Tab>
                  <Tab className="problem-tab-button">ผลลัพธ์</Tab>
                </TabList>
                <div className="problem-contents">
                   <TabPanel className="problem-content">
                     <h1>
                       # {items.title} <span>[{items.unit}] ~ {items.issuer}</span>
                       <div><span>{rankText}</span> • ผ่านแล้ว {items.finished} คน • <a target="_blank" href={items.pdfLink}>[PDF]</a></div>
                     </h1>
                     <hr/>
                     <p>{items.detail}</p>
                     <br/>
                     {examples}
                     <br/>
                     <h2>ข้อมูลขาเข้า:</h2>
                     <div><code><div>{items.detail_input}</div></code></div>
                     <br/>
                     <h2>ข้อมูลขาออก:</h2>
                     <div><code><div>{items.detail_output}</div></code></div>
                     <br/>
                     <h2>คำใบ้:</h2>
                     <p>{hint}</p>
                   </TabPanel>
                   <TabPanel className="problem-content">
                     <div className="none">- ไม่มีรูปภาพ -</div>
                   </TabPanel>
                   <TabPanel className="problem-content">
                     <div className="none">- คุณยังไม่ได้ส่งคำตอบ -</div>
                   </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
          <div className="editor">
            <CodeMirror
              value={code}
              height="580px"
              extensions={[cpp()]}
              theme="dark"
              placeholder="เขียนโปรแกรมของคุณ..."
              onChange={(value) => {
                code = value;
                console.log(code);
              }}
              autoFocus="true"
            />
            <div className="submit">
              <button>[ส่งคำตอบ]</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
