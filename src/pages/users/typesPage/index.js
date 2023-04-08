import { memo } from "react";
import "./typeSearch.css";
import {
  ContainerPageContent,
  ImageBanner,
  TransparentBanner,
} from "../NovelPage/NovelElement";
import Footer from "../../../parts/user/footer";
import {
  Heading1,
  Heading2,
  TitleText,
} from "../../../components/TextField/TestComponents";
import ButtonTypes from "../../../components/Button/ButtonTypes/ButtonTypes";
import ButtonChoosedType from "../../../components/Button/ButtonChoosedType/ButtonChoosedType";
import DropdownSort from "../../../components/Dropdown/DropdownSort/DropdownSort";
import CardNovelTypesSearch from "../../../components/card/CardNovelTypesSearch/CardNovelTypesSearch";

function typesPage() {
  return (
    <>
      <ImageBanner style={{ backgroundImage: "url('image/bgBanner.jpg')" }}>
        <TransparentBanner>
          <ContainerPageContent>
            <div className="box-page">
              <div className="col-type">
                <div className="choose">
                  <TitleText>Đã chọn</TitleText>
                  <div className="choosed-type">
                    <ButtonChoosedType type="Tloai2" />
                    <ButtonChoosedType type="Tloai2" />
                    <ButtonChoosedType type="Tloai2" />
                  </div>
                </div>
                <div className="type-choose">
                  <TitleText> Thể loại </TitleText>
                  <div className="type">
                    <ButtonTypes type="Thefloa i1" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                    <ButtonTypes type="Theloai5" />
                  </div>
                </div>
                <div className="status">
                  <TitleText> Tình trạng </TitleText>
                  <div className="type">
                    <ButtonTypes type="Hoàn thành" />
                    <ButtonTypes type="Đang ra" />
                  </div>
                </div>
                <div className="view">
                  <TitleText> Thuộc tính</TitleText>
                  <div className="type">
                    <ButtonTypes type="Nam" />
                    <ButtonTypes type="Nữ" />
                    <ButtonTypes type="Ngôi thứ ba" />
                  </div>
                </div>
                <div className="hot-novel">
                  {" "}
                  <TitleText>Hot</TitleText>
                </div>
              </div>
              <div className="col-sort-novel">
                <div className="sort">
                  <DropdownSort
                    title="Mới đăng"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Lượt đọc"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Đánh giá"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Bình luận"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Số chương"
                    item1="Chua doc"
                    item2="da doc"
                    item3="da d doc"
                  />
                  <DropdownSort
                    title="Cất giữ"
                    item1="Chua doc"
                    item2="da doc"
                  />
                </div>
                <div className="novel-info">
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                  <CardNovelTypesSearch />
                </div>
              </div>
            </div>
          </ContainerPageContent>
        </TransparentBanner>
        <Footer />
      </ImageBanner>
    </>
  );
}
export default memo(typesPage);
