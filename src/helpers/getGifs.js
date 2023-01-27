export const getGifs = async ({ category }) => {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=TM1YIrx4I8iY7YSYJdpSOwy4Bd4EUy9S&q=${category}&limit=5`
  );
  const { data } = await url.json();
  const gifs = data.map((gif) => ({
    title: gif.id,
    id: gif.id,
    img: gif.images.downsized_medium.url,
  }));
  console.log(gifs)
  return gifs;
};
