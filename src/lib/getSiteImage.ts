const getSiteImage = async (url: string = "https://bipo.tech/") => {
  const img = await fetch(
    `https://api.microlink.io/?url=${url}&screenshot=true&meta=false&delay=3000`
  );
  const res = await img.json();
  if (res.status === "success") {
    const screenshot = res.data.screenshot.url;
    return screenshot;
  }
  return " ";
};

export { getSiteImage };
