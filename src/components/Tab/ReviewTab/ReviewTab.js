import React, { useEffect, useState } from "react";
import {
  AuthName,
  Content,
  Heading2,
  NumFeeling,
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
  const accID= props.accountId;
  const novelID= props.novelID;
  const reviewList= props.reviewList;
  // console.log(reviewList);
  const [value11, setValue11] = useState(5);
  const [value2, setValue2] = useState(5);
  const [value3, setValue3] = useState(5);
  const [starReview, setstarReview] = useState(0);
  const [reload, setReload] = useState(false);

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
        boCucTheGioi: value3 , 
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
  return (
    <> 

    <Row key={reload}>
      <Col sm={9}>
        <form onSubmit={handleSubmit}>
          <UserEditNote>
            <R1Note>
              <Col sm={1} style={{ margin: "auto 1vh" }}>
                <i class="fa-solid fa-dragon"></i>
              </Col>
              <Col sm={3} style={{ paddingTop: "1.1rem" }}>
                <AuthName>Tính cách nhân vật</AuthName>
              </Col>
              <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={value11}
                  onChange={handleRangeChange}
                  style={{ width: "100vh", height: "5vh", marginTop: "-1vh" }}
                />
                <NumFeeling> {value11} </NumFeeling>
              </Col>
            </R1Note>

            <R1Note>
              <Col sm={1} style={{ margin: "auto 1vh" }}>
                <i class="fa-solid fa-dragon"></i>
              </Col>
              <Col sm={3} style={{ paddingTop: "0.9rem" }}>
                <AuthName>Nội dung cốt truyện</AuthName>
              </Col>
              <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={value2}
                  onChange={handleChangeSlide2}
                  style={{ width: "100vh", height: "5vh", marginTop: "-1vh" }}
                />
                <NumFeeling> {value2} </NumFeeling>
              </Col>
            </R1Note>

            <R1Note>
              <Col sm={1} style={{ margin: "auto 1vh" }}>
                <i class="fa-solid fa-dragon"></i>
              </Col>
              <Col sm={3} style={{ paddingTop: "1.1rem" }}>
                <AuthName>Bố cục thế giới</AuthName>
              </Col>
              <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={value3}
                  onChange={handleChangeSlide3}
                  style={{ width: "100vh", height: "5vh", marginTop: "-1vh" }}
                />
                <NumFeeling> {value3} </NumFeeling>
              </Col>
            </R1Note>

            <ContainerInputText>
              <InputText>
                <textarea
                  style={{
                    height: "116px",
                    width: "784px",
                    marginLeft: "-3vh",
                    paddingBottom: "20px",
                    paddingLeft: "10px",
                    overflowWrap: "break-word",
                    border: "none",
                  }}
                  type="text"
                  // value=""
                  placeholder="Nhập đánh giá về bộ truyện của bạn"
                  onChange={handleInputChange}
                ></textarea>
              </InputText>
              <button class="cssbuttons-io" type="submit">
                <span>
                   Đăng
                </span>
              </button>
            </ContainerInputText>
          </UserEditNote>
        </form>

        {/* Review  */}
        <SimpleBar style={{ maxHeight: "90vh" }}>
          {reviewList &&
          reviewList.map((review,index) => (
            <Review
            username= {review.accountInfo.name}
            star= "4"
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

export default ReviewTab;
