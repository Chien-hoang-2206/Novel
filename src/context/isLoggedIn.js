const isLoggedIn = () => {
  const iduser = sessionStorage.getItem('username');
  if (iduser) {
    // Người dùng đã đăng nhập
    return true;
  } else {
    // Người dùng chưa đăng nhập
    return false;
  }
};

export default isLoggedIn;
