import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonShowAll,
  ButtonShowAllReading,
  ContainerButton,
  ContainerRow1,
  ContainerRow1Column1,
  ContainerRow1Column2,
  ContainerRow1Column3,
  ContainerRow1Column4,
  ContainerRow2Column1,
  ContainerRow2Column2,
  ContainerRow4,
  ContainerUpdate,
  ContentnerRow4Title,
  ReadingContainer,
} from "./styleHome";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import {
  AuthName,
  Heading1,
} from "../../../components/TextField/TestComponents";
import { Icon } from "@iconify/react";
import CardHomeRecomended from "../../../components/card/CardRecommemded/CardHomeRecomended";
import CardHomeReading from "../../../components/card/CardReading/CardHomeReading";
import NewUpdateRowHomeStyle from "../../../components/NewUpdateRow/NewUpdateRowHome";
import { Button } from "@mui/material";
import "./home.css";
import Footer from "../../../parts/user/footer";
import axios from "../../../api/axios";
const HomeNewNoevl_URL = "/api/novels/";

function callApiNewNovelList() {
  return axios
    .get(HomeNewNoevl_URL)
    .then((response) => {
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

export default function HomePage(props) {
  const accID = props.accountID;
  const [newNovels, setNewNovels] = useState([]);
  const [readingNovels, setReadingNovels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newNovelList = await callApiNewNovelList();
      if (accID) {
        const readingNovelList = await callApiReadingNovelList(accID);
        console.log(readingNovelList);
        setReadingNovels(readingNovelList);
      }
      setNewNovels(newNovelList);
    }
    fetchData();
  }, []);
  const ListNovelRecomended = () => {
    {
      return (  newNovels &&
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
      return ( readingNovels &&
        readingNovels.map((novels, index) => (
          <CardHomeReading
            key={index}
            nameComic={novels.novelInfo.title}
            id={novels.novelId}
            chapterID={novels.chapterId}
            image={novels.novelInfo.coverLink}
            chaperNum ={novels.chapterInfo.index} 
            chaperReading ={novels.chapterInfo.index} 
          />
        )))
    }
  }
  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
        <TransparentBanner className="  ">
          <div className=" md:w-3/4 rounded-md shadow-lg md:my-32 md:mx-auto bg-slate-50">
            {/* Title  */}
            <div className="px-2 py-2 md:py-4 ">
              <div className=" md:flex ">
                <div className=" md:w-8/12  ">
                  <Heading1  > Truyện Mới</Heading1>
                  <ListNovelRecomended/>
                </div>
                <div className="md:w-4/12 md:px-2  ">
                  <Heading1> Đang Đọc</Heading1>
                  <div className=" py-3 rounded-md bg-slate-100 shadow-lg" > 
                  <ListNovelReading  /> 
                  </div> 
                </div>

              </div>

            </div>
            <div className=" "> </div>

          </div>
          {/* <Footer /> */}
        </TransparentBanner>
      </ImageBanner>
    </>
  );
}
