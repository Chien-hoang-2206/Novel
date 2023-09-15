/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import {
  Heading1,
} from "../../../components/TextField/TestComponents";
import CardHomeRecomended from "../../../components/card/CardRecommemded/CardHomeRecomended";
import CardHomeReading from "../../../components/card/CardReading/CardHomeReading";
import "./home.css";
import Footer from "../../../parts/user/footer";
import axios from "../../../api/axios";
const HomeNewNoevl_URL = "/api/novels/";



export default function HomePage(props) {
  const accID = props.accountID;
  const [newNovels, setNewNovels] = useState([]);
  const [readingNovels, setReadingNovels] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const newNovelList = await callApiNewNovelList();
      if (accID) {
        const readingNovelList = await callApiReadingNovelList(accID);
        setReadingNovels(readingNovelList);
      }
      setNewNovels(newNovelList);
    }
    fetchData();
  }, [accID]);
  const ListNovelRecomended = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      return (newNovels &&
        newNovels.map((novels, index) => (
          <CardHomeRecomended
            key={index}
            id={novels._id}
            image={novels.coverLink}
            nameComic={novels.title}
            type1={novels.types[0]}
            type2={novels.types[1]}
            content={novels.intro}
            auth={novels.author}
          />
        )))
    }
  }
  const ListNovelReading = () => {
    {
      return (readingNovels &&
        readingNovels.map((novels, index) => (
          <div className=" py-3  md:ml-5 rounded-md bg-slate-100 shadow-md" >
          <CardHomeReading
            key={index}
            accountID={accID}
            nameComic={novels.novelInfo.title}
            id={novels.novelId}
            chapterID={novels.chapterId}
            image={novels.novelInfo.coverLink}
            chaperNum={novels.chapterInfo.index}
            chaperReading={novels.chapterInfo.index}
          />
          </div>
        )))
    }
  }
  function callApiNewNovelList() {
    return axios
      .get(HomeNewNoevl_URL)
      .then((response) => {
        setloading(false);
        return response.data.novelList;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function callApiReadingNovelList(id) {
    return axios
      .get(`http://localhost:5000/api/history/${id}`)
      .then((response) => {
        return response.data.historyList;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
        <TransparentBanner >
          {loading === false ? (
            <div className="  md:w-3/4 rounded-md shadow-lg md:my-32 md:mx-auto bg-slate-50">
              {/* Title  */}
              <div className="px-2 py-2 md:py-4 md:mx-4 ">
                <div className=" md:flex ">
                  <div className=" md:w-8/12   ">
                    <Heading1  > Truyện Mới</Heading1>
                    <div className="  md:bg-slate-100 md:shadow-md">
                      <ListNovelRecomended />
                    </div>
                  </div>
                  <div className=" md:w-4/12 md:px-2  ">
                    <Heading1> Đang Đọc</Heading1>
                      <ListNovelReading />
              
                  </div>
                </div>
              </div>
            </div>
          ) : (<></>)}
        <Footer />
        </TransparentBanner>
      </ImageBanner>
    </>
  );
}
