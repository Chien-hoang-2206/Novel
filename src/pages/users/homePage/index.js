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
import factories from "../../../redux/app/factory";

export default function HomePage(props) {
  const accID = props.accountID;
  const [newNovels, setNewNovels] = useState([]);
  const [readingNovels, setReadingNovels] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const responseRecomendList = await factories.getNovelListHome();
      const newNovelList = responseRecomendList?.novelList
      setNewNovels(newNovelList);
      setloading(false)
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (accID) {
        const responseReadinglist = await factories.getReadingNovelList(accID);
        const newList = responseReadinglist?.historyList
        setReadingNovels(newList);
      }
      setloading(false)
    }
    fetchData();
  }, [accID]);

  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
        <TransparentBanner >
          {loading === false ? (
            <div className="  md:w-5/6 sm:w-5/6 sm:mx-auto rounded-md shadow-lg md:my-32 md:mx-auto bg-slate-50 mt-1">
              {/* Title  */}
              <div className="px-2 md:py-2 md:mx-4 ">
                <div className=" md:flex">
                  <div className="md:w-8/12 sm:w-100">
                    <Heading1 style={{ maxHeight: 30 }} > Truyện Mới</Heading1>
                    <div className="flex flex-wrap ">
                      {
                        newNovels.length > 0 ? (
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
                          ))

                        ) : (
                          <p>Loading...</p>
                        )
                      }
                    </div>
                  </div>
                  <div className=" md:w-4/12 md:px-2 ">
                    <Heading1> Đang Đọc</Heading1>
                    {
                      (readingNovels &&
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
