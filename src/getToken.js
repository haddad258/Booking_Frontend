import Cookies from "js-cookie";

const getToken = () => {

  try {
    return Cookies.get("token");
  } catch {
    return null;
  }
};
export default getToken;
