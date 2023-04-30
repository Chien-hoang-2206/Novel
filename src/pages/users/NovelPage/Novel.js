import React from "react";
import {
  ContainerInfo,
  ContainerPageContent,
  ContainerTabs,
  ImageBanner,
  TransparentBanner,
} from "./NovelElement";
import { TabName } from "../../../components/TextField/TestComponents";

import CardInfoNovel from "../../../components/card/CardInfoNovel/CardInfoNovel";
import Footer from "../../../parts/user/footer";
import "./Tabs.css";

import ReviewTab from "../../../components/Tab/ReviewTab/ReviewTab";
import ListChapterTab from "../../../components/Tab/ListChapterTab/ListChapterTab";
import CommentTab from "../../../components/Tab/CommentTab/CommentTab";
import Carosel from "./../../../components/Carosel/Carosel";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Novel(props) {
  const [novel, setNovel] = useState();
  const [chapterList, setchapterList] = useState();
  const [numBookmard, setnumBookmard] = useState();
  const [reviewList, setReviewList] = useState();
  const [numReview, setNumReview] = useState();
  const [numRead, setnumRead] = useState();
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const apiUrl = `http://localhost:5000/api/novels/${id}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNovel(data.novelInfo[0]);
        setchapterList(data.chapterList);
        setnumBookmard(data.bookmarkNum);
        setReviewList(data.reviewList);
        setNumReview(data.reviewList.length);
        // console.log(numReview);
      });
  }, []);

  return (
    <div>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')"  }}>
        <TransparentBanner>
          <ContainerPageContent>
            <ContainerInfo>
              {novel && (
                <CardInfoNovel
                  nameNovel={novel.title}
                  IDNovel={novel._id}
                  accountId={props.accountID}
                  nameAuth={novel.author}
                  chaperNum={chapterList.length}
                  intro={novel.intro}
                  types={novel.types}
                  numBookmark={numBookmard}
                  numRead={novel.readCount}
                  srcimage={novel.coverLink}
                  // bookmark= "true"
                />
              )}
            </ContainerInfo>
            <Row>
              <ContainerTabs>
                <div className="containerTabs">
                  <div className="bloc-tabs">
                    <div
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      <TabName>Danh sách chương</TabName>
                    </div>
                    <div
                      className={
                        toggleState === 2 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      <TabName>Đánh giá</TabName>
                      <div className="number-border"> {numReview}</div>
                    </div>
                    <div
                      className={
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      <TabName>Bình luận</TabName>
                      <div className="number-border">3037</div>
                    </div>
                  </div>

                  <div className="content-tabs">
                    <div
                      className={
                        toggleState === 1
                          ? "content  active-content"
                          : "content"
                      }
                    >
                  
                        {novel && (
                          <ListChapterTab
                            chapters={chapterList}
                            nameNovel={novel.title}
                            IDNovel={novel._id}
                            accountId={props.accountID}
                          />
                        )}
                    </div>

                    <div
                      className={
                        toggleState === 2
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <ReviewTab
                        reviewList={reviewList}
                        novelID={id}
                        accountId={props.accountID}
                      />
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
