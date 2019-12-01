import api from "@/services/api";

const register = async (context, data) => {
  return await api
    .post("/auth/register", data)
    .then(({ data }) => {
      context.commit("setToken", data);
      return { success: "Registration completed successfully" };
    })
    .catch(({ response }) => {
      return Promise.reject(response.data);
    });
};

const login = async (context, data) => {
  return await api
    .post("/auth/login", data)
    .then(({ data }) => {
      context.commit("setToken", data);
      return { success: "login successful" };
    })
    .catch(({ response }) => {
      return Promise.reject(response);
    });
};

const loginSocial = async (context, type) => {
  return await api.get(`/auth/social/login/${type}`).then(({ data }) => {
    window.location.href = data.url;
  });
};
export default { register, login, loginSocial };
