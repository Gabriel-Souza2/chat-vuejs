import persistent from "@/services/localstorage";

const setToken = (state, { token }) => {
  state.isLogged = true;
  persistent.set("larachat_token", token);
};

export default { setToken };
