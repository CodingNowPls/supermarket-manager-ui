import {Message} from "element-ui";

/*给用户弹出相应的提示*/
export function popup(msg, type) {
  switch (type) {
    case "warning":
      Message.warning(msg);
      break;
    case "error":
      Message.error({message: msg, duration: 5000, showClose: true});
      break;
    case "info":
      Message.info(msg);
      break;
    default:
      Message.success(msg);
  }
}
