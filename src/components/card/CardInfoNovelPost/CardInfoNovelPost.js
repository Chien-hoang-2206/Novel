import React from 'react'
import "./file.css"
import { BtnRead, ButtonContainer, ButtonContainerPost, Col1, Col2, ColAuth, ColInfo, ColStar, ContainerCard, ContainerStar, ContainerStarIcon, ImgNovel, ImgNovelPost, NomalDiv, ReviewText, RowAuth, RowInfo, RowIntro, RowTitle, RowType } from '../CardInfoNovel/CardInFoNovelStyle';
import { AuthName, Introtext, Nomal, NovelName, TextInfoNovel } from '../../TextField/TestComponents';
import SimpleBar from 'simplebar-react';
import TransparentButton from '../../Button/TransparentButton/TransparentButton';
import "simplebar-react/dist/simplebar.min.css";

function CardInfoNovelPost(props) {
    const contentNovel = props.intro;
      const accountId = props.accountId;
      const novelId = props.IDNovel;
      const data = { accountId, novelId };
    return (
      <div>
        <ContainerCard>
          {/* image */}
          <Col1>
            <div className='blur-img' ></div>
            <ImgNovelPost src={props.srcimage}></ImgNovelPost>
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
             <SimpleBar style={{     height: "160px" }}>
                <Introtext>
                  <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
                </Introtext>
              </SimpleBar>
            </RowIntro>
  
            {/* type  */}
            <RowType>
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
  
            <ButtonContainerPost>
              <BtnRead style={{textAlign:"center"}} > Chỉnh sửa thông tin</BtnRead>
            </ButtonContainerPost>
            
          </Col2>
        </ContainerCard>
      </div>
    );
}
CardInfoNovelPost.defaultProps = {
    nameNovel: "Thieu nieen trung sinh",
    nameAuth: "Alibab",
    chaperNum: "2222",
    intro: "ssss",
    numBookmark: "999",
    numRead: "000",
    srcimage: "image/demoImg.webp",
  };
export default CardInfoNovelPost
