import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
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
} from "./styleHome";
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
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";

import Axios from "axios";
export default function HomePage() {
  const [novels, setNovels] = useState();
  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/api/novels/");
    setNovels(response.data.novelList);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(novels);

  // const novel = novels.slice(0, 3);
  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('image/bgBanner.jpg')" }}>
        <TransparentBanner>
          <ContainerPageContent>
            {/* Title  */}
            <ContainerRow1>
              <Row>
                <Col sm={8}>
                  <Row>
                    <ContainerRow1Column1>
                      <Col sm={9}>
                        <Heading1>Truyện mới cập nhật</Heading1>
                      </Col>
                      <Col sm={3}>
                        <ContainerRow1Column2>
                          <Button
                            size="small"
                            variant="outline"
                            color="inherit"
                            startIcon={
                              <Icon icon="material-symbols:app-registration" />
                            }
                          >
                            Xem tất cả
                          </Button>
                        </ContainerRow1Column2>
                      </Col>
                    </ContainerRow1Column1>
                  </Row>

                  {/* truyne moi  */}
                  <ContainerRow2Column1>
                   
                    {novels &&
                      novels.map((novels,index) => (
                        <CardHomeRecomended
                          key={index}
                          image={novels.coverLink}
                          nameComic={novels.title}
                          type1={novels.types[0]}
                          type2={novels.types[1]}
                          // type3=""
                          content={novels.intro}
                          auth={novels.author}
                          numStar="4"
                        />
                      ))}
                      <CardHomeRecomended/>
                  </ContainerRow2Column1>
                </Col>
                <Col sm={4}>
                  <Row>
                    <ContainerRow1Column3>
                      <Col sm={7}>
                        <Heading1>Đang đọc</Heading1>
                      </Col>
                      <Col sm={6}>
                        <ContainerRow1Column4>
                          <Button
                            size="small"
                            variant="outline"
                            color="inherit"
                            startIcon={
                              <Icon icon="material-symbols:app-registration" />
                            }
                          >
                            Xem tất cả
                          </Button>
                        </ContainerRow1Column4>
                      </Col>
                    </ContainerRow1Column3>
                  </Row>
                  {/* đang đọc  */}
                  <Row>
                    <ContainerRow2Column2>
                    {novels &&
                      novels.map((novels,index) => (
                      <CardHomeReading
                        key={index}
                        image={novels.coverLink}
                        nameComic={novels.title}
                        chaperReading="2"
                        chaperNum="2222"
                      />
                      ))}
                    
                    </ContainerRow2Column2>
                  </Row>
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
