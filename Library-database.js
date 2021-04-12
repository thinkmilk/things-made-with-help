// Parent class for all media in the library
class Media {
  constructor(title,status,rating) {
    this._title = title;
    this._isCheckedOut = status;
    this._ratings = [rating];
  }

// returns the title of the media, regardless of type
  get title() {
   return console.log(this._title);
  }

// returns the status of the media, regardless of type
  get checkoutStatus() {
    if (this._isCheckedOut === true){
      return console.log(`${this._title} is checked out already!`)
    } else {
      return console.log(`${this._title} is still in stock!`);
    };
  }

// returns ratings, if any, regardless of type
  get ratings() {
    return console.log(this._ratings);
  }

// gives the average rating on the specific media
  get averageRating() { 
     let average = this._ratings.reduce((rating,nextRating) => { return rating + nextRating });
     average /= this._ratings.length;
     return console.log(`The average rating is: ${average} out of 10`);
  }

// changes the checkout status of the media
 set toggleCheckoutStatus(status) {
   if (status === 'in') {
    this._isCheckedOut = true;
    console.log(`${this._title} checkout status has been changed to: ${status}!`);
    } else if (status === 'out') {
    this._isCheckedOut = false;
    console.log(`${this._title} checkout status has been changed to: ${status}!`);
    } else { console.log(`Invalid status! Please try either 'in' or 'out'`) };
  }

// lets the media user give a rating out of 10
  addRating (rating) {
        if (this._ratings.includes(0) === true) {
            this._ratings.pop();               };
        if (rating >= 1 && rating <= 10) {
          this._ratings.push(rating);
          console.log(`You Rated ${this._title} a ${rating} out of 10`);
        } else {
          console.log(`Please give a rating from 1 to 10`);
        };
  }
};


// All media types have 5 variable parameters that must be set to
// the  title,  checkout status( ** either 'in' or 'out' ** ),
// user ratings( If there isn't any yet, this can be 0 ),  creator's name,
// and some number regarding the: amount of pages, or the movie's runtime 
// or the amount of songs in the album


// Book class for adding new books to the library
class Book extends Media {
  constructor(title,status,ratings,author,pages) {
    super(title,status,ratings);
    this._author = author;
    this._pages = pages;
  }
get author() {
  return console.log(this._author);
}
get pages() {
  return console.log(`${this._pages} pages`);
}
};


// Movie class for adding new movies to the library
class Movie extends Media {
  constructor(title,status,ratings,director,runtime) {
    super(title,status,ratings);
    this._director = director;
    this._runtime = runtime;
  }
get director() {
  return console.log(this._director);
}
get runtime() {
  return console.log(`${this._runtime} minutes`);
}
};


// CD class for adding new CDs to the library
class CD extends Media {
  constructor(title,status,ratings,artist,songs) {
    super(title,status,ratings);
    this._artist = artist;
    this._songs = songs;
  }
get artist() {
  return console.log(this._artist);
}
get songs() {
  return console.log(`${this._songs} songs`);
}
};


/* to add new media, create a variable with the number of the media and type, and set it equal to the type of media you would like to add it to, for example; 
const book101 = new Book(title,checkout status,user ratings,author,number of pages) 
** The title, and so on, entered into the system must be written in the same order as above **    */

// CDs in library stock

  const libCD1 = new CD('HELP EVER HURT NEVER','in',0,'Fujii Kaze',11);

//


// Books in library stock

  const libBook1 = new Book('The Idiot','out',0,'Fyodor Dostoyevsky',660);

//


// Movies in library stock

  const libMovie1 = new Movie('Akira','in',0,'Otomo Katsuhiro',124);

//



// Features for librarian
libMovie1.title;
libMovie1.director;
libMovie1.runtime;
libMovie1.toggleCheckoutStatus = 'out';

console.log("------------------");

libCD1.title;
libCD1.artist;
libCD1.songs;
libCD1.checkoutStatus;
libCD1.addRating(10);
libCD1.ratings;
libCD1.averageRating;

console.log("------------------");

libBook1.title;
libBook1.author;
libBook1.pages;
libBook1.checkoutStatus;
