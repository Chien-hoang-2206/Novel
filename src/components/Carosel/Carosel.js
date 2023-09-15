import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Carousel } from "react-bootstrap";
import axios from "../../api/axios";
const TypesNovelURL = "/api/novels/types";

function Carosel({ types }) {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [Listnovel, setListnovel] = useState();

  function callApiNewNovelList() {
    axios
      .post(TypesNovelURL, {
        types: types,
      })
      .then((response) => {
        if (response?.data) {
          setListnovel(response.data.novelSameTypes);
        } else {
          alert("Hệ thống đang bị lỗi, vui lòng thử lại sau.");
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      })
  }
  useEffect(() => {
    async function fetchData() {
      const Listnovel = await callApiNewNovelList();
      setListnovel(Listnovel);
    }
    fetchData();
  }, []);


  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768) {
    return (
      <Carousel style={{ marginTop: "0px auto", paddingTop: 30 }}>

        {Listnovel &&
          Listnovel.map((novel, index) => (
            <Carousel.Item key={index}  >
              <img
                className="d-block w-60 rounded-md shadow-md mx-auto "
                src={novel.coverLink}
                alt="First slide"
              />
              <a style={{ textDecoration: "none", color: "#3c3f42f7" }} href={novel._id}>
                <p className="my-4 text-3xl  font-bold font-mono text-center">{novel.title}</p>
              </a>
            </Carousel.Item>
          ))}

       

      </Carousel>
    );
  }
  else {
    return (
      <div className="py-5 whitespace-nowrap overflow-x-scroll  w-11/12 mx-auto ">
        <div className="inline-block  ">



          <div className="flex max-w-md  ">

            {Listnovel &&
              Listnovel.map((novel, index) => (
                <div key={index} className="w-full mx-3">
                  <img className="rounded-md  w-64 h-80 mx-auto object-fill" alt="" src={novel.coverLink} />
                  <a style={{ textDecoration: "none", color: "#3c3f42f7" }} href={novel._id}>
                    <p className="my-4 text-3xl  font-bold font-mono text-center">{novel.title}</p>
                  </a>
                </div>
              ))}


            <div className="w-full mx-3">
              <img className="rounded-md  w-4/5 h-4/5 mx-auto object-fill" src="https://static.cdnno.com/poster/nguoi-tai-hien-dai-thu-den-tien-gioi-tin-nhan/300.jpg?1677481899"
                alt="Three slide" />
              <a href="/novel/643c1ba9846d4044a2b45786">
                <p className="my-4 text-3xl font-bold font-mono text-center">Thiên Long Bát Bộ</p>
              </a>
            </div>
            <div className="w-full mx-3">
              <img className="rounded-md  w-4/5 h-4/5 mx-auto object-fill" src="https://img.dtruyen.com/public/images/large/phamnhantutienNne33LSoZl.jpg"
                alt="Three slide" />
              <a href="/novel/64381622da02d2d2678d291c">
                <p className="my-4 text-3xl font-bold font-mono text-center">Phàm Nhân Tu Tiên</p>
              </a>
            </div>
            <div className="w-full mx-3">
              <img className="rounded-md  w-4/5 h-4/5 mx-auto object-fill" src="https://static.cdnno.com/poster/xich-tam-tuan-thien/300.jpg?1612524612"
                alt="Three slide" />
              <a href="/novel/6474310463d1c7a4046821b6">
                <p className="my-4 text-3xl font-bold font-mono text-center">Xích Tâm Tuần Thiên</p>
              </a>
            </div>

            <div className="w-full mx-3">
              <img className="rounded-md  w-4/5 h-4/5 mx-auto object-fill" src="https://static.cdnno.com/poster/linh-canh-hanh-gia/300.jpg?1648001055"
                alt="Three slide" />
              <a href="/novel/6474310463d1c7a4046821b7">
                <p className="my-4 text-3xl font-bold font-mono text-center">Linh Cảnh Hành Giả</p>
              </a>
            </div>

            <div className="w-full mx-3">
              <img className="rounded-md  w-4/5 h-4/5 mx-auto object-fill" src="https://static.cdnno.com/poster/vu-em-my-thuc-tiem/300.jpg?1664010144"
                alt="Three slide" />
              <a href="/novel/6474310463d1c7a4046821b8">
                <p className="my-4 text-3xl font-bold font-mono text-center">Vú Em Mỹ Thực Tiệm</p>
              </a>
            </div>


          </div>
        </div>
      </div>
    );
  }
}
export default Carosel;
