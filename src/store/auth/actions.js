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

const forgot = async (context, data) => {
  return await api
    .post("/auth/forgot/password", data)
    .then(() => {
      return { success: data.message };
    })
    .catch(({ response }) => {
      return Promise.reject(response.data);
    });
};

const reset = async (context, data) => {
  return await api
    .post(`/auth/reset/password?token=${data.token}`, data)
    .then(() => {
      return { success: data.message };
    })
    .catch(({ response }) => {
      return Promise.reject(response.data);
    });
}
export default { register, login, loginSocial, forgot, reset };
