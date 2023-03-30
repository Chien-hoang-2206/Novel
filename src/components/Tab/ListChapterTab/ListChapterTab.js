import React, { useState } from "react";
import { Chapter, ColButton, ColSearch, Row1 } from "./ListChapterTabStyle";
import SimpleBar from "simplebar-react";
import { Nomal } from "../../TextField/TestComponents";
import { Content } from "../../TextField/TestComponents";

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
      <Row1>
        <h1> Danh sách</h1>
        <ColSearch>
        <form>
      <label>Tìm chương
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
            {sortAscending ? "Ascending" : "Descending"}
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
    </>
  );
};

export default ListChapterTab;
