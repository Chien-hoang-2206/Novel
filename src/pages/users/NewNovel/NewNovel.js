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
import axios from "axios";
import { storage } from "../../../firebase";
import LoginModal from "../LoginModal/LoginModal";

const PostNovel = "/api/novels/";

function NewNovel(props) {
  const accID = props.accountID;
  if (!accID) {
    <LoginModal/>
  }
  const [nameNovel, setNameNovel] = useState("");
  const [content, setContent] = useState("");
  const [isTranslated, setisTranslated] = useState(true);
  const [contentTranslate, setContentTranslate] = useState("");
  const [types, setTypes] = useState([]);
  const [AuthName, setAuthName] = useState("");
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
      setContent(response.data. results[0].entities[0].objects[0].entities[0].text);
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
    if (isTranslated) {
      const url = "https://api.openai.com/v1/completions";
      const API_KEY = "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"; //
      const value = "Translate this into English '" + contentTranslate + "'";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      };

      const data = {
        model: "text-davinci-003",
        prompt: value,
        max_tokens: 700,
        temperature: 0,
      };

      axios
        .post(url, data, { headers: headers })
        .then((response) => {
          setContent(response.data.choices[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
      setisTranslated(!isTranslated);
    } else {
      const url = "https://api.openai.com/v1/completions";
      const API_KEY = "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"; //
      const value = "Dịch sang tiếng Việt  '" + contentTranslate + "'";

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      };

      const data = {
        model: "text-davinci-003",
        prompt: value,
        max_tokens: 700,
        temperature: 0,
      };
      axios
        .post(url, data, { headers: headers })
        .then((response) => {
          setContent(response.data.choices[0].text);
        })
        .catch((error) => {
          console.log(error);
        });
      setisTranslated(!isTranslated);
      // setContent(contentTranslate);
    }
  };
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
        alert(error.response.data.error);
      });
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
                onChange={(e) => setNameNovel(e.target.value)}
                id="nameNovel"
                placeholder={"Nhập tên truyện"}
              />
              <div></div>
            </div>
          </div>

          <div className="row-sm">
            <div className="col-type">
              <i class="fa-solid fa-file"></i>
              <h8>Giới thiệu</h8>
            </div>
            <div className="col-input">
              <ReactQuill value={content} onChange={handleChange} />

              {/* <button  className="ocr-import"  onClick={handleImportOcR}    > OCR   </button> */}
              {/* <input type="button"  className="ocr-import"  style={{ paddingLeft:"5px", width:"50px"}}  onClick={handleImportOcR}   value="OCR" /> */}
              {isTranslated === true ? (
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
              />
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
                value={valuetype}
                onChange={handleInputChange}
                name="inputType"
                id="inputType"
                placeholder={"Nhập tên thể loại"}
              />
              <input
                type="button"
                style={{ flex: 2 }}
                onClick={handleAddType}
                value="Thêm"
              />
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
                  value={"chienhoang"}
                  onChange={(e) => setAuthName(e.target.value)}
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
              {" "}
              Đăng Truyện
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewNovel;
