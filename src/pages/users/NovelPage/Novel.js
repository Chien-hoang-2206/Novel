import React from "react";
import {
  ContainerInfo,
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
import axios from "../../../api/axios";
import factories from "../../../redux/app/factory";


function Novel(props) {
  const [novel, setNovel] = useState();
  const [loading, setLoading] = useState(true);
  const [chapterList, setchapterList] = useState();
  const [numBookmard, setnumBookmard] = useState();
  const [isbookmark, setisbookmark] = useState();
  const [reviewList, setReviewList] = useState();
  const { id } = useParams();
  const accountID = sessionStorage.getItem("accID") || "";
  const [toggleState, setToggleState] = useState(1);
  const [width, setWidth] = React.useState(window.innerWidth);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  async function fetchDataNovel() {
    const response = await factories.getNovelInfo(id);
    setNovel(response.novelInfo[0]);
    setchapterList(response.chapterList);
    setnumBookmard(response.bookmarkNum);
    setLoading(false);
  }
  async function fetchDataNovelReview() {
    const response = await factories.getNovelReviewInfo(id);
    setReviewList(response?.reviewInfo?.reviewList);
    setLoading(false);
  }
  useEffect(() => {
    fetchDataNovel();
    fetchDataNovelReview();
    if ( accountID){
      checkIsBookmark();
    }
  }, [id]);

  async function checkIsBookmark() {
    const response = await factories.getstatusBookmark(accountID,id);
    setisbookmark(response?.isBookmarked)
  }

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
        {loading === false ? (
          <TransparentBanner>
            <div className="md:w-3/5 rounded-md shadow-lg md:my-32 md:mx-auto bg-white">
              <ContainerInfo>
                {novel && (
                  <CardInfoNovel
                    nameNovel={novel.title}
                    IDNovel={novel._id}
                    accountId={props.accountID}
                    nameAuth={novel.author}
                    chaperNum={chapterList?.length}
                    intro={novel.intro}
                    types={novel.types}
                    numBookmark={numBookmard}
                    numRead={novel.readCount}
                    srcimage={novel.coverLink}
                    bookmark="false"
                    isBookmark={isbookmark ?? false}
                    firstChapter={chapterList[0]?._id}
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
                        <div className="number-border"> {reviewList?.length ?? 0}</div>
                      </div>
                      {/* <div
                        className={
                          toggleState === 3 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(3)}
                      >
                        <TabName>Bình luận</TabName>
                        <div className="number-border">3037</div>
                      </div> */}
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

                      {/* <div
                        className={
                          toggleState === 3
                            ? "content  active-content"
                            : "content"
                        }
                      >
                        <CommentTab />
                      </div> */}
                    </div>
                  </div>
                </ContainerTabs>
              </Row>
              {novel && <Carosel types={novel.types} />}
            </div>
            <Footer />
          </TransparentBanner>
        ) : (<></>)}
      </ImageBanner>
    </div>
  );
};

export default Novel;
