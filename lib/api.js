const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async() => {
    const res = await fetch(
        `https://api.pexels.com/v1/curated?page=11&per_page=20`, {
            headers: {
                Authorization: API_KEY,
            },
        }
    );
    const responseJson = await res.json();
    return responseJson.photos;
};

//For Photos Search
export const getqueryPhotos = async(query) => {
    const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}`, {
            headers: {
                Authorization: API_KEY,
            },
        }
    );
    const responseJson = await res.json();
    return responseJson.photos;
};