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
const SaveChapter_URL = "/api/history/";

function ReadingNovel() {
  const { id } = useParams();
  const { state } = useLocation()
  let novelName, Idnovel, accID;

  if (state && state.novelname && state.Idnovel && state.accID) {
    novelName = state.novelname;
    Idnovel = state.Idnovel;
    accID = state.accID;
  } else {
    novelName = "";
    Idnovel = "";
    accID = "";
  }

  const [reload,setReload] = useState(false);
  const [preIDchap,setPreIDchap] = useState();
  const [nextIDchap,setNextIDchap] = useState();
  const [contentNovel,setContentNovel] = useState();
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
        if (data.chapter){
          setchapterInfo(data.chapter);
          console.log(data);
          setPreIDchap(data.prev._id)
          setNextIDchap(data.next._id)
          setContentNovel(data.chapter.content);
          console.log(nextIDchap);

        }
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // đặt vị trí hiển thị của trang về đầu tiên
  }, []);

  console.log(id,accID,Idnovel);
  axios
  .post(SaveChapter_URL, {
    chapterId: id,
    accountId: accID,
    novelId: Idnovel,
  })
  .then((response) => {
    if (response.data) {
      // Đăng nhập thành công, chuyển hướng đến trang chủ và lưu iduser vào cookies hoặc session
      console.log("da luu");
      // ReloadNavBar;
    } else {
      // Đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Đăng nhập không thành công');
    }
  })
  .catch((error) => {
  });


  
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
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              <Link to={`/novel/${Idnovel}`}>  {novelName} </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              style={{ textDecoration: "none", fontWeight: "bold" }}
              active
            >
              Chapter{chapterInfo.title}: {chapterInfo.title}
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* Dieu huong chapter */}
          <div className="button-nav-chap">
            {/* btn previer chap */}
            <button onClick={handleClickPreChapter} className="buttonRD" style={{ float: "left" }}>
              <i class="fa-solid fa-angle-left"></i>
              <span style={{fontWeight:"bold"}}>Chương trước </span>
            </button>

            {/* btn next chap */}
            <button  onClick={handleClickNextChapter}  className="buttonRD" style={{ float: "right" }}>
              <span style={{fontWeight:"bold"}} > Chương sau </span>
              <i
                style={{ marginLeft: "4px" }}
                class="fa-solid fa-angle-right"
              ></i>
            </button>
          </div>

          {/* area readding novel  */}
          <div className="novel-title">
            <h4> {chapterInfo.title} </h4>
          </div>
          { contentNovel && 
           <Introtext>   
                <div dangerouslySetInnerHTML={{ __html: contentNovel }}></div>
           </Introtext>  }
        

        </div>


    
        <div className="button-nav-chap-2">
          {/* btn nav  */}

          {/* btn previer chap */}
          <button
           onClick={handleClickPreChapter}
            className="buttonRD"
            style={{ float: "left" }}
          >
            <i class="fa-solid fa-angle-left"></i>
            <span style={{fontWeight:"bold"}} >Chương trước </span>
          </button>

          {/* btn next chap */}
          <button onClick={handleClickNextChapter} className="buttonRD" style={{ float: "right" }}>
            <span style={{fontWeight:"bold"}} >Chương sau </span>
            <i
              style={{ marginLeft: "4px" }}
              class="fa-solid fa-angle-right"
            ></i>
          </button>
        </div>

        {/* phan binh luan va de xuat truyen  */}
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
                <button className="cssbuttons-io" type="submit">
                  <span>Đăng</span>
                </button>
              </div>
            </form>
            <div className="comments">
              <SimpleBar style={{ maxHeight: "85vh" }}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </SimpleBar>
            </div>
          </div>

          <div className="newNovel">
            <div className="Cmt">
              <h3>Đề xuất cho bạn</h3>
            </div>
            <div> truyen moi ne</div>
            <div> truyen moi ne</div>
            <div> truyen moi ne</div>
          </div>
        </div>
        <Footer />
      </TransparentBanner>
    </ImageBanner>
  );
}
ReadingNovel.defaultProps = {
  novelid: "11111",
  novelTitle: "Minno do",
  novelContent: "dđ",
  chapterIndex: "111",
  chapterTitle: "Đại chiến cuối cùng",
};
export default ReadingNovel;
