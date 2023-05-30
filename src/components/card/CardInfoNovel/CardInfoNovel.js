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
  BtnReadMobile,
  BtnBookmarkedMobile,
} from "./CardInFoNovelStyle";
import ImageNovel from "../../ImageNovel/ImageNovel";
import {
  AuthName,
  Introtext,
  Nomal,
  NovelName,
  TextInfoNovel,
  TypesDeleteText,
} from "../../TextField/TestComponents";

function CardInfoNovel(props) {
  const [isBookmarked, setIsBookmarked] = useState(props.bookmark);

  console.log(isBookmarked);
  const contentNovel = props.intro;
  const [width, setWidth] = React.useState(window.innerWidth);

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
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768)
    return (
      <div className="my-4">
        <p className="text-2xl w-4/6 mx-auto  text-center font-serift font-extrabold">{props.nameNovel}</p>
        <div className="w-2/4 h-56 mx-auto my-2">
          <img className="border-2 border-slate-400 rounded-lg shadow-md object-fill h-56 mx-auto w-3/4  " src={props.srcimage}></img>
        </div>
        <div className="px-3 align-middle  justify-center">
          <div className="flex selection: ">
            <p className="w-2/4 text-lg font-bold " > Tác giả: </p>
            <p className="w-2/4  flex " >  {props.nameAuth} </p>
          </div>
          <div className="flex  justify-center">
            <p className="w-2/4 text-lg font-bold " > Tình trạng: </p>
            <p className="w-2/4 flex " >  Đang tiến hành  </p>
          </div>
          <div className="flex ">
            <p className="w-2/4 text-lg font-bold " > Thê loại: </p>
            <p className="w-2/4 flex mr-1" >
              {props.types &&
                props.types.map((type, index) => (
                  <button key={index} className='mx-1 hover:bg-slate-400 hover:text-white '>
                    <TypesDeleteText>{type}</TypesDeleteText>
                  </button>
                ))} </p>
          </div>
          <div className="flex  ">
            <p className="w-2/4 text-lg font-bold " > Lượt đánh dấu: </p>
            <p className="w-2/4   flex " >  {props.numBookmark}  </p>
          </div>

          <div className="flex mx-auto w-3/4 justify-center">
            <BtnReadMobile>Đọc truyện</BtnReadMobile>
            <BtnBookmarkedMobile
              onClick={isBookmarked ? handleDelBookmark : handleAddBookmark}
            >
              {isBookmarked ? "Đã lưu" : "Đánh dấu"}
            </BtnBookmarkedMobile>
          </div>
          <div className="" >
            <p className="font-bold text-xl "> Nội dung</p>
            <SimpleBar autoHide={true} style={{ padding: "5px 5px", maxHeight: 160, maxWidth: "100%", scrollbarWidth: "none" }}>
              <Introtext>
                <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
              </Introtext>
            </SimpleBar>
          </div>
        </div>

      </div>
    )
  else
    return (
      <div>
        <ContainerCard>
          {/* image */}
          <Col1>
            <ImgNovel style={{ margin: "10px 10px" }} src={props.srcimage}></ImgNovel>
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
              <SimpleBar autoHide={true} style={{ maxHeight: "160px", maxWidth: "100%", scrollbarWidth: "none" }}>
                <Introtext>
                  <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
                </Introtext>
              </SimpleBar>
            </RowIntro>

            {/* type  */}
            <RowType style={{ marginTop: "10px" }}>
              {props.types &&
                props.types.map((type, index) => (
                  <button key={index} className='rounded-md px-1 bg-slate-300 hover:bg-slate-400 hover:text-white mx-2'>
                    <TypesDeleteText>{type}</TypesDeleteText>
                  </button>
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
