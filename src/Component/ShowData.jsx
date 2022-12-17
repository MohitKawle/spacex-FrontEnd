import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function ShowData() {
  const [data, setData] = useState([]);
  // console.log(data);
  // useEffect(() => {
  //   axios
  //     .get("https://api.spacexdata.com/v3/capsules")
  //     .then((res) => setData(res.data));
  // }, []);
  return (
    <div className="grid grid-cols-4 gap-1" style={{width:"auto"}}>
      {/* {data &&
        data.map((e) => (
          <div>
            <Card key={e.capsule_serial} e={e} />
          </div>
        ))} */}
    </div>
  );
}

export default ShowData;
