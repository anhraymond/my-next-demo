const sitemap = () => {
  const pages = ["", "/about", "/users", "imageoptimize"];

  return pages.map((page) => ({
    url: page,
    lastModified: new Date().toISOString(),
  }));
};

export default sitemap;
