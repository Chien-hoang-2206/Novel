import React, { useEffect, useState } from "react";
import {
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import "./Readingnovel.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Footer from "../../../parts/user/footer";
import Comment from "../../../components/card/Comment/Comment";
import SimpleBar from "simplebar-react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import { Introtext } from "../../../components/TextField/TestComponents";
import Carosel from "../../../components/Carosel/Carosel";
import factories from "../../../redux/app/factory";
const SaveChapter_URL = "/api/history/";
const AddReview_URL = "/api/comments/";
function ReadingNovel() {
  const { id } = useParams();
  const { state } = useLocation()
  const [novelname, setNovelName] = useState();
  const [Idnovel, setIdnovel] = useState();
  const [content, setContent] = useState("");
  const accID = sessionStorage.getItem("accID") || "";
  const novelId = state.Idnovel;

  useEffect(() => {
    if (state) {
      setNovelName(state.novelname);
      setIdnovel(state.Idnovel);
    } else {
      setNovelName("");
      setIdnovel("");
    }
  }, [state]);
  const [preIDchap, setPreIDchap] = useState();
  const [commentList, setcommentList] = useState();
  const [nextIDchap, setNextIDchap] = useState();
  const [contentNovel, setContentNovel] = useState();
  const [chapterInfo, setchapterInfo] = useState({
    title: "Loading",
    content: "Loading",
    _id: "643a5818c0e71950015fb126",
  });


  useEffect(() => {
    async function fetchData() {
      const response = await factories.getNovelChapterInfo(id);
      setcommentList(response?.commentList);
      setchapterInfo(response.chapter);
      setPreIDchap(response.prev?._id)
      setNextIDchap(response.next?._id)
      setContentNovel(response.chapter.content);
    }
    fetchData();
    saveNovel();
  }, [id]);


  useEffect(() => {
    window.scrollTo(0, 0); // đặt vị trí hiển thị của trang về đầu tiên
  }, []);


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



  async function saveNovel() {
    const data = {
      chapterId: id,
      accountId: accID,
      novelId: novelId,
    }
    try {
      await factories.saveReadingNovel(data);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .post(SaveChapter_URL, {
    //     chapterId: id,
    //     accountId: accID,
    //     novelId: novelId,
    //   })
    //   .then((response) => {
    //     if (response.data) {
    //     } else {
    //       alert('Đăng nhập không thành công');
    //     }
    //   })
    //   .catch((error) => {
    //   });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              Chapter{chapterInfo?.title}: {chapterInfo?.title}
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

        <div className="button-nav-chap-2" style={{ width: "70%" }}>
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
                <button className="button-comment-post" style={{ position: "relative", left: 650 }} type="submit">
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
            <Carosel />
          </div>
        </div>
        <Footer />
      </TransparentBanner>
    </ImageBanner>
  )
}
ReadingNovel.defaultProps = {
  novelid: "11111",
  novelTitle: "Minno do",
  novelContent: "dđ",
  chapterIndex: "111",
  chapterTitle: "Đại chiến cuối cùng",
};
export default ReadingNovel;
