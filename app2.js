const api = "api_key=9ff1c8daa2ffbe78abb2db511c1d8b3a"

const poster = "https://image.tmdb.org/t/p/w600/"

//---Movie Genres and IDs---//
const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]







// CHECK TO SEE IF API gives you back a list of movies when you search a genre.
// Michael is available
// Can still send veronica cod
//genre might only give you back a genre id not a list of movies







//----AJAX search bar-----//
$('form').on('submit', (event) => {
    event.preventDefault();

    const movie = $('input').val();


    promise = $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?query=${movie}&${api}`
        // url:`https://api.themoviedb.org/3/search/movie?${api}&query=${movie}`

    });
    
//find or filter to target the genre array to change the genre_ids (find = the first element that matches it)

    promise.then(
        (data)=>{
            console.log(data);
            $('#title').html(data.results[0].title);
            $('#year').html(data.results[0].release_date);
            $('#poster').html(`<img src="https://image.tmdb.org/t/p/w185/${data.results[0].poster_path}">`)
            $('#genre').html(data.results[0].genre_ids[0])
        }
    );

})


//----Image Carousel Buttons----//
$('#action').on('click', (event) => {
    event.preventDefault();
    
    const promise = $.ajax({
        url:`https://api.themoviedb.org/3/discover/movie?api_key=9ff1c8daa2ffbe78abb2db511c1d8b3a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    })
//for loop with math.random * based on the length of the data that comes back

    promise.then(
        (data)=>{
            $('#movie1').html(data.results[0].title);
            // $('#year').html(data.release_date);
            // $('#poster').html(`<img src="${data.poster_path}">`)
        }
    )
    })


$('#comedy').on('click', (event) => {
    event.preventDefault();
    
    const promise = $.ajax({
        url:`http://api.themoviedb.org/3/genre/movie/list?${api}&page=1&with_genre=35` //this only gives an id and name not a list of movies
    })

    promise.then(
        (data)=>{
            $('#title').html(data.title);
            $('#year').html(data.release_date);
            $('#Poster').html(`<img src="${data.poster_path}">`)
        }
    )
    })

$('#drama').on('click', (event) => {
    event.preventDefault();
    
    const promise = $.ajax({
        url:`http://api.themoviedb.org/3/genre/movie/list?${api}&page=1&with_genre=18`
    })

    promise.then(
        (data)=>{
            $('#title').html(data.title);
            $('#year').html(data.release_date);
            $('#poster').html(`<img src="${data.poster_path}">`)
        }
    )
    })

$('#romantic').on('click', (event) => {
    event.preventDefault();
    
    const promise = $.ajax({
        url:`http://api.themoviedb.org/3/genre/movie/list?${api}&page=1&with_genre=10749`
    })

    promise.then(
        (data)=>{
            $('#title').html(data.title);
            $('#year').html(data.release_date);
            $('#poster').html(`<img src="${data.poster_path}">`)
        }
    )
    })

//----Image Carousel Navigation function----//

// $('.next').on('click', function(){
//     var currentImg = $('.active');
//     var nextImg = currentImg.next();

//     if(nextImg.length){
//         currentImg.removeClass('active').css('z-index', -10);
//         nextImg.addClass('active').css('z-index', 10)
//     }
// });

// $('.prev').on('click', function(){
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();

//     if(prevImg.length){
//         currentImg.removeClass('active').css('z-index', -10);
//         prevImg.addClass('active').css('z-index', 10)
//     }
    
// });

let currentImgIndex = 0;
let highestIndex = $('.slider-inner').children().length -1;

$('.next').on('click', () => {
    $('.slider-inner').children().eq(currentImgIndex).css("display", "none");

if (currentImgIndex < highestIndex) {
    currentImgIndex++;
} else {
    currentImgIndex= 0;
}

$('.slider-inner').children().eq(currentImgIndex).css("display", "block");
})

$('.prev').on('click', () => {
    $('.slider-inner').children().eq(currentImgIndex).css("display", "none");

if (currentImgIndex > 0) {
    currentImgIndex--;
} else {
    currentImgIndex= highestIndex;
}

$('.slider-inner').children().eq(currentImgIndex).css("display", "block");
})

// $('.prev').on('click', () => {
//     console.log("Prev was clicked");
//         var currentImg = $('.active');
//         var prevImg = currentImg.prev();
    
//         if(prevImg.length){
//             currentImg.removeClass('active').css('z-index', -10);
//             prevImg.addClass('active').css('z-index', 10)
//         }
        
//     });




///////////To Do List(post presentation)//////////////

//Create git hub repo on github and push project. the project folder has git init but go to github and click + to connect the project to github
//host project on vercel (just link github repo) make it public
//send link on vercel to Ira

