async function searchGif() {
    try {
        q = document.querySelector('#search');

        result = await axios.get("http://api.giphy.com/v1/gifs/search",
            { 
                params: { 
                    q: q.value, 
                    api_key: token
                },  
                // headers: { 'Access-Control-Allow-Origin': '*' } 
            }
        );

        console.log(result);

    } catch(e) {
        console.log("request failed")
        console.log(e);
    }
}

submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    searchGif();
})