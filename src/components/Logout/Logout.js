import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("avatar");
    window.location.href = 'home'; // Thay đổi đường dẫn tương ứng
  
    return null;
}

export default Logout
