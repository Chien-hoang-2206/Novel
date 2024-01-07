import React, { useEffect, useState } from "react";
import "./ListChart.css";
import CardChartNovel from "../../../../components/card/CardChartNovel/CardChartNovel";
import axios from "../../../../api/axios";
import { useLocation } from 'react-router-dom';
const apiEndpoints = {
  'trend': 'read-rank',
  'read': 'read-rank',
  'like': 'score-rank',
  'bookmark': 'review-rank'
};

function callApiNewNovelList(lastSegment) {
  const apiEndpoint = apiEndpoints[lastSegment];
  return axios
    .get(`/api/ranking/${apiEndpoint}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function ListChart() {
  const location = useLocation();
  const path = location.pathname;
  const segments = path.split('/');
  const lastSegment = segments[segments.length - 1];
  const [newNovels, setNewNovels] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const newNovelList = await callApiNewNovelList(lastSegment);
      setNewNovels(newNovelList);
    }
    fetchData();
  }, [lastSegment]);

  return (
    <>
      {/* <div className="list">
        <select className="button-list">
          <option> Theo tuần </option>
          <option> Theo tháng </option>
          <option> Theo năm </option>
        </select>
      </div> */}
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
