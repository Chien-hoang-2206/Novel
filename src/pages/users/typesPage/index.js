import { memo, useEffect, useState } from "react";
import "./typeSearch.css";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import Footer from "../../../parts/user/footer";
import {
  Heading1,
  Heading2,
  TitleText,
  TypesDeleteText,
} from "../../../components/TextField/TestComponents";
import DropdownSort from "../../../components/Dropdown/DropdownSort/DropdownSort";
import CardNovelTypesSearch from "../../../components/card/CardNovelTypesSearch/CardNovelTypesSearch";

import axios from "../../../api/axios";
import { Axios } from "axios";
const TypesNovelURL = "/api/novels/types";

function TypesPage() {
  const [types, setTypes] = useState([]);
  const [typesForChoose, setTypeForChoose] = useState([
    "Tiên Hiệp",
    "Kiếm Hiệp",
    "Huyễn Huyền",
    "Vô Địch",
    "Điềm Đạm",
    "Tưởng Tu",
    "Nhẹ Nhàng",
    "Đô Thị",
    "Dị Giới",
  ]);
  const [Listnovel, setListnovel] = useState();

  const handleAddType = (choose) => {
    const newTypes = [...types, choose];
    setTypes((types) => {
      axios
        .post(TypesNovelURL, {
          types: newTypes,
        })
        .then((response) => {
          if (response.data) {
            setListnovel(response.data.novelSameTypes);
          } else {
            // Đăng nhập thất bại, hiển thị thông báo lỗi
            alert("Hệ thống đang bị lỗi, vui lòng thử lại sau.");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
      return newTypes;
    });
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

  function callApiSearchTypeNovel() {}

  return (
    <>
      <ImageBanner style={{ backgroundImage:  "url('/bgBanner.jpg')" }}>
        <TransparentBanner>
          <ContainerPageContent>
            <div className="box-page">
              <div className="col-type">
                <div className="choose">
                  <TitleText>Đã chọn</TitleText>
                  <div className="choosed-type">
                    {types &&
                      types.map((type, index) => (
                        <button className="btn-choosed-types">
                          <TypesDeleteText
                            key={index}
                            onClick={() => handleDelete(type)}
                          >
                            {type}
                          </TypesDeleteText>
                          <button className="btn-delete">
                            <i class="fa-solid fa-xmark"></i>
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
                          className="btn-types"
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
              </div>
              <div className="col-sort-novel">
                <div className="sort">
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
                <div className="novel-info">
                  {Listnovel &&
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
export default memo(TypesPage);
