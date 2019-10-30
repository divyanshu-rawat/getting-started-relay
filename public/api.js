const API = {
  async fetchLinks() {
    const links = await fetch("/data/links");
    return links.json();
  }
};

export default API;
