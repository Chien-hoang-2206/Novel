import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Col1,
  Col2,
  Col2Row2,
  Container2,
  ContainerTab1,
  InfoCol2,
  NewChapterLink,
  Row1,
  Row2,
  Row2Icon,
  Row3,
  Row4,
} from "./IntroduceTabStyle";
import {
  Content,
  ContentNovelTab,
  Heading2,
  Nomal,
  NumFeeling,
  TabName,
  TextCenter,
  TextInfoNovel,
} from "../../TextField/TestComponents";
import Avatar from "../../Avatar/Avatar";
import Carosel from "../../Carosel/Carosel";
function IntroduceTab() {
  return (
    <div>
      <ContainerTab1>
        <Col1 sm={8}>
          <Row1>
            <ContentNovelTab>
              Nomal Cầu tiến vào linh khí khôi phục thời đại, nhân loại mở ra dị
            </ContentNovelTab>
          </Row1>
          <Row2>
            <Heading2>Cảm xúc</Heading2>
            <Container2>
              <Row2Icon>
                😍 <NumFeeling>1539</NumFeeling>{" "}
              </Row2Icon>
              <Row2Icon>
                👍 <NumFeeling>1539</NumFeeling>{" "}
              </Row2Icon>
              <Row2Icon>
                😆 <NumFeeling>1539</NumFeeling>{" "}
              </Row2Icon>
              <Row2Icon>
                😢 <NumFeeling>1539</NumFeeling>{" "}
              </Row2Icon>
            </Container2>
          </Row2>
          <Row3>
            <Heading2>Chương mới</Heading2>
            <Container2>
              <NewChapterLink to="/home">
                <Nomal>Chương 3037: Không hiểu phẫn nộ!</Nomal>
              </NewChapterLink>
            </Container2>
          </Row3>
        </Col1>
        <Col2 sm={4}>
          <Avatar src="favicon.ico" />
          <InfoCol2>
            <Row>
              <Col2Row2>
                <i
                  class="fa-sharp fa-solid fa-book fa-2xl"
                  style={{ paddingLeft: "4vh" }}
                ></i>
                <TextInfoNovel style={{ paddingTop: "4vh" }}>
                  Số truyện
                </TextInfoNovel>
                <TextInfoNovel style={{ marginTop: "-8vh" }}> 122</TextInfoNovel>
              </Col2Row2>
              <Col2Row2>
              <i class="fa-solid fa-list fa-2xl" style={{ paddingLeft: "4vh" }}></i>
                <TextInfoNovel style={{ paddingTop: "4vh" }}>
                  Số Chương
                </TextInfoNovel>
                <TextInfoNovel style={{ marginTop: "-8vh" }}> 122</TextInfoNovel>
              </Col2Row2>
              <Col2Row2>
                <i
                  class="fa-solid fa-crown fa-2xl"
                  style={{ paddingLeft: "4vh" }}
                ></i>
                <TextInfoNovel style={{ paddingTop: "4vh" }}>
                 Cấp
                </TextInfoNovel>
                <TextInfoNovel style={{ marginTop: "-8vh" }}> 122</TextInfoNovel>
              </Col2Row2>
            </Row>
          </InfoCol2>
          
        </Col2>
      </ContainerTab1>

    </div>
  );
}

export default IntroduceTab;
