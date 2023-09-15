import React, { useEffect, useState } from "react";
import "./ListChart.css";
import CardChartNovel from "../../../../components/card/CardChartNovel/CardChartNovel";
import axios from "../../../../api/axios";
const HomeNewNoevl_URL = "/api/ranking/readcount";


function callApiNewNovelList() {
  return axios
    .get(HomeNewNoevl_URL)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function ListChart() {
  const [newNovels, setNewNovels] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const newNovelList = await callApiNewNovelList();
      console.log("truyen doc");
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="list">
        <select className="button-list">
          <option> Theo tuần </option>
          <option> Theo tháng </option>
          <option> Theo năm </option>
        </select>
      </div>
      <div className="container-list">
            {/* list novel */}
            {newNovels &&
                newNovels.map((novels, index) => (
                  <CardChartNovel
                    key={index}
                    index = {index}
                    id={novels._id}
                    image={novels.coverLink}
                    nameComic={novels.title}
                    type1={novels.types[0]}
                    type2={novels.types[1]}
                    content={novels.intro}
                    auth={novels.author}
                  />
                ))}
      
      </div>
    </>
  );
}

export default ListChart;
