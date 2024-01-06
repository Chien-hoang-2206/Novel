import { useState, useRef, useEffect } from "react";
import "./DropdownSort.css";
function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e, item) => {
    e.stopPropagation();
    setIsOpen(false);
    // Tự động reload trang tìm kiếm với thể loại đã chọn
    window.location.href = `https://example.com/search?type=${item}`;
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return [ref, isOpen, toggleDropdown, handleItemClick];
}

function DropdownSort(props) {
  const [ref, isOpen, toggleDropdown, handleItemClick] = useDropdown();

  return (
    <div className="dropdown" onClick={toggleDropdown} ref={ref}>
      <span>{props.title}</span>
      <i className="fa-sharp fa-solid fa-arrow-down-wide-short" style={{marginLeft: "4px"}}></i>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={(e) => handleItemClick(e, " {props.item1}")}>
            {props.item1}
          </li>
          <li onClick={(e) => handleItemClick(e, "{props.item2}")}>
            {props.item2}
          </li>
          <li onClick={(e) => handleItemClick(e, "{props.item3}")}>
            {props.item3}
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownSort;
