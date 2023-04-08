import React, { useState } from "react";
import {
  Chapter,
  Col2Row2,
  ColAuthFixed,
  ColButton,
  ColSearch,
  ContainerColAuth,
  InfoCol2,
  Row1,
} from "./ListChapterTabStyle";
import SimpleBar from "simplebar-react";
import {
  TextInfoNovel,
  TextNumInfoNovel,
} from "../../TextField/TestComponents";
import { Content } from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../../Avatar/Avatar";

const ListChapterTab = ({ chapters }) => {
  const [sortAscending, setSortAscending] = useState(true);

  const handleSortClick = () => {
    setSortAscending(!sortAscending);
  };

  const sortedChapters = [...chapters].sort((a, b) =>
    sortAscending
      ? a.chapterNumber - b.chapterNumber
      : b.chapterNumber - a.chapterNumber
  );

  return (
    <>
      <Row>
        <Col sm={9}>
          <Row1>
            <h1> Danh sách</h1>
            <ColSearch>
              <form>
                <label>
                  Tìm chương
                  <input type="text" />
                </label>
              </form>
            </ColSearch>
            <ColButton>
              <button
                onClick={handleSortClick}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "22px",
                }}
              >
                <i class="fa-solid fa-arrow-up-wide-short"></i>{" "}
              </button>
            </ColButton>
          </Row1>
          <SimpleBar style={{ maxHeight: "110vh" }}>
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}

            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
            {sortedChapters.map((chapter) => (
              <Chapter key={chapter.chapterNumber}>
                <Content>Chapter {chapter.chapterNumber}</Content>
                <Content>{chapter.chapterTitle}</Content>
                <Content>{chapter.dateUpload} ngày trước</Content>
              </Chapter>
            ))}
          </SimpleBar>
        </Col>

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
    </>
  );
};

export default ListChapterTab;
