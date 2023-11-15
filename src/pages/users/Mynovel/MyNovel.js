import React, { useState } from "react";
import "./mynovel.css";
import { TabName } from "../../../components/TextField/TestComponents";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import factories from "../../../redux/app/factory";
function MyNovel() {
  const [toggleState, setToggleState] = useState(1);
  const [NovelsList, setNovelsList] = useState();
  console.log("🚀 ~ file: MyNovel.js:10 ~ MyNovel ~ NovelsList:", NovelsList)
  const [loading, setloading] = useState();
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    setloading(true);
    async function fetchData() {
      const responseRecomendList = await factories.getNovelListHome();
      const newNovelList = responseRecomendList?.novelList
      setNovelsList(newNovelList);
      setloading(false)
    }
    fetchData();
  }, []);

  return (
    <div className="box-post-novel">
      {/* tu truyen */}
      <div className="postnv">
        <h2> Tủ Truyện </h2>
      </div>

      <div className="containerTabs">
        {/* tab Name */}
        <div className="bloc-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <TabName>Danh sách truyện</TabName>
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <TabName>Đang phê duyệt</TabName>
            <div className="number-border"> 2</div>
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <TabName>Bình luận</TabName>
            <div className="number-border">3037</div>
          </div>
        </div>
        {/* content tab  */}
        <div className="content-tabs">
          {/* tab ds truyen */}
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="outlet-edit-novel">
                  <Outlet />
            </div>
            <div className="containerDST">
              {NovelsList?.map((item,index)=>(
                <div className="novel" key={index}>
                  <div className="img-div">
                    <img alt='img' className="img-novel-post" src={item?.coverLink ?? ''} />
                  </div>
                  <div className="text-novel-name">
                  <Link style={{ textDecoration: 'none' }} to={`/post-novel/mynovel/${item?._id}`}>
                      <h4 style={{textDecoration: 'none'}}> {item?.title}</h4>
                    </Link>
                  </div>
              </div>
              ))}
             
            </div>
          </div>

          {/* dang phe duyet */}
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h1>Đang phê duyệt</h1>
          </div>

          {/* Binh luan */}
          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h1>Bình luận</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNovel;
