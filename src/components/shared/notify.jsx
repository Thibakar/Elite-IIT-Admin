/* eslint-disable class-methods-use-this */
import { toast } from "react-toastify";
import "./notify.scss";

export function showToast(props) {
  let delay = 1000;
  switch (props.type) {
    case "Success":
      delay = 500000;
      break;
    case "Error":
      delay = 0;
      break;
    case "Information":
      delay = 5000;
      break;
    case "Warning":
      delay = 5000;
      break;
    default:
      delay = 5000;
  }

  toast(() => props.message, {
    position: "bottom-right",
    autoClose: (delay === 0) ? false : delay,
    progressClassName: props.type,
    pauseOnHover: true,
    draggable: true,
    className: "notify",
  });
}


class Notify {
  Success(message) {
    showToast({ type: "Success", message });
  }

  Warning(message) {
    showToast({ type: "Warning", message });
  }

  Error(message) {
    showToast({ type: "Error", message });
  }

  Information(message) {
    showToast({ type: "Information", message });
  }
}

export default new Notify();
