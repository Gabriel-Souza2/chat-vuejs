export default {
  set(key, value) {
    window.sessionStorage.setItem(key, value);
    return this.get(key);
  },

  get(key) {
    return window.sessionStorage.getItem(key) || null;
  },

  setObj(key, value) {
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  },

  getObj(key) {
    return JSON.parse(window.sessionStorage.getItem(key) || null);
  },

  remove(key) {
    window.sessionStorage.removeItem(key);
  },

  getAndRemove(key) {
    let value = this.get(key);
    this.remove(key);
    return value;
  }
};
