import React, { useEffect } from "react";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "react-quill/dist/quill.snow.css";
import {
  ContainerCard,
  RowType,
  RowTitle,
  RowInfo,
  ColInfo,
  ContainerStar,
  BtnRead,
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
import {
  AuthName,
  Introtext,
  Nomal,
  NovelName,
  TextInfoNovel,
  TypesDeleteText,
} from "../../TextField/TestComponents";
import factories from "../../../redux/app/factory";
import ButtonType from "../../button/ButtonChoosedType/ButtonChoosedType";
import { useNavigate } from "react-router-dom";

function CardInfoNovel(props) {
  const [isBookmarked, setIsBookmarked] = useState();
  const [width, setWidth] = React.useState(window.innerWidth);
  const accountID = sessionStorage.getItem("accID") || "";

  useEffect(()=>{
    setIsBookmarked(props.isBookmark)
  },[props.isBookmark])
  async function fetchDataAdd(data) {
    const reps = await factories.addBookmark(data);
    if (reps?.newBookmark?.accountId){
      setIsBookmarked(true);
    }
  }
  
  const handleAddBookmark = () => {
    const accountId = props.accountId;
    const novelId = props.IDNovel;
    const data = { accountId, novelId };
    fetchDataAdd(data);
  };

  const handleDelBookmark = async () => {
    const reps = await factories.deleteBookmark(accountID,props?.IDNovel);
    console.log("🚀 ~ file: CardInfoNovel.js:63 ~ handleDelBookmark ~ reps:", reps)
    if (reps?.deleteBookmark?.accountId){
      setIsBookmarked(false);
    }
  };
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navigator = useNavigate();
  function handleChapter() {
    navigator(`/novel/chapter/${props?.firstChapter}`, {
      state: { chapterId: props?.nameNovel, novelId: props.IDNovel, accountId: props?.accountId },
    });
  }
  return (
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

        {/* type  */}
        <RowType style={{ marginTop: "10px" }}>
          {props.types &&
            props.types.map((type, index) => (
              <ButtonType key={type.id || index}>{type}</ButtonType>
            ))}
        </RowType>

        {/* info  */}
        <RowInfo style={{ height: 80 }}>
          <ColInfo>
            <TextInfoNovel>Chương </TextInfoNovel>
            <NomalDiv>
              <Nomal>{props.chaperNum}</Nomal>{" "}
            </NomalDiv>
          </ColInfo>
          <ColInfo>
            <TextInfoNovel>Lượt lưu </TextInfoNovel>
            <NomalDiv>
              <Nomal>{'12322'}</Nomal>{" "}
            </NomalDiv>
          </ColInfo>
          <ColInfo>
            <TextInfoNovel>Lượt đọc</TextInfoNovel>
            <NomalDiv>
              <Nomal>{'232332'}</Nomal>{" "}
            </NomalDiv>
          </ColInfo>
        </RowInfo>

        <RowAuth>
          <ContainerStar>
            <ContainerStarIcon>
              <i className="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ecf000" }}></i>
            </ContainerStarIcon>
            <ReviewText>4.45/5 ( 32 đánh giá) </ReviewText>
          </ContainerStar>
          <ColAuth>
            <AuthName> Tác giả: {props.nameAuth} </AuthName>
          </ColAuth>
        </RowAuth>


        {/* intro */}
        {/* <RowIntro>
          <SimpleBar autoHide={true} style={{ maxHeight: "160px", maxWidth: "100%", scrollbarWidth: "none" }}>
            <Introtext>
              <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
            </Introtext>
          </SimpleBar>
        </RowIntro> */}
        <ButtonContainer>
          <BtnRead onClick={handleChapter}>Đọc truyện</BtnRead>
          <BtnBookmarked
            onClick={isBookmarked ? handleDelBookmark : handleAddBookmark}
          >
            {isBookmarked ? "Đã lưu" : "Đánh dấu"}
          </BtnBookmarked>
        </ButtonContainer>

      </Col2>
    </ContainerCard>
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
  firstChapter: '',
};
export default CardInfoNovel;
