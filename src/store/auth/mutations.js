import persistent from "@/services/persistent-store";

const setToken = (state, { token }) => {
  state.isLogged = true;
  persistent.set("larachat_token", token);
};

export default { setToken };
