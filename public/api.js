const API = {
  async fetchLinks() {
    return await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ links { _id,title,url } }" })
    })
      .then(res => res.json())
      .then(res => res.data.links);
  }
};

export default API;
