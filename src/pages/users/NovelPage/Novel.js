import React from "react";
import { useState } from "react";
import BannerImage from "../../../parts/user/BannerImage/BannerImage";
import {
  Col2,
  Col2Row2,
  ColAuthFixed,
  ContainerColAuth,
  ContainerInfo,
  ContainerPageContent,
  ContainerTabs,
  ImageBanner,
  InfoCol2,
  TransparentBanner,
} from "./NovelElement";
import CardInfoNovel from "../../../components/card/CardInfoNovel/CardInfoNovel";
import Footer from "../../../parts/user/footer";
import "./Tabs.css";
import {
  TabName,
  TextInfoNovel,
  TextNumInfoNovel,
} from "../../../components/TextField/TestComponents";
import IntroduceTab from "../../../components/Tab/IntroduceTab/IntroduceTab";
import ReviewTab from "../../../components/Tab/ReviewTab/ReviewTab";
import ListChapterTab from "../../../components/Tab/ListChapterTab/ListChapterTab";
import CommentTab from "../../../components/Tab/CommentTab/CommentTab";
import Carosel from "./../../../components/Carosel/Carosel";
import Row from "react-bootstrap/Row";
import Avatar from "../../../components/Avatar/Avatar";
function Novel() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <ImageBanner style={{ backgroundImage: "url('image/bgBanner.jpg')" }}>
        <TransparentBanner>
          <ContainerPageContent>
            <ContainerInfo>
              <CardInfoNovel />
            </ContainerInfo>
            <Row>
              <ContainerTabs sm={9}>
                <div className="containerTabs">
                  <div className="bloc-tabs">
                    <buttonTabs
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      <TabName>Danh sách chương</TabName>
                    </buttonTabs>
                    <buttonTabs
                      className={
                        toggleState === 2 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      <TabName>Đánh giá</TabName>
                      <div className="number-border">25</div>
                    </buttonTabs>
                    <buttonTabs
                      className={
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      <TabName>Bình luận</TabName>
                      <div className="number-border">3037</div>
                    </buttonTabs>
                  </div>

                  <div className="content-tabs">
                    <div
                      className={
                        toggleState === 1
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <ListChapterTab
                        chapters={[
                          {
                            id: 1,
                            chapterNumber: "1",
                            chapterTitle: "Năm nay  122",
                            dateUpload: "5",
                          },
                          {
                            id: 2,
                            chapterNumber: "2",
                            chapterTitle: "Duong khai đại chiến mèo boi",
                            dateUpload: "2",
                          },
                        ]}
                      />
                    </div>

                    <div
                      className={
                        toggleState === 2
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <ReviewTab />
                    </div>

                    <div
                      className={
                        toggleState === 3
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <CommentTab />
                    </div>
                  </div>
                </div>
              </ContainerTabs>
              <ContainerColAuth sm={3}>
                <ColAuthFixed>
                <Avatar src="favicon.ico" />
                <InfoCol2>
                  <Row>
                    <Col2Row2>
                      <i
                        class="fa-sharp fa-solid fa-book fa-2xl"
                        style={{ paddingLeft: "4vh" }}
                      ></i>
                      <TextInfoNovel>Truyện</TextInfoNovel>
                      <TextNumInfoNovel> 122</TextNumInfoNovel>
                    </Col2Row2>
                    <Col2Row2>
                      <i
                        class="fa-solid fa-list fa-2xl"
                        style={{ paddingLeft: "4vh" }}
                      ></i>
                      <TextInfoNovel>Chương</TextInfoNovel>
                      <TextNumInfoNovel> 122k</TextNumInfoNovel>
                    </Col2Row2>
                    <Col2Row2>
                      <i
                        class="fa-solid fa-crown fa-2xl"
                        style={{ paddingLeft: "3vh" }}
                      ></i>
                      <TextInfoNovel>Cấp</TextInfoNovel>
                      <TextNumInfoNovel> 12</TextNumInfoNovel>
                    </Col2Row2>
                  </Row>
                </InfoCol2>
                </ColAuthFixed>

              </ContainerColAuth>
            </Row>

            <Carosel />
          </ContainerPageContent>
          <Footer />
        </TransparentBanner>
      </ImageBanner>
    </div>
  );
}

export default Novel;
