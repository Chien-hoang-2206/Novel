function Logout() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("avatar");
    sessionStorage.removeItem("accID");
    window.location.href = 'home'; // Thay đổi đường dẫn tương ứng
  
    return null;
}

export default Logout
