import React, { memo, useEffect, useState } from "react";
import "./typeSearch.css";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import Footer from "../../../parts/user/footer";
import {
  TitleText,
  TypesDeleteText,
} from "../../../components/TextField/TestComponents";
import DropdownSort from "../../../components/Dropdown/DropdownSort/DropdownSort";
import CardNovelTypesSearch from "../../../components/card/CardNovelTypesSearch/CardNovelTypesSearch";

import axios from "../../../api/axios";
const TypesNovelURL = "/api/novels/types";
const HomeNewNoevl_URL = "/api/novels/";

function TypesPage() {
  const [types, setTypes] = useState([]);
  const typesForChoose = [ "Tiên Hiệp",
  "Kiếm Hiệp",
  "Huyễn Huyền",
  "Vô Địch",
  "Điềm Đạm",
  "Tưởng Tu",
  "Nhẹ Nhàng",
  "Đô Thị",
  "Dị Giới"]
  const [Listnovel, setListnovel] = useState();
  console.log(Listnovel);
  const [width, setWidth] = React.useState(window.innerWidth);
  let startX;
  let scrollLeft;
  function startTouch(e) {
    startX = e.touches[0].pageX;
    scrollLeft = e.target.scrollLeft;
  }

  useEffect(() => {
    async function fetchData() {
      const Listnovel = await callApiNewNovelList();
      setListnovel(Listnovel);
    }
    fetchData();
  }, []);

  function callApiNewNovelList() {
    return axios
      .get(HomeNewNoevl_URL)
      .then((response) => {
        return response.data.novelList;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function moveTouch(e) {
    if (!startX) {
      return;
    }

    let currentX = e.touches[0].pageX;
    let diffX = startX - currentX;
    e.target.scrollLeft = scrollLeft + diffX;

    e.preventDefault();
  }



  const handleAddType = (choose) => {
    if (!types.includes(choose)) {
      const newTypes = [...types, choose];
      axios
        .post(TypesNovelURL, {
          types: newTypes,
        })
        .then((response) => {
          if (response.data) {
            setListnovel(response.data.novelSameTypes);
          } else {
            alert("Hệ thống đang bị lỗi, vui lòng thử lại sau.");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
  
      setTypes(() => newTypes);
    } else {
      alert("This type is already selected.");
    }
  };

  const handleDelete = (type) => {
    const newTypes = types.filter((t) => t !== type);
    axios
      .post(TypesNovelURL, {
        types: newTypes,
      })
      .then((response) => {
        if (response.data) {
          setListnovel(response.data.novelSameTypes);
          setTypes(newTypes);
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert("Hệ thống đang bị lỗi, vui lòng thử lại sau.");
        }
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 668) {
    return (
      <>
        <div >
          <div className=" px-2">
            {/* <div className="col-type">
              <div className="choose">
                <div className="choosed-type">
                  <TitleText>Đã chọn</TitleText>
                  {types &&
                    types.map((type, index) => (
                      <button className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 ">
                        <TypesDeleteText
                          key={index}
                          onClick={() => handleDelete(type)}
                        >
                          {type}
                        </TypesDeleteText>
                        <button className="btn-delete mx-1  ">
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </button>
                    ))}
                </div>
              </div>
              <div className="type-choose">
                <TitleText> Thể loại </TitleText>
                <div className="type">
                  {typesForChoose &&
                    typesForChoose.map((type, index) => (
                      <button
                        key={index}
                        className="mx-1 rounded-sm px-2 py-1 bg-gray-400 text-gray-100  "
                        onClick={() => handleAddType(type)}
                      >
                        <TypesDeleteText>{type} </TypesDeleteText>
                      </button>
                    ))}
                </div>
              </div>
              <div className="status">
                <TitleText> Tình trạng </TitleText>
                <div className="type">
                  <button
                    className="btn-types"
                    onClick={() => handleAddType("Hoàn Thành")}
                  >
                    <TypesDeleteText> Hoàn Thành </TypesDeleteText>
                  </button>
                  <button
                    className="btn-types"
                    onClick={() => handleAddType("Đang Ra")}
                  >
                    <TypesDeleteText> Đang Ra </TypesDeleteText>
                  </button>
                </div>
              </div>
              <div className="view">
                <TitleText> Thuộc tính</TitleText>
                <div className="type">
                  <button
                    className="btn-types"
                    onClick={() => handleAddType("Góc Nhìn Nam")}
                  >
                    <TypesDeleteText> Nam </TypesDeleteText>
                  </button>
                  <button
                    className="btn-types"
                    onClick={() => handleAddType("Góc Nhìn Nữ")}
                  >
                    <TypesDeleteText> Nữ </TypesDeleteText>
                  </button>
                  <button
                    className="btn-types"
                    onClick={() => handleAddType("Ngôi Thứ Ba")}
                  >
                    <TypesDeleteText> Ngôi Thứ Ba </TypesDeleteText>
                  </button>
                </div>
              </div>
              <div className="hot-novel">
                {" "}
                <TitleText>Hot</TitleText>
              </div>
            </div> */}
            <div className="">
              <div style={{ WebkitOverflowScrolling: "touch" }} ontouchstart={(e) => startTouch(e)} ontouchmove={(e) => moveTouch(e)} className="overflow-x-scroll whitespace-nowrap  ">
                <div className="flex">
                  <DropdownSort
                    title="Mới đăng"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Lượt đọc"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Đánh giá"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Bình luận"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Số chương"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Cất giữ"
                    item1="Chua doc"
                    item2="da doc"
                  />
                </div>
              </div>
              <div className="novel-info">
                {/* {Listnovel &&
                  Listnovel.map((novel, index) => (
                    <CardNovelTypesSearch
                      key={index}
                      id={novel._id}
                      type={novel.types[0]}
                      nameComic={novel.title}
                      content={novel.intro}
                      auth={novel.author}
                      numStar="4"
                    />
                  ))} */}
                <CardNovelTypesSearch />
                <CardNovelTypesSearch />
                <CardNovelTypesSearch />
                <CardNovelTypesSearch />

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  else {
    return (
      <>
        <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
          <TransparentBanner>
            <ContainerPageContent>
              <div className="box-page">
                <div className="col-type">
                  <div className="choose">
                    <TitleText>Đã chọn</TitleText>
                    <div className="choosed-type">
                      {types &&
                        types.map((type, index) => (
                          <button key={index} onClick={() => handleDelete(type)} className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 my-1 bg-gray-400 text-gray-100 ">
                            <TypesDeleteText
                              key={index}
                              onClick={() => handleDelete(type)}
                            >
                              {type}
                            </TypesDeleteText>
                              <i className="fa-solid fa-xmark"></i>
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="type-choose">
                    <TitleText> Thể loại </TitleText>
                    <div className="type">
                      {typesForChoose &&
                        typesForChoose.map((type, index) => (
                          <button
                            key={index}
                            className="mx-1 rounded-sm px-2 py-1 bg-gray-400 text-gray-100  "
                            onClick={() => handleAddType(type)}
                          >
                            <TypesDeleteText>{type} </TypesDeleteText>
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="status">
                    <TitleText> Tình trạng </TitleText>
                    <div className="type">
                      <button
                        className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 "
                        onClick={() => handleAddType("Hoàn Thành")}
                      >
                        <TypesDeleteText> Hoàn Thành </TypesDeleteText>
                      </button>
                      <button
                        className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 " onClick={() => handleAddType("Đang Ra")}
                      >
                        <TypesDeleteText> Đang Ra </TypesDeleteText>
                      </button>
                    </div>
                  </div>
                  <div className="view">
                    <TitleText> Thuộc tính</TitleText>
                    <div className="type">
                      <button
                        className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 " onClick={() => handleAddType("Góc Nhìn Nam")}
                      >
                        <TypesDeleteText> Nam </TypesDeleteText>
                      </button>
                      <button
                        className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 " onClick={() => handleAddType("Góc Nhìn Nữ")}
                      >
                        <TypesDeleteText> Nữ </TypesDeleteText>
                      </button>
                      <button
                        className="flex  rounded-sm px-2 py-1 max-h-7 mx-1 bg-gray-400 text-gray-100 " onClick={() => handleAddType("Ngôi Thứ Ba")}
                      >
                        <TypesDeleteText> Ngôi Thứ Ba </TypesDeleteText>
                      </button>
                    </div>
                  </div>
                  <div className="hot-novel">
                    {" "}
                    <TitleText>Hot</TitleText>
                  </div>
                </div>
                <div className="col-sort-novel">
                  {/* <div className="sort">
                    <DropdownSort
                      title="Mới đăng"
                      item1="Chua doc"
                      item2="da doc"
                      item3="da d doc"
                    />
                    <DropdownSort
                      title="Lượt đọc"
                      item1="Chua doc"
                      item2="da doc"
                      item3="da d doc"
                    />
                    <DropdownSort
                      title="Đánh giá"
                      item1="Chua doc"
                      item2="da doc"
                      item3="da d doc"
                    />
                    <DropdownSort
                      title="Bình luận"
                      item1="Chua doc"
                      item2="da doc"
                      item3="da d doc"
                    />
                    <DropdownSort
                      title="Số chương"
                      item1="Chua doc"
                      item2="da doc"
                      item3="da d doc"
                    />
                    <DropdownSort
                      title="Cất giữ"
                      item1="Chua doc"
                      item2="da doc"
                    />
                  </div> */}
                  <div className="my-2 ml-2 pt-1   inline-flex    flex-wrap ">
                    {Listnovel &&
                      Listnovel.map((novel, index) => (
                        <CardNovelTypesSearch
                          key={index}
                          id={novel._id}
                          imageNovel={novel.coverLink}
                          nameComic={novel.title}
                          content={novel.intro}
                        />
                      ))}

                  </div>
                </div>
              </div>
            </ContainerPageContent>
            <Footer />
          </TransparentBanner>
        </ImageBanner>
      </>
    );
  }
}
export default memo(TypesPage);
