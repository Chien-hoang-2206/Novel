import React, { useContext, useEffect, useState } from "react";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import "./Readingnovel.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Footer from "../../../parts/user/footer";
import Comment from "../../../components/card/Comment/Comment";
import SimpleBar from "simplebar-react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import { Introtext } from "../../../components/TextField/TestComponents";
import Carosel from "../../../components/Carosel/Carosel";
const SaveChapter_URL = "/api/history/";


const AddReview_URL = "/api/comments/";
function ReadingNovel() {
  const { id } = useParams();
  const { state } = useLocation()
  const [novelname, setNovelName] = useState();
  const [Idnovel, setIdnovel] = useState();
  const [width, setWidth] = React.useState(window.innerWidth);
  const [content, setContent] = useState("");
  const accID = sessionStorage.getItem("accID") || "" ;
  const novelId = state.Idnovel;

  useEffect(() => {
    console.log(state);
    if (state) {
      setNovelName(state.novelname);
      setIdnovel(state.Idnovel);
    } else {
      setNovelName("");
      setIdnovel("");
    }
  }, [state]);
  const [reload, setReload] = useState(false);
  const [preIDchap, setPreIDchap] = useState();
  const [commentList, setcommentList] = useState();
  const [nextIDchap, setNextIDchap] = useState();
  const [contentNovel, setContentNovel] = useState();
  const [chapterInfo, setchapterInfo] = useState({
    title: "Loading",
    content: "Loading",
    _id: "643a5818c0e71950015fb126",
  });
  const apiUrl = `http://localhost:5000/api/chapters/${id}`;
  useEffect(() => {

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.chapter) {
          setcommentList(data.commentList);
          setchapterInfo(data.chapter);
          setPreIDchap(data.prev._id)
          setNextIDchap(data.next._id)
          setContentNovel(data.chapter.content);
        }
      });
    savelNovel();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // đặt vị trí hiển thị của trang về đầu tiên
  }, []);

  console.log(commentList);

  const renderCommentList = () => {
    return (commentList &&
      commentList.map((comment, index) => (
        <Comment
          key={index}
        />
      )))
  }


  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  function savelNovel() {
    console.log(id, accID, novelId);
    axios
      .post(SaveChapter_URL, {
        chapterId: id,
        accountId: accID,
        novelId: novelId,
      })
      .then((response) => {
        if (response.data) {
          console.log("da luu");
        } else {

          alert('Đăng nhập không thành công');
        }
        console.log(response);
      })
      .catch((error) => {
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(accID, novelID, value11,value2,value3,inputValue);
    axios
      .post(AddReview_URL, {
        "content": content,
        "chapterId": id,
        "accountId": accID
      })
      .then((response) => {
        // console.log(response.data)
        if (response.data) {
          // Đăng nhập thành công, chuyển hướng đến trang chủ và lưu iduser vào cookies hoặc session
          // ReloadNavBar;
          setReload(true);
          console.log(response.data)
          window.location.href = `/novel/${Idnovel}`; // Thay đổi đường dẫn tương ứng
          alert('Cảm ơn bạn đã chia sẻ đánh giá');
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert('Đăng đánh giá không thành công');
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert('Bạn chỉ có thể đánh giá một lần ');
      });
  };

  function handleClickPreChapter() {
    window.location.href = `/novel/chapter/${preIDchap}`;
  }
  function handleClickNextChapter() {
    window.location.href = `/novel/chapter/${nextIDchap}`;
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
      <div className="" >

        <div className="containerReadingNovel">
          {/* Dieu huong thu muc  */}
          <Breadcrumb>
            <Breadcrumb.Item
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="/home"
            >
              <i class="fa-solid fa-house"></i>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              <Link to={`/novel/${Idnovel}`}>  {novelname} </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* Dieu huong chapter */}
          <div className="button-nav-chap w-full  h-12">
            {/* btn previer chap */}
            <button onClick={handleClickPreChapter} className="w-1/4 buttonRD" style={{ float: "left", width: "50px" }}>
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <h4 className="w-2/4"> {chapterInfo.title} </h4>
            {/* btn next chap */}
            <button onClick={handleClickNextChapter} className=" w-1/4 buttonRD" style={{ float: "right", width: "50px" }}>
              <i
                style={{ marginLeft: "4px" }}
                class="fa-solid fa-angle-right"
              ></i>
            </button>
          </div>

          {/* area readding novel  */}

          {contentNovel &&
            <Introtext>
              <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
            </Introtext>}


        </div>



        <div className=" button-nav-chap-2 flex items-center" style={{ width: "100%" }} >
          <button
            onClick={handleClickPreChapter}
            className="buttonRD"
            style={{ float: "left" }}
          >
            <i class="fa-solid fa-angle-left"></i>
            <span style={{ fontWeight: "bold" }} >Chương trước </span>
          </button>
          <div className="w-1/5 text-4xl border-1 border-gray-400"> <i class="fa-solid fa-list"></i> </div>
          <button onClick={handleClickNextChapter} className="w-2/5 buttonRD w-32 " style={{ float: "right" }}>
            <span style={{ fontWeight: "bold" }} >Chương sau </span>
          </button>
        </div>


        <div className="comment_Novel">
          <div className="commentRD">
            <div className="Cmt">
              <h3>Bình luận</h3>
            </div>

            <form method="post" onSubmit={handleSubmit} >
              <textarea
                className="inputRD"
                name="message"
                type="text"
                // value=""
                onChange={handleInputChange}
                placeholder="Chia sẻ bình luận của bạn về truyện .... "
              ></textarea>
              <div className="submitCMT">
                <button className="button-io" type="submit">
                  <span>Đăng</span>
                </button>
              </div>
            </form>
            <div className="comments">
              <SimpleBar style={{ maxHeight: "85vh" }}>
                {renderCommentList}
              </SimpleBar>
            </div>
          </div>

          <div className="newNovel">
            <div className="Cmt">
              <h3>Đề xuất cho bạn</h3>
            </div>
            {/* <Carosel/> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <ImageBanner style={{ backgroundImage: "url('image/bgBanner.jpg')" }}>
        <TransparentBanner>

          <div className="containerReadingNovel">
            {/* Dieu huong thu muc  */}
            <Breadcrumb>
              <Breadcrumb.Item
                style={{ textDecoration: "none", fontWeight: "bold" }}
                href="/home"
              >
                <i class="fa-solid fa-house"></i>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                <button to={`/novel/${Idnovel}`}>  {novelname} </button>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                style={{ textDecoration: "none", fontWeight: "bold" }}
                active
              >
                Chapter{chapterInfo.title}: {chapterInfo.title}
              </Breadcrumb.Item>
            </Breadcrumb>

            {/* Dieu huong chapter */}
            <div className="button-nav-chap" style={{ display: "flex", justifyContent: "space-around" }}>
              {/* btn previer chap */}

              <button onClick={handleClickPreChapter}
                className="buttonRD" style={{ float: "left" }}>
                <i class="fa-solid fa-angle-left"></i>
                <span style={{ fontWeight: "bold" }}>Chương trước </span>
              </button>
              {/* btn next chap */}
              <button onClick={handleClickNextChapter} className="buttonRD" style={{ float: "right" }}>
                <span style={{ fontWeight: "bold" }} > Chương sau </span>
                <i
                  style={{ marginLeft: "4px" }}
                  class="fa-solid fa-angle-right"
                ></i>
              </button>
            </div>

            {/* area readding novel  */}
            {contentNovel &&
              <Introtext>
                <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
              </Introtext>}


          </div>



          <div className="button-nav-chap-2" style={{ width: "90%" }}>

            <button
              onClick={handleClickPreChapter}
              className="buttonRD"
              style={{ float: "left" }}
            >
              <i class="fa-solid fa-angle-left"></i>
              <span style={{ fontWeight: "bold" }} >Chương trước </span>
            </button>

            <button onClick={handleClickNextChapter} className="buttonRD" style={{ float: "right" }}>
              <span style={{ fontWeight: "bold" }} >Chương sau </span>
              <i
                style={{ marginLeft: "4px" }}
                class="fa-solid fa-angle-right"
              ></i>
            </button>
          </div>


          <div className="comment_Novel">
            <div className="commentRD">
              <div className="Cmt">
                <h3>Bình luận</h3>
              </div>

              <form method="post">
                <textarea
                  className="inputRD"
                  name="message"
                  placeholder="Chia sẻ bình luận của bạn về truyện .... "
                ></textarea>
                <div className="submitCMT">
                  <button className="button-comment-post" style={{ position: "relative" , left: 650 }} type="submit">
                    <span>Đăng</span>
                  </button>
                </div>
              </form>
              <div className="comments">
                <SimpleBar style={{ maxHeight: "85vh" }}>
                  {renderCommentList}
                </SimpleBar>
              </div>
            </div>

            <div className="newNovel">
              <div className="Cmt">
                <h3>Đề xuất cho bạn</h3>
              </div>
              <Carosel/>
            </div>
          </div>
          <Footer />
        </TransparentBanner>
      </ImageBanner>
    )
  }
}
ReadingNovel.defaultProps = {
  novelid: "11111",
  novelTitle: "Minno do",
  novelContent: "dđ",
  chapterIndex: "111",
  chapterTitle: "Đại chiến cuối cùng",
};
export default ReadingNovel;
