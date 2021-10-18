async function searchGif() {
    try {
        q = document.querySelector('#search');

        const result = await axios.get("http://api.giphy.com/v1/gifs/search",
            { 
                params: { 
                    q: q.value, 
                    api_key: token
                },  
            }
        );
        
        return result;

    } catch(e) {
        console.log("request failed")
        console.log(e);
    }
}


async function addGifImage(e) {
    e.preventDefault();

    // search for gif, create img, and append to gifs section
    const response = await searchGif();
    const newImg = document.createElement('img');
    newImg.setAttribute('src', response.data.data[0].images.original.url);  // use the first result
    const gifSection = document.querySelector('#gifs');
    gifSection.append(newImg);
}


// main
submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", async (e) => {addGifImage(e)});