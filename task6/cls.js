
class Movie{
    constructor(title,studio,rating){
       this.title=title;
       this.studio=studio;
       this.rating= rating || "PG";
    }
    getMovies(){
        console.log(`
        The title of the movie:${this.title}
        The studio that made the movie:${this.studio}
        The rating of the movie:${this.rating}
        `);
    }

    getPC(title,studio,ratings){
        var array= new Array(3);
        array[0]=title;
        array[1]=studio;
        array[2]=ratings;
        return array;
    }
}
//a.
const movies=new Movie("Jilar","AVV","PC15"); 
movies.getMovies();
//b.
const movies1=new Movie("files","avv",)
movies1.getMovies();
//c.
const movies2=new Movie("tamilmovie","sun","PC14");
movies2.getMovies();
let p=[];
p=movies2.getPC("tamilmovie","sun","PC14");
console.log(p);
//d.
const movies3=new Movie("Casino Royale","Eon Productions","PC13"); 
movies3.getMovies();



