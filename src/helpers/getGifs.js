//HTTP Request
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KMV5ik2Clab9dhNAzRCefsOsnOWHu2GI&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}