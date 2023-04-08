import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { ContainerSlide, ContentCarousel, ImagCarousel } from "./CaroselStyle";
import {  NovelName, NumFeeling } from "../TextField/TestComponents";
import SimpleBar from "simplebar-react";

function Carosel() {
  return (
    <div className="containerCarousel">
      <h1 className="headingCarousel">Các truyện khác</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
    
      <SwiperSlide>
          <NovelName style={{ textAlign: "center", marginLeft: "10vh", color: "#C58940" }}>
            Meo moe Meo Meo
          </NovelName>
          <ContainerSlide>
            <ImagCarousel src="image/demoImg.webp" alt="slide_image" />
            <ContentCarousel>
            <SimpleBar  autoHide={true}  style={{ margin: "5vh", maxHeight: "30vh" }}>
              <NumFeeling>
                Nomal Cầu tiến vào linh khí khôi phục thời đại, nhân loại mở ra
                dị năng thức tỉnh! Giang Nam bắt đầu thức tỉnh mạnh nhất hàng
                vỉa hè hệ thống, đại lực nước thuốc? Giải độc đậu nành nhỏ? May
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến
                đây cầu mua. Giang Nam: "Ta đối với tiền ức điểm đều không có
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến

              </NumFeeling>
              </SimpleBar>

            </ContentCarousel>
          </ContainerSlide>
       
        </SwiperSlide>
    
    
        <SwiperSlide>
          <NovelName style={{ textAlign: "center", marginLeft: "10vh", color: "#C58940" }}>
            Meo moe Meo Meo
          </NovelName>
          <ContainerSlide>
            <ImagCarousel src="image/demoImg.webp" alt="slide_image" />
            <ContentCarousel>
            <SimpleBar  scrollbarMaxSize={"10px"} style={{ maxHeight: "30vh" }}>
              <NumFeeling>
                Nomal Cầu tiến vào linh khí khôi phục thời đại, nhân loại mở ra
                dị năng thức tỉnh! Giang Nam bắt đầu thức tỉnh mạnh nhất hàng
                vỉa hè hệ thống, đại lực nước thuốc? Giải độc đậu nành nhỏ? May
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến
                đây cầu mua. Giang Nam: "Ta đối với tiền ức điểm đều không có
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến

              </NumFeeling>
              </SimpleBar>

            </ContentCarousel>
          </ContainerSlide>
       
        </SwiperSlide>

         
        <SwiperSlide>
          <NovelName style={{ textAlign: "center", marginLeft: "20vh", color: "#C58940" }}>
            Meo moe Meo Meo
          </NovelName>
          <ContainerSlide>
            <ImagCarousel src="image/demoImg.webp" alt="slide_image" />
            <ContentCarousel>
            <SimpleBar  autoHide={true} style={{ maxHeight: "30vh" }}>
              <NumFeeling>
                Nomal Cầu tiến vào linh khí khôi phục thời đại, nhân loại mở ra
                dị năng thức tỉnh! Giang Nam bắt đầu thức tỉnh mạnh nhất hàng
                vỉa hè hệ thống, đại lực nước thuốc? Giải độc đậu nành nhỏ? May
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến
                đây cầu mua. Giang Nam: "Ta đối với tiền ức điểm đều không có
                mắn anh đào? Cung không đủ cầu! Thế giới đỉnh cấp thần hào, nhà
                giàu nhất, nhân khí streamer, cường giả tối đỉnh nhao nhao đến

              </NumFeeling>
              </SimpleBar>

            </ContentCarousel>
          </ContainerSlide>
       
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carosel;
