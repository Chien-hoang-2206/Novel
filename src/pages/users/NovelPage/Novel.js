import React from "react";
import {
  ContainerInfo,
  ContainerPageContent,
  ContainerTabs,
  ImageBanner,
  TransparentBanner,
} from "./NovelElement";
import {
  TabName,
} from "../../../components/TextField/TestComponents";

import CardInfoNovel from "../../../components/card/CardInfoNovel/CardInfoNovel";
import Footer from "../../../parts/user/footer";
import "./Tabs.css";

import ReviewTab from "../../../components/Tab/ReviewTab/ReviewTab";
import ListChapterTab from "../../../components/Tab/ListChapterTab/ListChapterTab";
import CommentTab from "../../../components/Tab/CommentTab/CommentTab";
import Carosel from "./../../../components/Carosel/Carosel";
import Row from "react-bootstrap/Row";

import { useState, useEffect } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://web-novel-api.p.rapidapi.com/novel/fa102782f605163ddc1b3341709fd70221b4e23b',
  headers: {
    'X-RapidAPI-Key': 'be4e2f28a7mshb59f609cd0a1af0p19977fjsnaf6acd1c335a',
    'X-RapidAPI-Host': 'web-novel-api.p.rapidapi.com'
  }
};

function Novel() {
  const [novel, setNovel] = useState();

  useEffect(() => {
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setNovel(response.data.novel)
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  console.log(novel);
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
                      <div className="number-border">25</div>
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
