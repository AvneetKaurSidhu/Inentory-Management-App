export const getData = async (url) => {
    return await fetch(url).then((response) => response.json());
  };