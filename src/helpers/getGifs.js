export const getGifs = async ({ category }) => {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=TM1YIrx4I8iY7YSYJdpSOwy4Bd4EUy9S&q=${category}&limit=5`
  );
  const { data } = await url.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    url: gif.images.downsized_medium.url,
    title: gif.title
  }));
  return gifs;
};
