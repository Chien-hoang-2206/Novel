import React, { useEffect } from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  ContainerCard,
  RowType,
  RowTitle,
  RowInfo,
  RowNav,
  ColInfo,
  ContainerStar,
  BtnRead,
  BtnBookmark,
  ContainerStarIcon,
  ReviewText,
  RowIntro,
  RowAuth,
  ColAuth,
  ButtonContainer,
  BtnBookmarked,
  NomalDiv,
  Col1,
  Col2,
  ImgNovel,
  ColStar,
} from "./CardInFoNovelStyle";
import ImageNovel from "../../ImageNovel/ImageNovel";
import {
  AuthName,
  Introtext,
  Nomal,
  NovelName,
  TextInfoNovel,
} from "../../TextField/TestComponents";
import TransparentButton from "./../../Button/TransparentButton/TransparentButton";

function CardInfoNovel(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const contentNovel = props.intro;
  const handleAddBookmark = () => {
    const accountId = props.accountId;
    const novelId = props.IDNovel;
    const data = { accountId, novelId };

    fetch("http://localhost:5000/api/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add bookmark");
        }
        setIsBookmarked(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDelBookmark = () => {
    const id = "643706d98989be92b3af0f7c";
    const data = { id };

    const apiUrl = `http://localhost:5000/api/bookmarks/${id}`;
    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to del bookmark");
        }
        setIsBookmarked(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ContainerCard>
        {/* image */}
        <Col1>
          <ImgNovel src={props.srcimage}></ImgNovel>
        </Col1>
        {/* info */}
        <Col2>
          {/* title   */}
          <RowTitle>
            <NovelName> {props.nameNovel} </NovelName>
          </RowTitle>
          {/* auth */}
          <RowAuth>
            <ColAuth>
              <AuthName> {props.nameAuth} </AuthName>
            </ColAuth>

            <ColStar>
              <ContainerStar>
                <ContainerStarIcon>
                  <i class="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
                  <i class="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
                </ContainerStarIcon>
                <ReviewText>4.45/5 ( 32 đánh giá) </ReviewText>
              </ContainerStar>
            </ColStar>
          </RowAuth>

          {/* intro */}
          <RowIntro>
            <SimpleBar autoHide={true} style={{ maxHeight: "190px",maxWidth: "100%"   , scrollbarWidth: "none"}}>
              <Introtext>
                <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
              </Introtext>
            </SimpleBar>
          </RowIntro>

          {/* type  */}
          <RowType style={{marginTop:"10px"}}>
            {props.types &&
              props.types.map((types, index) => (
                <TransparentButton
                  key={index}
                  title={types}
                ></TransparentButton>
              ))}
          </RowType>

          {/* info  */}
          <RowInfo>
            <ColInfo>
              <TextInfoNovel>Chương: </TextInfoNovel>

              <NomalDiv>
                <Nomal>{props.chaperNum}</Nomal>{" "}
              </NomalDiv>
            </ColInfo>

            <ColInfo>
              <TextInfoNovel>Lượt lưu: </TextInfoNovel>
              <NomalDiv>
                <Nomal>{props.numBookmark}</Nomal>{" "}
              </NomalDiv>
            </ColInfo>

            <ColInfo>
              <TextInfoNovel>Lượt đọc: </TextInfoNovel>
              <NomalDiv>
                <Nomal>{props.numRead}</Nomal>{" "}
              </NomalDiv>
            </ColInfo>
          </RowInfo>

          <ButtonContainer>
            <BtnRead>Đọc truyện</BtnRead>

            <BtnBookmarked
              onClick={isBookmarked ? handleDelBookmark : handleAddBookmark}
            >
              {isBookmarked ? "Đã lưu" : "Đánh dấu"}
            </BtnBookmarked>
          </ButtonContainer>
          
        </Col2>
      </ContainerCard>
    </div>
  );
}
CardInfoNovel.defaultProps = {
  nameNovel: "Thieu nieen trung sinh",
  nameAuth: "Alibab",
  chaperNum: "2222",
  intro: "ssss",
  numBookmark: "999",
  numRead: "000",
  srcimage: "image/demoImg.webp",
};
export default CardInfoNovel;
