import React, { useEffect, useState } from "react";
import { thread } from "./components/thread";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [data, setdata] = useState({});

  useEffect(() => {
    setdata(thread);
  }, []);
  //console.log(data);
  return (
    <div>
      {Object.keys(data).length > 0 && (
        <>
          <Main author={data.author} text={data.text} replies={data.replies} />
        </>
      )}
    </div>
  );
}

export default App;
