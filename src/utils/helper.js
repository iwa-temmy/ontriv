import axios from "axios";
import moment from "moment";
import html2canvas from "html2canvas";
import printJs from "print-js";
import jsPDF from "jspdf";
import createNotification from "./Notification";

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
  return moment(date).format("MM/DD/YYYY");
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
      <div className="list-client-tag-pending text-center d-flex align-items-center justify-content-center">
        <div
          className="status-tag-circle"
          style={{ backgroundColor: "#ED8000" }}
        ></div>
        <span>{status}</span>
      </div>
    );
  } else if (status === "Paid") {
    return (
      <div className="list-client-tag-paid text-center d-flex align-items-center justify-content-center">
        <div
          className="status-tag-circle"
          style={{ backgroundColor: "#57D9A3" }}
        ></div>
        <span>{status}</span>
      </div>
    );
  } else {
    return (
      <div className="list-client-tag-overdue text-center d-flex align-items-center justify-content-center">
        <div
          className="status-tag-circle"
          style={{ backgroundColor: "#FF2154" }}
        ></div>
        <span>{status}</span>
      </div>
    );
  }
};

export const invoicePaymentStatus = (status) => {
  if (status === "Pending") {
    return (
      <>
        <span className="d-flex justify-content-end status">Status</span>
        <div className="d-flex w-100 justify-content-end">
          {/* <MdPending className="ms-auto" color="#ffc107" size="24px" /> */}
          <h6 className="invoice-modal__status invoice-modal__pending mt-2 pl-2">
            {status}
          </h6>
        </div>
      </>
    );
  } else if (status === "Paid") {
    return (
      <>
        <span className="d-flex justify-content-end status">Status</span>
        <div className="d-flex w-100 justify-content-end">
          <h6 className="invoice-modal__status invoice-modal__paid mt-2 pl-2">
            {status}
          </h6>
        </div>
      </>
    );
  } else {
    return (
      <>
        <span className="d-flex justify-content-end status">Status</span>
        <div className="d-flex w-100 justify-content-end">
          <h6 className="invoice-modal__status invoice-modal__overdue mt-2 pl-2">
            {status}
          </h6>
        </div>
      </>
    );
  }
};

export const pdfWithPrintJs = (printable, documentTitle, type = "image") => {
  // const cssText = `
  //   background-color: #ffffff
  // `;
  try {
    html2canvas(document.getElementById(printable), {
      logging: true,
      allowTaint: true,
      letterRendering: 1,
      useCORS: true,
      backgroundColor: "white",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const config = {
        type,
        documentTitle,
        printable: imgData,
        base64: true,
        // targetStyle: [cssText],
        // maxWidth: 800,
      };
      printJs(config);
    });
  } catch (e) {
    console.log("pdfWithPrintJs", e);
    console.log(
      "Failed!",
      "PDF generation failed.\n Page might be too large.\n",
      "error"
    );
  }
};

export const downloadPdf = (printable) => {
  const input = document.getElementById(printable);
  html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(
    (canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("invoice.pdf");
    }
  );
};

export const copierHelper = (text) => {
  if (text) {
    navigator.clipboard.writeText(text);

    createNotification("success", "Invoice Link copied");
  } else {
    createNotification("error", "Failed to copy to clipboard, try again later");
  }
};

export const calculateVat = (total, vat) => {
  return (vat / 100) * total;
};

export const truncateText = (string = "", length = "30", ending = "...") => {
  if (!(string && length)) {
    return;
  }
  return length > string.length
    ? string
    : string.substring(0, length - ending.length) + ending;
};