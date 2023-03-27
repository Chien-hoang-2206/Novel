import { memo } from "react";
import { Container, Container2 } from "./typePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import BG from "./BG.webp";
import BG2 from "./bg2.jpg";
import BG3 from "./bg3.jpg";
import BG4 from "./bg4.jfif";
import PC from "./pc1.png";
import { Parallax } from "react-parallax";
import "./type.css";
import NavBar from "../../../parts/user/navBar";
import { Link } from "react-router-dom";
import Footer from "../../../parts/user/footer";
function welcomePage() {
  return (
    <>
      <NavBar />
      <Parallax strength={600} bgImage={BG3}>
        <div className="content">
          <div className="helleText">Hi, We're MeTruyenChu.</div>
          <div className="contentText">
            Chúng tôi là một nền tảng đọc và đăng tải truyện
          </div>
          <div className="text-content">
            Wattpad connects a global community of 90 million readers and
            writers through the power of story
          </div>
          <div className="container1">
            <Row>
              <Col sm={6}>
                <Button size="medium" color="success" variant="contained">
                  Đoc truyện
                </Button>
              </Col>
              <Col sm={6}>
                <Button size="medium" color="success" variant="contained">
                  Đăng truyện
                </Button>
              </Col>
            </Row>
          </div>
          <div className="ImagePC">
            <img src={PC} width="350" height="200" />
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={BG2}>
        <div className="content">
          <Container2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Wattpad</Accordion.Header>
                <Accordion.Body>
                  Thiết đế đẹp, có 1 page giới thiệu rõ ràng. Khi đọc truyện có
                  ứng dụng các mẫu thiết kế phù hợp giúp người đọc theo dõi được
                  tiến trình đọc truyện. Chức năng điều chỉnh font chữ, màu nền
                  không có. Có chức năng thư viện để lưu lại các đầu truyện ưa
                  thích.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>TruyenYY</Accordion.Header>
                <Accordion.Body>
                  Tông màu xanh, trắng khá dịu, mục header của trang bị tách
                  thành 2 hơi khó chịu. Nhiều truyện yêu cầu đăng nhập để đọc
                  được, không thể thay đổi cỡ, font chữ, màu nền tùy ý. Nhiều
                  chức năng bị giới hạn nếu không đăng nhập hoặc là người dùng
                  vip
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Thichtruyen</Accordion.Header>
                <Accordion.Body>
                  Màu trắng nền và xanh, vàng là chủ đạo. Tuy nhiên phối hợp hai
                  màu hơi sáng quá. Nhìn lâu có thể mỏi mắt. Chức năng điều
                  chỉnh font, cỡ chữ, màu nên là không có. Sau khi đăng nhập
                  cung cấp thêm chức năng tủ truyện để lưu lại các đầu truyện ưa
                  thích.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Sstruyen</Accordion.Header>
                <Accordion.Body>
                  Màu trắng sáng làm nền và màu xanh lá đậm cho các chi tiết,
                  tương đối hài hòa. Trong quá trình đọc truyện cho phép tùy
                  chỉnh màu nền, font, cỡ chữ.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Dtruyen</Accordion.Header>
                <Accordion.Body>
                  Không quá chói mắt tuy nhiên màu xanh chủ đạo lại đi cùng một
                  số component màu đỏ hoặc vàng sáng hơi khó chịu. Nhiều chương
                  truyện yêu cầu đăng nhập hoặc đăng ký để xem. Có chức năng
                  điều chỉnh font, cỡ chữ.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container2>
        </div>
      </Parallax>
      <Parallax strength={300} >
      <Footer />
      </Parallax>
    </>
  );
}
export default memo(welcomePage);
