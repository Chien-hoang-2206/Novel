import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
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
  return (
    <div>
      <ContainerCard>
        <Row>
          <Col xs={3} md={3}>
            <ImageNovel src={props.src} width={"40vh"} height={"55vh"} />
          </Col>
          <Col xs={3} md={9}>
            <RowTitle sm={2}>
              <NovelName> {props.nameNovel} </NovelName>
            </RowTitle>
            <RowAuth sm={2}>
              <ColAuth sm={3}>
                <AuthName> {props.nameAuth} </AuthName>
              </ColAuth>
              <Col sm={8}>
                <ContainerStar>
                  <ContainerStarIcon>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ecf000" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ecf000" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ecf000" }}
                    ></i>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "#ecf000" }}
                    ></i>
                  </ContainerStarIcon>
                  <ReviewText>4.45/5 ( 32 đánh giá) </ReviewText>
                </ContainerStar>
              </Col>
            </RowAuth>
            <RowIntro>
              <SimpleBar style={{ maxHeight: "15vh" }}>
                <Introtext>
                Nomal Cầu tiến vào linh khí khôi phục thời đại, nhân loại mở ra
                dị năng thức tỉnh! Giang Nam bắt đầu thức tỉnh mạnh nhất hàng
                vỉa hè hệ thống, đại lực nước thuốc? Giải độc đậu nành nhỏ? May
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến
                đây cầu mua. Giang Nam: "Ta đối với tiền ức điểm đều không có
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến
                đây cầu mua. Giang Nam: "Ta đối với tiền ức điểm đều không có
                hứng thú! Ta chỉ muốn hố ngạch, ta nguyện vọng là hòa bình thế
                giới!" ~~~~~~~~~~~~~~~~~~~~~~~ truyện đã hơn 1k9 chương, cầu
                tặng hoa,cầu ném gạch lấy động lực ra chương （づ￣3￣）づ╭❤～
              </Introtext>
              </SimpleBar>
            </RowIntro>
            <RowType sm={5}>
              <TransparentButton title={props.type1}></TransparentButton>
              <TransparentButton title=" Huyen"></TransparentButton>
              <TransparentButton title="Huyen Huyen"></TransparentButton>
              <TransparentButton title="Huyen Huyen"></TransparentButton>
            </RowType>
            <RowInfo>
              <ColInfo>
                <Nomal>{props.chaperNum}</Nomal>
                <TextInfoNovel>Chương</TextInfoNovel>
              </ColInfo>
              <ColInfo>
                <Nomal>{props.numRead}</Nomal>
                <TextInfoNovel>Lượt lưu</TextInfoNovel>
              </ColInfo>
              <ColInfo>
                <Nomal>{props.numBookmark}</Nomal>
                <TextInfoNovel>Lượt đọc</TextInfoNovel>
              </ColInfo>
            </RowInfo>
            <RowNav>
             <ButtonContainer>
                <BtnRead>Đọc truyện</BtnRead>
                <BtnBookmark>Đánh dấu</BtnBookmark>
             </ButtonContainer>
            </RowNav>
          </Col>
        </Row>
      </ContainerCard>
    </div>
  );
}
CardInfoNovel.defaultProps = {
  nameNovel: "Thieu nieen trung sinh",
  nameAuth: "Alibab",
  chaperNum: "2222",
  type1: "Huyen ",
  numBookmark: "302",
  numRead: "302",
  srcimage: "image/demoImg.webp",
};
export default CardInfoNovel;
