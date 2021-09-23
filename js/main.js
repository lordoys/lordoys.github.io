console.log('asdf');

fetch('http://api.mediastack.com/v1/news?access_key=8277b9eb4c6f2d12399af635c59a6337&languages=en')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
