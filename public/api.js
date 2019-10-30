const API = {
  async fetchlinks() {
    const links = await fetch("/data/links");
    return links.json();
  }
};

export default API;
