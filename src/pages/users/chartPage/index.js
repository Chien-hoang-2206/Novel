import { Outlet } from "react-router-dom";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import "./ChartPage.css";
import React from "react";
import { LinkChart } from "./ChartStyle";

const ChartPage = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 736) {
    return (
          <div className="">
            <div className="px-1">
              <div className="col-1-sticky">
                <LinkChart to="/charts/trend">
                  <div className="icon-name">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <h5 className="text-tab">Thịnh hành</h5>
                  </div>
                  <h5 className="text-tab">Thịnh hành</h5>
                </LinkChart>

                <LinkChart to="/charts/read">
                  <div className="icon-name">
                    <i className="fa-solid fa-book"></i>
                    <h5 className="text-tab">Đọc nhiều</h5>
                  </div>
                  <h5 className="text-tab">Đọc nhiều</h5>
                </LinkChart>

                <LinkChart to="/charts/like">
                  <div className="icon-name">
                    <i className="fa-brands fa-gratipay"></i>
                    <h5 className="text-tab">Yêu thích</h5>
                  </div>
                    <h5 className="text-tab">Yêu thích</h5>
                </LinkChart>

                <LinkChart to="/charts/bookmark">
                  <div className="icon-name">
                    <i className="fa-solid fa-bookmark"></i>
                    <h5 className="text-tab">Đánh dấu nhiều</h5>
                  </div>
                    <h5 className="text-tab">Đánh dấu nhiều</h5>
                </LinkChart>
              </div>
            </div>

            <div className="px-1 py-2">
              <Outlet />
            </div>
          </div>
    )
  }
  else {
    return (
      <div>
        <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
          <TransparentBanner>
            <ContainerPageContent>
              <div className="container-chart">
                <div className="col-1">
                  <div className="col-1-sticky">
                    <LinkChart to="/charts/trend">
                      <div className="icon-name">
                        <i className="fa-solid fa-arrow-trend-up"></i>
                        <h5 className="text-tab">Thịnh hành</h5>
                      </div>
                    </LinkChart>

                    <LinkChart to="/charts/read">
                      <div className="icon-name">
                        <i className="fa-solid fa-book"></i>
                        <h5 className="text-tab">Đọc nhiều</h5>
                      </div>
                    </LinkChart>

                    <LinkChart to="/charts/like">
                      <div className="icon-name">
                        <i class="fa-solid fa-star"></i>
                        <h5 className="text-tab">Điểm số</h5>
                      </div>
                    </LinkChart>

                    <LinkChart to="/charts/bookmark">
                      <div className="icon-name">
                        <i className="fa-brands fa-gratipay"></i>
                        <h5 className="text-tab">Lượt đánh giá</h5>
                      </div>
                    </LinkChart>
                  </div>
                </div>

                <div className="col-2">
                  <Outlet />

                </div>
              </div>
            </ContainerPageContent>
          </TransparentBanner>
        </ImageBanner>
      </div>
    )
  }
}

export default ChartPage
