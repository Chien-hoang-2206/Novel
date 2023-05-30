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
import React, { useState } from "react";

const ListChapterTab = ({ chapters, nameNovel, IDNovel, accountId }) => {
  const [sortOrder, setSortOrder] = useState(false);
  const novelname = nameNovel;
  const Idnovel = IDNovel;
  let accID = accountId;
  if (accountId)
  accID =  accountId;
  else
  accID = "000";
  const [width, setWidth] = React.useState(window.innerWidth);
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

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 768) {
    return (
      <>
        <div className="px-2 ">
          <p className="text-xl font-bold"> Danh sách chương  </p>
        </div>
        <div className="flex justify-around px-4 py-2 items-center">
          <form>
            <input type="text" className="bg-slate-50 rounded-md border-1 px-2" placeholder="tìm chương" />
          </form>
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
        </div>
        <div className="px-4">
          <SimpleBar   style={{ maxHeight: 420}}>
            {sortOrder == true
              ? chapters &&
              chapters.reverse().map((chapter, index) => (
                <Chapter key={index + 1}>
                  <Content1
                    to={`/novel/chapter/${chapter._id}`}
                    state={{ novelname, Idnovel, accID }}
                  >
                    Chương {index + 1}
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
                </Chapter>
              ))
              : chapters &&
              chapters.reverse().map((chapter, index) => (
                <Chapter key={index + 1}>
                  <Content1
                    style={{}}
                    to={`/novel/chapter/${chapter._id}`}
                    state={{ novelname, Idnovel, accID }}
                  >
                    Chương {chapters.length - index}
                  </Content1>
                  <Content1 to={`/novel/chapter/${chapter._id}`}
                    state={{ novelname, Idnovel, accID }} >
                    {chapter.title}
                  </Content1>

                  <Content1>
                    {calculateDaysFromCreatedAt(chapter.createdAt)} ngày trước
                  </Content1>
                </Chapter>
              ))}
          </SimpleBar>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <Row className="px-2">
          <Col sm={9}>
            <Row1>
              <h1> Danh sách</h1>
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
                    <i class="fa-solid fa-arrow-down-short-wide"></i>
                  ) : (
                    <i class="fa-solid fa-arrow-up-wide-short"></i>
                  )}
                </button>
              </ColButton>
            </Row1>
            <SimpleBar style={{ maxHeight: "110vh", padding:"10px 0px" }}>
              {sortOrder === true
                ? chapters &&
                chapters.reverse().map((chapter, index) => (
                  <Chapter key={index + 1}>
                    <Content1
                      to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname, Idnovel, accID }}
                      style={{ marginLeft: "8vh" }}
                    >
                      Chương {index + 1}
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
                  </Chapter>
                ))
                : chapters &&
                chapters.reverse().map((chapter, index) => (
                  <Chapter key={index + 1}>
                    <Content1
                      style={{ marginLeft: "8vh" }}
                      to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname, Idnovel, accID }}
                    >
                      Chương {chapters.length - index}
                    </Content1>
                    <Content1 to={`/novel/chapter/${chapter._id}`}
                      state={{ novelname, Idnovel, accID }} >
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
  }
};

export default ListChapterTab;
