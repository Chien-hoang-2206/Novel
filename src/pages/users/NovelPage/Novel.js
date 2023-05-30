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
import axios from "../../../api/axios";


function Novel(props) {
  const [novel, setNovel] = useState();
  const [loading, setLoading] = useState(true);
  const [chapterList, setchapterList] = useState();
  const [numBookmard, setnumBookmard] = useState();
  const [isbookmark, setisbookmark] = useState();
  const [reviewList, setReviewList] = useState();
  const [numReview, setNumReview] = useState();
  const { id } = useParams();
  const accountID = sessionStorage.getItem("accID") || "";
  const [toggleState, setToggleState] = useState(1);
  const [width, setWidth] = React.useState(window.innerWidth);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const apiUrl = `http://localhost:5000/api/novels/${id}`;
  const apiUrlCheckbookmark = `http://localhost:5000/api/bookmarks/${accountID}/${id}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNovel(data.novelInfo[0]);
        setchapterList(data.chapterList);
        setnumBookmard(data.bookmarkNum);
        setReviewList(data.reviewList);
        setNumReview(data.reviewList.length);
      });
    checkIsBookmark();
  }, []);

  function checkIsBookmark() {
    axios
      .get(apiUrlCheckbookmark)
      .then((response) => {
        console.log(response);
        setisbookmark(response.data.isBookmarked);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768) {
    return (
      <div>
        <div className=" bg-white-50">
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
                bookmark={isbookmark}
              />
            )}
          </ContainerInfo>
          <div className="containerTabs my-2">
            <div className="bloc-tabs">
              <div
                className={
                  toggleState === 1 ? "tabs active-tabs" : "tabs"
                }
                onClick={() => toggleTab(1)}
              >
                <TabName> Chương</TabName>
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
          {
            novel &&
            <Carosel types={novel.types} />
          }
        </div>
        {/* <Footer /> */}
      </div>)
  } else {
    return (
      <div>
        <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
          {loading === false ? (
            <TransparentBanner>
              <div className=" md:w-3/4 rounded-md shadow-lg md:my-32 md:mx-auto bg-white">
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
                      bookmark="false"
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
                {
                  novel &&
                  <Carosel types={novel.types} />
                }
              </div>
              <Footer />
            </TransparentBanner>
          ) : (<></>)}
        </ImageBanner>
      </div>
    );
  }
};

export default Novel;
