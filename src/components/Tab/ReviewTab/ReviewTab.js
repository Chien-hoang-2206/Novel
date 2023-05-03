import React, { useEffect, useState } from "react";
import {
  AuthName,
  Content,
  Heading2,
  NumFeeling,
  NumFeelingMObile,
} from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "toolcool-range-slider";
import "./btnReviewTab.css";
import {
  ContainerInputText,
  InputText,
  Note,
  NoteText,
  NumverSlide,
  R1Note,
  UserEditNote,
} from "./ReviewTabStyle";
import Review from "../../card/Review/Review";
import SimpleBar from "simplebar-react";

import axios from "../../../api/axios";
const AddReview_URL = "/api/reviews/";

function ReviewTab(props) {
  const accID = props.accountId;
  const novelID = props.novelID;
  const reviewList = props.reviewList;
  // console.log(reviewList);
  const [value11, setValue11] = useState(5);
  const [value2, setValue2] = useState(5);
  const [value3, setValue3] = useState(5);
  const [starReview, setstarReview] = useState(0);
  const [reload, setReload] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleRangeChange(event) {
    setValue11(event.target.value);
  }
  function handleChangeSlide2(event) {
    setValue2(event.target.value);
  }

  function handleChangeSlide3(event) {
    setValue3(event.target.value);
  }
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // function countStar() {
  //   const totalValue = parseInt(value11) + parseInt(value2) + parseInt(value3);
  //   const newStarReview = totalValue / 300.0 * 5;
  //   setstarReview(newStarReview);
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(accID, novelID, value11,value2,value3,inputValue);
    axios
      .post(AddReview_URL, {
        tinhCachNhanVat: value11,
        noiDungCotTruyen: value2,
        boCucTheGioi: value3,
        content: inputValue,
        novelId: novelID,
        accountId: accID,
      })
      .then((response) => {
        // console.log(response.data)
        if (response.data) {
          // Đăng nhập thành công, chuyển hướng đến trang chủ và lưu iduser vào cookies hoặc session
          // ReloadNavBar;
          setReload(true);
          console.log(response.data)
          alert('Cảm ơn bạn đã chia sẻ đánh giá');
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert('Đăng đánh giá không thành công');
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert('Bạn chỉ có thể đánh giá một lần ');
      });
  };
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768) {
    return (
      <>
        <div key={reload}>
            <form onSubmit={handleSubmit}  >
              <UserEditNote className="mx-auto">
                <div className="flex w-11/12  items-center bg-yellow-100  mx-auto my-2 h-10">
                  <div className="w-6/12 items-center">
                    <p className="text-xs font-sans px-1">Tính cách nhân vật</p>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value11}
                      onChange={handleRangeChange}
                      className="mt-1 w-10/12"
                    />
                    <NumFeelingMObile> {value11} </NumFeelingMObile>
                  </div>
                </div>
                <div className="flex  w-11/12 items-center bg-yellow-100 mx-auto my-2 h-10">
                  <div className="w-6/12 items-center">
                    <p className="text-xs font-sans px-1">Nội dung cốt truyện</p>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value2}
                      onChange={handleChangeSlide2}
                      className="mt-1 w-10/12"
                    />
                    <NumFeelingMObile> {value2} </NumFeelingMObile>
                  </div>
                </div>
                <div className="flex  w-11/12 items-center bg-yellow-100  mx-auto  my-2 h-10">
                  <div className="w-6/12 items-center">
                    <p className="text-xs font-sans px-1">Bó cục thế giới</p>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value3}
                      onChange={handleChangeSlide3}
                      className="mt-1 w-10/12"
                    />
                    <NumFeeling> {value3} </NumFeeling>
                  </div>
                </div>

                <textarea
                  className="flex  w-11/12  mx-auto rounded-md h-20  py-2 px-2"
                  type="text"
                  // value=""
                  placeholder="Nhập đánh giá về bộ truyện của bạn"
                  onChange={handleInputChange}
                ></textarea>
                <button class="cssbuttons-io " style={{ top: -40, left: 640 }} type="submit">
                  <span>
                    Đăng
                  </span>
                </button>
              </UserEditNote>
            </form>

            <div className="px-2 " style={{marginTop: -100}}>
              <p className="font-bold text-2xl ">Đánh Giá Khác</p>
              <SimpleBar style={{ maxHeight: "90vh" }}>
              {reviewList &&
                reviewList.map((review, index) => (
                  <Review
                    username={review.accountInfo.name}
                    star="4"
                    date="2"
                    chapterRead="1"
                    content={review.content}
                    like="1"
                    reply="1"
                    report
                  />
                ))
              }
            </SimpleBar>
            </div>
            {/* Review  */}
        </div>
      </>
    );
  }
  else {
    return (
      <>

        <Row key={reload}>
          <Col sm={9}>
            <form onSubmit={handleSubmit}  >
              <UserEditNote className="mx-auto">
                <div className="flex w-11/12  items-center bg-yellow-100  mx-auto my-2 h-10">
                  <div className="w-1/12 pl-3  justify-center items-center">
                    <i class="fa-solid fa-dragon"></i>
                  </div>
                  <div className="w-6/12 items-center">
                    <AuthName>Tính cách nhân vật</AuthName>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value11}
                      onChange={handleRangeChange}
                      className="mt-1 w-10/12"
                    />
                    <NumFeeling> {value11} </NumFeeling>
                  </div>
                </div>
                <div className="flex  w-11/12 items-center bg-yellow-100 mx-auto my-2 h-10">
                  <div className="w-1/12 pl-3  justify-center items-center">
                    <i class="fa-solid fa-dragon"></i>
                  </div>
                  <div className="w-6/12 items-center">
                    <AuthName>Nội dung cốt truyện</AuthName>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value2}
                      onChange={handleChangeSlide2}
                      className="mt-1 w-10/12"
                    />
                    <NumFeeling> {value2} </NumFeeling>
                  </div>
                </div>
                <div className="flex  w-11/12 items-center bg-yellow-100  mx-auto  my-2 h-10">
                  <div className="w-1/12 pl-3  justify-center items-center">
                    <i class="fa-solid fa-dragon"></i>
                  </div>
                  <div className="w-6/12 items-center">
                    <AuthName>Bố cục thế giới</AuthName>
                  </div>
                  <div className="w-6/12 flex">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={value3}
                      onChange={handleChangeSlide3}
                      className="mt-1 w-10/12"
                    />
                    <NumFeeling> {value3} </NumFeeling>
                  </div>
                </div>

                <textarea
                  className="flex  w-11/12  mx-auto rounded-md h-20  py-2 px-2"
                  type="text"
                  // value=""
                  placeholder="Nhập đánh giá về bộ truyện của bạn"
                  onChange={handleInputChange}
                ></textarea>
                <button class="cssbuttons-io " style={{ top: -40, left: 640 }} type="submit">
                  <span>
                    Đăng
                  </span>
                </button>
              </UserEditNote>
            </form>

            {/* Review  */}
            <SimpleBar style={{ maxHeight: "90vh" , marginTop: -100 }}>
              {reviewList &&
                reviewList.map((review, index) => (
                  <Review
                    username={review.accountInfo.name}
                    star="4"
                    date="2"
                    chapterRead="1"
                    content={review.content}
                    like="1"
                    reply="1"
                    report
                  />
                ))
              }
            </SimpleBar>
          </Col>
          <Col sm={3}>
            <Heading2>
              {" "}
              <i class="fa-solid fa-triangle-exclamation"></i> Lưu ý khi đánh giá !
            </Heading2>
            <Note>
              <NoteText>
                <Content>1. Elit dolor laboris nulla eiusmod duis.</Content>
                <Content>2. Elit dolor laboris nulla eiusmod duis.</Content>
                <Content>3. Elit dolor laboris nulla eiusmod duis.</Content>
                <Content>4. Elit dolor laboris nulla eiusmod duis.</Content>
              </NoteText>
            </Note>
          </Col>
        </Row>
      </>
    );
  }
}
export default ReviewTab;
