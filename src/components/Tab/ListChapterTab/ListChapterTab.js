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
  Content1,
  TextInfoNovel,
  TextNumInfoNovel,
} from "../../TextField/TestComponents";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../../Avatar/Avatar";
import React, { useEffect, useState } from "react";

const ListChapterTab = ({ chapters, nameNovel, IDNovel, accountId }) => {
  const [sortOrder, setSortOrder] = useState(false);
  const [ChapterList, setChapterList] = useState([]);
  const [accID, setAccID] = useState();
  const novelname = nameNovel;
  const Idnovel = IDNovel;

  useEffect(() => {
    if (chapters) {
      const list = chapters.map((item, index) => ({
        ...item,
        chapter: `Chương ${index + 1}`,
      }));
      setChapterList(list);
    }
  }, [chapters]);


  useEffect(() => {
    let nweAccId;
    if (accountId) {
      nweAccId = accountId;
    }
    else {
      nweAccId = "000";
    }
    setAccID(nweAccId);
  }, [accountId])

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
  function handleSortClick() {
      const newList = [...ChapterList].reverse();
      setChapterList(newList)
  }

  return (
    <Row className="px-2">
      <Col >
        <Row1>
          <h1> Danh sách chương</h1>
          <ColSearch>
            <form>
              <input type="text" className="bg-slate-50 rounded-md border-1 px-2" placeholder="tìm chương" />
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
              {sortOrder === true ? (
                <i className="fa-solid fa-arrow-down-short-wide"></i>
              ) : (
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              )}
            </button>
          </ColButton>
        </Row1>
        <SimpleBar style={{ maxHeight: "110vh", padding: "10px 0px" }}>
          {ChapterList?.map((chapter) => (
            <Chapter key={chapter?._id} >
              <Content1
                to={`/novel/chapter/${chapter._id}`}
                state={{ novelname, Idnovel, accID }}
                style={{ marginLeft: "8vh" }}
              >
                {chapter?.chapter}
              </Content1>
              <Content1
                to={`/novel/chapter/${chapter._id}`}
                state={{ novelname, Idnovel, accID }}
              >
                {chapter.title}
              </Content1>
              <Content1>
                {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
              </Content1>
            </Chapter>))
          }
        </SimpleBar>
      </Col>
    </Row>
  );
}

export default ListChapterTab;
