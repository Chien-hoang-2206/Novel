import React, { useState } from "react";
import "./NewNovel.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { v4 } from "uuid";
import { storage } from "../../../firebase";
import LoginModal from "../LoginModal/LoginModal";
import axios from "../../../api/axios";
const PostNovel = "/api/novels/";

function NewNovel(props) {
  const accID = sessionStorage.getItem("accID") || "" ;
  if (!accID) {
    <LoginModal />
  }
  const [nameNovel, setNameNovel] = useState("");
  const [content, setContent] = useState("");
  const [isTranslated, setisTranslated] = useState(true);
  const [contentTranslate, setContentTranslate] = useState("");
  const [types, setTypes] = useState([]);
  const [AuthName, setAuthName] = useState(sessionStorage.getItem("username"));
  const [valuetype, setValueType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  async function convertOCR() {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', imageUrls[0]);
    const options = {
      method: 'POST',
      url: 'https://ocr43.p.rapidapi.com/v1/results',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'be4e2f28a7mshb59f609cd0a1af0p19977fjsnaf6acd1c335a',
        'X-RapidAPI-Host': 'ocr43.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      // eslint-disable-next-line
      setContent(response.data.results[0].entities[0].objects[0].entities[0].text);
    } catch (error) {
      console.error(error);
    }
  }
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });

    });
    convertOCR();
  };



  const handleTranslate = () => {
    const url = "https://rapid-translate-multi-traduction.p.rapidapi.com/t";

    const headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a8b719b14fmsh597de01bbf11361p16687cjsnfab1472786fd',
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
    };
    let data ;
    if (isTranslated) {
        data = {
        from: 'vi-VN',
        to: 'EN',
        q: contentTranslate,
      };
    }
    else{
      data = {
        from: 'EN',
        to: 'vi-VN',
        q: contentTranslate,
      };
    }

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response.data[0]);
        setContent(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    setisTranslated(!isTranslated);

  }
  const handleAddType = () => {
    const newType = document.getElementById("inputType").value; // lấy giá trị từ ô input
    setValueType("");
    setTypes([...types, newType]); // thêm giá trị mới vào mảng và cập nhật lại state
  };
  const handleInputChange = (e) => {
    setValueType(e.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    axios
      .post(PostNovel, {
        title: nameNovel,
        intro: content,
        types: types,
        author: AuthName,
        accountPostedId: accID,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.location.href = "/post-novel"; // Thay đổi đường dẫn tương ứng
          alert(
            "Đăng truyện thành công, hệ thống đang phê duyệt truyện của bạn"
          );
        } else {
          // Đăng nhập thất bại, hiển thị thông báo lỗi
          alert("Đăng truyện không thành công");
        }
      })
      .catch((error) => {
        console.log(error);

        alert(error.response.data.error);
      });
      console.log(nameNovel);
      console.log(content);
      console.log(types);
      console.log(AuthName);
      console.log(accID);
  };

  const handleChange = (value) => {
    setContent(value);
    setContentTranslate(content);
  };


  return (
    <div className="box-post-novel">
      <div className="postnv">
        <h2> Đăng truyện </h2>
      </div>
      <div className="tems-of-use">
        <h6>
          {" "}
          Hãy đọc <a href="/"> Điều Khoản Đăng Truyện </a>&{" "}
          <a href="/"> Hướng Dẫn Đăng Truyện </a>để truyện của bạn được duyệt
          (công khai)
        </h6>
      </div>

      <div className="Input-row">
        <form onSubmit={handleSubmit}>
          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Tên Truyện</h8>
            </div>
            <div className="col-input">
              <input
                name="nameNovel"
                type="text"
                className="input-name-novel"
                onChange={(e) => setNameNovel(e.target.value)}
                id="nameNovel"
                placeholder={"Nhập tên truyện"}
              />
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-file"></i>
              <h8>Giới thiệu</h8>
            </div>
            <div className="col-input">
              <ReactQuill value={content} onChange={handleChange} />

              {/* {isTranslated === true ? (
                <input
                  type="button"
                  className="translater-btn"
                  name="OCR"
                  value="VN-EN"
                  style={{
                    backgground: "transparent",
                    paddingLeft: "5px",
                    width: "70px",
                  }}
                  onClick={handleTranslate}
                />
              ) : (
                <input
                  type="button"
                  className="translater-btn"
                  name="OCR"
                  value="EN-VN"
                  style={{
                    backgground: "transparent",
                    paddingLeft: "5px",
                    width: "70px",
                  }}
                  onClick={handleTranslate}
                />
              )}
              <input
                type="file"
                className="ocr-import"
                name="OCR"

                style={{
                  backgground: "transparent",
                  paddingLeft: "5px",
                  width: "150px",
                }}
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />

              <input
                type="button"
                className="translater-btn2"
                name="upload"
                style={{
                  backgground: "transparent",
                  marginLeft: "25px",
                  width: "100px",
                }}
                value="Upload"
                onClick={uploadFile}
              /> */}
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-file"></i>
              <h8>Thể Loại</h8>
            </div>

            <div className="col-input-btn">
              <input
                style={{ flex: "4" }}
                type="text"
                className="input-name-novel"
                value={valuetype}
                onChange={handleInputChange}
                name="inputType"
                id="inputType"
                placeholder={"Nhập tên thể loại"}
              />
              <button
                type="button"
                className="button-add-type"
                style={{ flex: 2 }}
                onClick={handleAddType}
              >
                Thêm
              </button>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type"></div>

            <div className="col-input-btn">
              {types.map((type, index) => (
                <button key={index} >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "5px" }} className="row-sm">
            <div className="col-type"></div>

            <div className="col-input-btn">
              <div className="col-type">
                {" "}
                <a href="https://truyenhdx.com/guide/tags/">
                  {" "}
                  Một số thể loại{" "}
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Loại Truyện</h8>
            </div>
            <div className="col-input">
              <select
                id="option-select"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">-- Chọn loại --</option>
                <option value="Tự sáng tác">Tự sáng tác</option>
                <option value="Sưu tầm">Sưu tầm</option>
                <option value="Dịch">Dịch</option>
              </select>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-book-journal-whills"></i>
              <h8>Tác Giả</h8>
            </div>
            <div className="col-input">
              {selectedOption === "Tự sáng tác" ? (
                <input
                  type="text"
                  value={AuthName}
                  name="AuthName"
                  id="AuthName"
                />
              ) : (
                <input
                  type="text"
                  name="AuthName"
                  onChange={(e) => setAuthName(e.target.value)}
                  id="AuthName"
                  placeholder={"Nhập tên tác giả"}
                />
              )}
            </div>
          </div>
          <div className="post-novel">
            <button type="submit" class="btn">
              Đăng Truyện
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNovel;
