import React, { useState } from "react";
import {
  Content,
  Heading2,
} from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "toolcool-range-slider";

import SimpleBar from "simplebar-react";
import { ContainerInputText, InputText, NoteText, UserEditNote } from "../ReviewTab/ReviewTabStyle";
import Comment from "../../card/Comment/Comment";
import { Note } from "./CommentTabStyle";
function CommentTab() {
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
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
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
  )
}

export default CommentTab