import persistent from "../../services/persistent-store";
export default {
  isLogged: persistent.get("token") != null
};
