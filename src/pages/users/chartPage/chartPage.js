import { Link, Outlet } from "react-router-dom";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import "./ChartPage.css";
import React, { useEffect, useState } from "react";
import { LinkChart } from "./ChartStyle";

function ChartPage() {
  return (
    <ImageBanner style={{ backgroundImage: "url('/bgBanner.jpg')" }}>
      <TransparentBanner>
        <ContainerPageContent>
          <div className="container-chart">
            <div className="col-1">
              <div className="col-1-sticky">
                <LinkChart to="/charts/trend">
                  <div className="icon-name">
                    <i class="fa-solid fa-arrow-trend-up"></i>
                    <h5 className="text-tab">Thịnh hành</h5>
                  </div>
                </LinkChart>

                <LinkChart to="/charts/read">
                  <div className="icon-name">
                    <i class="fa-solid fa-book"></i>
                    <h5 className="text-tab">Đọc nhiều</h5>
                  </div>
                </LinkChart>

                <LinkChart to="/charts/like">
                  <div className="icon-name">
                    <i class="fa-brands fa-gratipay"></i>
                    <h5 className="text-tab">Yêu thích</h5>
                  </div>
                </LinkChart>

                <LinkChart to="/charts/bookmark">
                  <div className="icon-name">
                    <i class="fa-solid fa-bookmark"></i>
                    <h5 className="text-tab">Đánh dấu nhiều</h5>
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
  );
}

export default ChartPage;
