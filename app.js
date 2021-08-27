//giphy search endpoint: https://api.giphy.com/v1/gifs/random
//giphy API key: kdT0YAHAnmTKEv6y7IWT1YWHDxSsdKgM
const giphyKey = 'kdT0YAHAnmTKEv6y7IWT1YWHDxSsdKgM';

// assign src url to image and append image to div
function appendGiphy(data) {
    let giphy = $('<img>', {src: data.data.images.original.url}).addClass('image');
    $('#giphy-container').append(giphy);

}

// send user input as search parameter to get random Giphy image
$('#search-form').submit(async function(e) {
    e.preventDefault();
    let userInput = $('input').val();
    $('#user-input').val('');
    const res = await axios.get('https://api.giphy.com/v1/gifs/random',
                                    {params: {
                                        api_key: giphyKey,
                                        tag: userInput
                                    }});
    appendGiphy(res.data);
})

// remove all images from div
$('#removeBtn').on('click', function(e) {
    e.preventDefault();
    $('#giphy-container').empty();
})
