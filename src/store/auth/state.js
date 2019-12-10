import persistent from "@/services/localstorage";
export default {
  isLogged: persistent.get("larachat_token") != null,
  user: {}
};
