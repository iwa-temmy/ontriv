import axios from "axios";
import moment from "moment";

const BASE_URL = "https://ontriv.herokuapp.com";

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  // console.log(token);
  if (token) {
    // axios.defaults.headers.common['X-CSRFToken'] = token;
    // axios.defaults.headers.common['Authorization'] = token;
    Axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    Axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  } else {
    // delete axios.defaults.headers.common['X-CSRFToken'];
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export const setCurrentUser = (data) => {
  try {
    if (data) {
      localStorage.setItem("ontrivUserToken", data.access_token);
      localStorage.setItem(
        "ontrivCurrentUser",
        JSON.stringify(Object.assign(data.user, data.profile))
      );
    } else {
      localStorage.removeItem("ontrivUserToken");
      localStorage.removeItem("ontrivCurrentUser");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error);
  }
};

export const getAuthToken = () => {
  return localStorage.getItem("ontrivUserToken");
};

export const calculateTotal = (items) => {
  let itemAmountsArray = [];
  let total = 0;
  if (items?.length) {
    itemAmountsArray = items?.map((item) => parseInt(item?.amount));
    total = itemAmountsArray?.reduce((a, b) => a + b);
  }

  return total;
};

export const formatInvoiceIssueDate = (date) => {
  return moment(date).format("DD-MM-YYYY");
};

export const stringDateFormat = (date) => {
  return moment(date).format("DD MMMM, YYYY");
};

export const formatNumber = (num) => {
  if (!num) {
    return;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatAmount = (num) => {
  if (num) {
    const initial = parseFloat(num).toFixed(2);
    return initial.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const paymentStatus = (status) => {
  if (status === "Pending") {
    return (
      <div className="list-client-tag-pending text-center d-flex align-items-center justify-content-center w-75">
        <div
          className="status-tag-circle"
          style={{ backgroundColor: "#ED8000" }}
        ></div>{" "}
        <span>{status}</span>
      </div>
    );
  } else if (status === "Paid") {
    return (
      <div className="list-client-tag-paid text-center d-flex align-items-center justify-content-center w-75">
        <div
          className="status-tag-circle"
          style={{ backgroundColor: "#57D9A3" }}
        ></div>{" "}
        <span className="text-white">{status}</span>
      </div>
    );
  } else {
    return (
      <div className="list-client-tag text-center d-flex align-items-center justify-content-center w-75">
        <div className="status-tag-circle"></div>{" "}
        <span className="text-white">{status}</span>
      </div>
    );
  }
};
