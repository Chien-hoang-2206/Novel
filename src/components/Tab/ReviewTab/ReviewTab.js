import React, { useState } from "react";
import {
  AuthName,
  Content,
  Heading2,
  NumFeeling,
} from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "toolcool-range-slider";
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
function ReviewTab() {
  const [value, setValue] = useState(50);
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    console.log("Button clicked!");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Row>
      <Col sm={9}>
        <UserEditNote>
          <R1Note>
            <Col sm={1} style={{ margin: "auto 1vh" }}>
              <i class="fa-solid fa-dragon"></i>
            </Col>
            <Col sm={3} style={{ paddingTop: "1.1rem" }}>
              <AuthName>Tính cách nhân vật</AuthName>
            </Col>
            <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
              <toolcool-range-slider
                slider-width="170vh"
                min="-100"
                max="100"
                value="50"
              ></toolcool-range-slider>
              <NumverSlide>
                <NumFeeling> {value} </NumFeeling>
              </NumverSlide>
            </Col>
          </R1Note>

          <R1Note>
            <Col sm={1} style={{ margin: "auto 1vh" }}>
              <i class="fa-solid fa-dragon"></i>
            </Col>
            <Col sm={3} style={{ paddingTop: "1.1rem" }}>
              <AuthName>Tính cách nhân vật</AuthName>
            </Col>
            <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
              <toolcool-range-slider
                slider-width="170vh"
                min="-100"
                max="100"
                value="50"
              ></toolcool-range-slider>
              <NumverSlide>
                <NumFeeling> {value} </NumFeeling>
              </NumverSlide>
            </Col>
          </R1Note>

          <R1Note>
            <Col sm={1} style={{ margin: "auto 1vh" }}>
              <i class="fa-solid fa-dragon"></i>
            </Col>
            <Col sm={3} style={{ paddingTop: "1.1rem" }}>
              <AuthName>Tính cách nhân vật</AuthName>
            </Col>
            <Col sm={7} style={{ paddingTop: "1.4rem", display: "flex" }}>
              <toolcool-range-slider
                slider-width="170vh"
                min="-100"
                max="100"
                value="50"
                style={{ overflow: "hidden", PointerEvent: "none" }}
              ></toolcool-range-slider>
              <NumverSlide>
                <NumFeeling> {value} </NumFeeling>
              </NumverSlide>
            </Col>
          </R1Note>

          <ContainerInputText>
            <InputText>
              <input
                style={{
                  height: "15vh",
                  width: "121vh",
                  marginLeft: "-3vh",
                }}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              ></input>

            </InputText>
          </ContainerInputText>
        </UserEditNote>

        {/* Review  */}
        <SimpleBar style={{ maxHeight: "85vh" }}>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
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
  );
}

export default ReviewTab;
