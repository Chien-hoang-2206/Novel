import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonShowAll,
  ButtonShowAllReading,
  ContainerButton,
  ContainerRow1,
  ContainerRow1Column1,
  ContainerRow1Column2,
  ContainerRow1Column3,
  ContainerRow1Column4,
  ContainerRow2Column1,
  ContainerRow2Column2,
  ContainerRow4,
  ContainerUpdate,
  ContentnerRow4Title,
  ReadingContainer,
} from "./styleHome";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import {
  AuthName,
  Heading1,
} from "../../../components/TextField/TestComponents";
import { Icon } from "@iconify/react";
import CardHomeRecomended from "../../../components/card/CardRecommemded/CardHomeRecomended";
import CardHomeReading from "../../../components/card/CardReading/CardHomeReading";
import NewUpdateRowHomeStyle from "../../../components/NewUpdateRow/NewUpdateRowHome";
import { Button } from "@mui/material";
import "./home.css";
import Footer from "../../../parts/user/footer";
import axios from "../../../api/axios";
const HomeNewNoevl_URL = "/api/novels/";

function callApiNewNovelList() {
  return axios
    .get(HomeNewNoevl_URL)
    .then((response) => {
      // console.log(response.data);
      return response.data.novelList;
    })
    .catch((error) => {
      console.log(error);
    });
}
function callApiReadingNovelList(id) {
  return axios
    .get(`http://localhost:5000/api/history/${id}`)
    .then((response) => {
      return response.data.historyList;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function HomePage(props) {
  const accID = props.accountID;
  const [newNovels, setNewNovels] = useState([]);
  const [readingNovels, setReadingNovels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newNovelList = await callApiNewNovelList();
      if (accID) {
        const readingNovelList = await callApiReadingNovelList(accID);
        console.log("truyen doc");
        console.log(readingNovels);
        setReadingNovels(readingNovelList);
      }
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);

  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
        <TransparentBanner>
          <ContainerPageContent>
            {/* Title  */}
            <ContainerRow1>
              <Row>
                <Col sm={8}>
                  <Row>
                    <ContainerRow1Column1>
                      <Heading1>Truyện mới cập nhật</Heading1>
                    </ContainerRow1Column1>
                  </Row>

                  {/* truyne moi  */}
                  <ContainerRow2Column1>
                    <ContainerButton>
                      <ButtonShowAll styled={{ maxHeight: "27px" }}>
                        <Icon icon="material-symbols:app-registration" />
                        Xem tất cả
                      </ButtonShowAll>
                    </ContainerButton>
                    {newNovels &&
                      newNovels.map((novels, index) => (
                        <CardHomeRecomended
                          key={index}
                          id={novels._id}
                          image={novels.coverLink}
                          nameComic={novels.title}
                          type1={novels.types[0]}
                          type2={novels.types[1]}
                          // type3=""
                          content={novels.intro}
                          auth={novels.author}
                        />
                      ))}
                  </ContainerRow2Column1>
                </Col>

                <Col sm={4}>
                  <Row>
                    <ContainerRow1Column3>
                      <Heading1>Đang đọc</Heading1>
                    </ContainerRow1Column3>
                  </Row>
                  {/* đang đọc  */}
                  <ReadingContainer>
                    <ContainerRow1Column4>
                      <ButtonShowAllReading
                        style={{maxHeight:"37px", paddingBottom: "-5px"}}
                        startIcon={
                          <Icon icon="material-symbols:app-registration" />
                        }
                      >
                        Xem tất cả
                      </ButtonShowAllReading>
                    </ContainerRow1Column4>
                    <ContainerRow2Column2>
                      {readingNovels &&
                        readingNovels.map((novels, index) => (
                          <CardHomeReading
                            key={index}
                            id={novels.novelId}
                            chapterID={novels.chapterId}
                            image={novels.novelInfo.coverLink}
                            nameComic={novels.novelInfo.title}
                            chaperReading={novels.chapterInfo.index}
                            chaperNum={novels.chapterInfo.index}
                          />
                        ))}
                    </ContainerRow2Column2>
                  </ReadingContainer>
                </Col>
              </Row>
            </ContainerRow1>

            {/* Moi cap nhat */}

            <ContainerUpdate>
              <Row>
                <Col sm={10}>
                  <Heading1>Mới cập nhật</Heading1>
                </Col>
                <Col sm={2}>
                  <Button
                    size="small"
                    variant="contained"
                    color="inherit"
                    startIcon={
                      <Icon icon="material-symbols:app-registration" />
                    }
                  >
                    Xem tất cả
                  </Button>
                </Col>
              </Row>
            </ContainerUpdate>

            {/* Cac truyen moi cap nhat */}
            <ContainerRow4>
              <ContentnerRow4Title>
                <Row>
                  <Col sm={2}>
                    <AuthName>Tên truyện</AuthName>
                  </Col>
                  <Col sm={2}>
                    <AuthName>Thể loại</AuthName>
                  </Col>
                  <Col sm={4}>
                    <AuthName>Chương mới nhất</AuthName>
                  </Col>
                  <Col>
                    <AuthName>Tác giả</AuthName>
                  </Col>
                  <Col sm={2}>
                    <AuthName>Thời gian</AuthName>
                  </Col>
                </Row>
              </ContentnerRow4Title>
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
              <NewUpdateRowHomeStyle />
            </ContainerRow4>
          </ContainerPageContent>
          <Footer />
        </TransparentBanner>
      </ImageBanner>
    </>
  );
}
