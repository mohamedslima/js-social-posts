// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// ****BONUS**

//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Olga Demina > OD).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/310/150",
        "author": {
            "name": "Fabio Rossi",
            "image": "https://picsum.photos/50"
        },
        "likes": 40,
        "created": "2020-11-21"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/320/150",
        "author": {
            "name": "Lorenzo Luchini",
            "image": "https://picsum.photos/60"
        },
        "likes": 85,
        "created": "2016-06-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/300/160",
        "author": {
            "name": "Anna Grand",
            "image": "https://picsum.photos/55"
        },
        "likes": 12,
        "created": "2022-01-25"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://picsum.photos/300/160",
        "author": {
            "name": "Mohamed Slima",
            "image": "https://picsum.photos/55"
        },
        "likes": 152,
        "created": "2022-02-22"
    }
];

// Milestone 2

const postsContainer = document.getElementById("container");

posts.forEach(post => {
    // creo elemento DOM
    const createdPost = createPostElement(post);
    console.log(createdPost);

    postsContainer.innerHTML += createdPost;
});

// milestone 3
// al clik tasto mi piace


// -salvare in array separato
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button, index) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        // -cambiare colore button
        this.classList.add("like-button--liked");
        // prelevo post cliccato tramite indice
        const clickedPost = posts[index];
        const clickedPostId = clickedPost.id;
        const likeCounter = document.getElementById(`like-counter-${clickedPostId}`);
        let likesNumber = parseInt(likeCounter.textContent);
        likesNumber = likesNumber + 1;
        likeCounter.textContent = likesNumber;
    });
});
 

// FUNCTION
/**
 * Description
 * @param {object} postObject -> oggetto con i dati da inserire
 * @returns {any} elemento HTML
 */

function createPostElement(postObject) {
    const {id, content, author, media, likes, created} = postObject;
    const postElement = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="${author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;

        return postElement;
}
