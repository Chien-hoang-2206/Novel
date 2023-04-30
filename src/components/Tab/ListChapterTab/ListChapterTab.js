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

import { Content } from "../../TextField/TestComponents";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../../Avatar/Avatar";
import { useState } from "react";

const ListChapterTab = ({ chapters, nameNovel, IDNovel ,accountId}) => {
  const [sortOrder, setSortOrder] = useState(false);
  const novelname = nameNovel;
  const Idnovel = IDNovel;
  const accID = accountId;
  console.log(accID);
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
  const myState = { myData: "abc" };
  function handleSortClick() {
    if (sortOrder) {
      setSortOrder(false);
    } else {
      setSortOrder(true);
    }
  }

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
                {sortOrder === true ? (
                  <i class="fa-solid fa-arrow-down-short-wide"></i>
                ) : (
                  <i class="fa-solid fa-arrow-up-wide-short"></i>
                )}
              </button>
            </ColButton>
          </Row1>
          <SimpleBar style={{ maxHeight: "110vh" }}>
            {sortOrder === true
              ? chapters &&
                chapters.reverse().map((chapter, index) => (
                  <Chapter key={index + 1}>
                    <Content1
                      to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname , Idnovel ,accID}}
                      style={{ marginLeft: "8vh" }}
                    >
                      Chương {index + 1}
                    </Content1>
                    <Content1
                      to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname , Idnovel ,accID}}
                    >
                      {chapter.title}
                    </Content1>

                    <Content1>
                      {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
                    </Content1>
                  </Chapter>
                ))
              : chapters &&
                chapters.reverse().map((chapter, index) => (
                  <Chapter key={index + 1}>
                    <Content1
                      style={{ marginLeft: "8vh" }}
                      to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname , Idnovel ,accID}}
                    >
                      Chương {chapters.length - index}
                    </Content1>
                    <Content1  to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname , Idnovel ,accID}} >
                      {chapter.title}
                    </Content1>

                    <Content1>
                      {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
                    </Content1>
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
