import React from "react";
import { useState } from "react";
import "./EdiChaptertModel.css";
import ReactQuill from "react-quill";
import { useLocation, useParams } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import factories from "../../../redux/app/factory";
function EdiChaptertModel() {
  const { id } = useParams();
  const { state } = useLocation();
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split("/");
  const novelID = urlParts[urlParts.length - 3];
  console.log("novel");
  console.log(novelID);
  let chapterInfo;
  if (state && state.chapter) {
    chapterInfo = state.chapter;
  } else {
    chapterInfo = "no";
  }
  const [nameChap, setNameChapter] = useState("");
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    // axios
    //   .post(PostNovel, {
    //     title: nameNovel,
    //     intro: content,
    //     types: types,
    //     author: AuthName,
    //     accountPostedId: accID,
    //   })
    //   .then((response) => {
    //     console.log(response.data)
    //     if (response.data) {
    //       window.location.href = "/post-novel"; // Thay đổi đường dẫn tương ứng
    //       alert("Đăng truyện thành công, hệ thống đang phê duyệt truyện của bạn");

    //     } else {
    //       // Đăng nhập thất bại, hiển thị thông báo lỗi
    //       alert("Đăng truyện không thành công");
    //     }
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.error);
    //   });
  };

  async function fetchData(data) {
    try {
      const response = await factories.addChapter(data);
      if (response.newChapter) {
        alert("Đăng chương thành công");
      }
    } catch (error) {
      alert("Đăng chương không thành công");
    }
  }

  const handleSubmitAddChapter = async (e) => {
    e.preventDefault();
    const data = {
      title: nameChap,
      content: content,
      novelId: novelID,
    };
    fetchData(data);
  };

  return (
    <div>
      <h4>Chỉnh sửa chương</h4>
      <div className="box-edit-chapter">
          <form onSubmit={handleSubmitAddChapter}>
            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-book-journal-whills"></i>
                <h8>Tên chương</h8>
              </div>
              <div className="col-input">
                <input
                  name="nameChap"
                  onChange={(e) => setNameChapter(e.target.value)}
                  id="nameChap"
                  placeholder={"Nhập tên tập truyện "}
                />
                <div></div>
              </div>
            </div>

            <div className="row-sm">
              <div className="col-type">
                <i class="fa-solid fa-file"></i>
                <h8>Nội dung chương</h8>
              </div>
            <div className="col-input">
                <ReactQuill
                  value={content}
                  placeholder="Nhập nội dung"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row-save-chapter">
              <button type="submit" className="save-chapter">
                Lưu
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default EdiChaptertModel;
