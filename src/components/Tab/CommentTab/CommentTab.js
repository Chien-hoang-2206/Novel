import React from "react";
import {
  Content,
  Heading2,
} from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "toolcool-range-slider";

import SimpleBar from "simplebar-react";
import {  NoteText} from "../ReviewTab/ReviewTabStyle";
import Comment from "../../card/Comment/Comment";
import { Note } from "./CommentTabStyle";
function CommentTab() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768) {
    return (
      <Row>
        <Col sm={9}>
          <div className="commentRD">
            <div className="px-2">
              <Heading2>Bình luận</Heading2>
            </div>

            <form method="post">
              <textarea className="inputRD"
                name="message"
                placeholder="Chia sẻ bình luận của bạn về truyện .... "
              ></textarea>
              <div className="submitCMT">
                <button  style={{ position: "relative", left: 280 }}  type="submit">
                  <span>
                    Đăng
                  </span>
                </button>
              </div>

            </form>
            <div className="comments">
              <SimpleBar style={{ maxHeight: "70vh" }}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </SimpleBar>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
  else {
    return (
      <Row>
        <Col sm={9}>
          <div className="commentRD">
            <div className="px-2">
              <Heading2>Bình luận</Heading2>
            </div>

            <form method="post">
              <textarea className="inputRD"
                name="message"
                placeholder="Chia sẻ bình luận của bạn về truyện .... "
              ></textarea>
              <div className="submitCMT">
                <button className="cssbuttons-io" style={{ top: -10, left: 640 }} type="submit">
                  <span>
                    Đăng
                  </span>
                </button>
              </div>

            </form>
            <div className="comments">
              <SimpleBar style={{ maxHeight: "70vh" }}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </SimpleBar>
            </div>
          </div>
        </Col>
        <Col sm={3}>
          <Heading2>
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
}

export default CommentTab