import React from "react";
import "./editnovel.css";
import {  Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardInfoNovelPost from "../../../components/card/CardInfoNovelPost/CardInfoNovelPost";
import {
  Chapter,
  ChapterEdit,
  LinkChapter,
} from "../../../components/Tab/ListChapterTab/ListChapterTabStyle";
import SimpleBar from "simplebar-react";
import {
  Content1,
  ContentEdit,
  ContentEdit1,
  ContentEdit2,
} from "../../../components/TextField/TestComponents";
import factories from "../../../redux/app/factory";

function EditNovel(props) {
  const [novel, setNovel] = useState();
  const [chapterList, setchapterList] = useState();
  const [chapterListSort, setchapterListSort] = useState();
  const [numBookmard, setnumBookmard] = useState();
  const { id } = useParams();
  console.log("🚀 ~ file: EditNovel.js:25 ~ EditNovel ~ id:", id)
  const [sortOrder, setSortOrder] = useState(false);

  function handleSortClick() {
    setchapterListSort(chapterList);
    if (sortOrder) {
      setSortOrder(false);
    } else {
      setSortOrder(true);
    }
  }

  function handleChange(event) {
    let value = event.target.value;
    if (!isNaN(value)) {
      // Nếu giá trị bắt đầu bằng số
      value = parseInt(value) - 1;
      value = parseInt(value) + 1;
      // console.log(value);
    } else {
      const list = chapterList.filter(
        (chap) => chap[value] === Number(value) || chap.title.includes(value)
      );
    }

    // const list = chapterList.filter((chap) =>
    //   chap[value] === Number(value) || chap.title.includes(value)
    // );
    // console.log(list);
  }
  const calculateDaysFromCreatedAt = (createdAt) => {
    if (!createdAt) {
      return 0;
    }
    const date = new Date(createdAt.split("T")[0]);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  useEffect(() => {
    async function fetchData() {
      const response = await factories.getNovelInfo(id);
        setNovel(response?.novelInfo[0]);
        setchapterList(response?.chapterList);
        setnumBookmard(response?.bookmarkNum);
    } 
    fetchData();
  }, [id]);

  return (
    <>
      {novel && (
        <CardInfoNovelPost
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
          bookmark="true"
        />
      )}

      <div class="list-chapter">
        <div class="list-chapter-content">
          <h4>Danh sách chương </h4>
          <LinkChapter to={`chapter/add`}>
            <i class="fa fa-plus"></i>{" "}
          </LinkChapter>
        </div>
        <Outlet />
        <div className="box-list">
          <h5> Tìm chương</h5>
          <div className="search-chap">
            <form>
              <input
                onChange={handleChange}
                id="input-chapter"
                name="input-chapter"
                placeholder="Chương ..."
                type="text"
              />
            </form>
            <button
              onClick={handleSortClick}
              style={{
                border: "none",
                background: "transparent",
                fontSize: "22px",
                marginLeft: "10px",
              }}
            >
              {sortOrder === true ? (
                <i class="fa-solid fa-arrow-down-short-wide"></i>
              ) : (
                <i class="fa-solid fa-arrow-up-wide-short"></i>
              )}
            </button>
          </div>
        </div>

        <div className="list-chap">
          <SimpleBar style={{ maxHeight: "110vh" }}>
            {chapterList &&
              chapterList.map((chapter, index) => (
                <Chapter key={index + 1}>
                  <Content1
                    to={`/novel/chapter/${chapter._id}`}
                    state={{}}
                    style={{ marginLeft: "8vh" }}
                  >
                    Chương {index + 1}
                  </Content1>
                  <Content1 to={`/novel/chapter/${chapter._id}`} state={{}}>
                    {chapter.title}
                  </Content1>

                  <Content1>
                    {calculateDaysFromCreatedAt(chapter.createdAt)} ngày
                    trước
                  </Content1>
                </Chapter>
              ))
            }


            {/* {value !== NaN
              ? sortOrder === true
                ? chapterListSort &&
                  chapterListSort.reverse().map((chapter, index) => (
                    <Chapter key={index + 1}>
                      <Content1
                        to={`/novel/chapter/${chapter._id}`}
                        state={{}}
                        style={{ marginLeft: "8vh" }}
                      >
                        Chương {index + 1}
                      </Content1>
                      <Content1 to={`/novel/chapter/${chapter._id}`} state={{}}>
                        {chapter.title}
                      </Content1>

                      <Content1>
                        {calculateDaysFromCreatedAt(chapter.createdAt)} ngày
                        trước
                      </Content1>
                    </Chapter>
                  ))
                : chapterListSort &&
                  chapterListSort.reverse().map((chapter, index) => (
                    <Chapter key={index + 1}>
                      <Content1
                        style={{ marginLeft: "8vh" }}
                        to={`/post-novel/mynovel/chapters/editchap`}
                        //   to={`/post-novel/mynovel//novel/chapters/${chapter._id}`}
                        state={{}}
                      >
                        Chương {chapterList.length - index}
                      </Content1>
                      <Content1 to={`/novel/chapter/${chapter._id}`} state={{}}>
                        {chapter.title}
                      </Content1>

                      <Content1>
                        {calculateDaysFromCreatedAt(chapter.createdAt)} ngày
                        trước
                      </Content1>
                    </Chapter>
                  ))
              : chapterSort && (
                  <Chapter>
                    <Content1
                      to={`/novel/chapter/${chapterSort._id}`}
                      state={{}}
                      style={{ marginLeft: "8vh" }}
                    >
                      Chương {value}
                    </Content1>
                    <Content1
                      to={`/novel/chapter/${chapterSort._id}`}
                      state={{}}
                    >
                      {chapterSort.title}
                    </Content1>

                    <Content1>
                      {calculateDaysFromCreatedAt(chapterSort.createdAt)} ngày
                      trước
                    </Content1>
                  </Chapter>
                )
              } */}



            {sortOrder === true
              ? chapterListSort &&
              chapterListSort.reverse().map((chapter, index) => (
                <ChapterEdit key={index + 1}>
                  <ContentEdit
                    to={`chapter/${chapter._id}`}
                    state={{ chapter }}
                  >
                    Edit
                  </ContentEdit>

                  <ContentEdit1
                    to={`/novel/chapter/${chapter._id}`}
                    state={{ chapter }}
                  >
                    Chương {index + 1}
                  </ContentEdit1>
                  <ContentEdit2
                    to={`/novel/chapter/${chapter._id}`}
                    state={{}}
                  >
                    {chapter.title}
                  </ContentEdit2>

                  <Content1>
                    {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
                  </Content1>
                </ChapterEdit>
              ))
              : chapterListSort &&
              chapterListSort.reverse().map((chapter, index) => (
                <Chapter key={index + 1}>
                  <ContentEdit1
                    style={{ marginLeft: "8vh" }}
                    to={`/post-novel/mynovel/chapters/editchap`}
                    //   to={`/post-novel/mynovel//novel/chapters/${chapter._id}`}
                    state={{}}
                  >
                    Chương {chapterList.length - index}
                  </ContentEdit1>
                  <ContentEdit2
                    to={`/novel/chapter/${chapter._id}`}
                    state={{}}
                  >
                    {chapter.title}
                  </ContentEdit2>

                  <Content1>
                    {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
                  </Content1>
                </Chapter>
              ))}
          </SimpleBar>
        </div>
      </div>
    </>
  );
}

export default EditNovel;
