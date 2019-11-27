import persistent from "@/services/persistent-store";
export default {
  isLogged: persistent.get("larachat_token") != null,
  user: {}
};
