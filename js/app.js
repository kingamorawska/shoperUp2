// const postLoaderButton = document.querySelector(".post--loader");
// const hiddenPost = document.querySelector(".post.hidden");

// postLoaderButton.addEventListener("click", function () {
//     hiddenPost.classList.remove("hidden");
// });

/* projekt zaliczeniowy */
const elements = [
    {
        name: "John Doe",
        from: "Szczecin, Polska",
        imgSrcName: "https://via.placeholder.com/128",
        imgSrcArticle: "https://via.placeholder.com/1000",
        likes: "Liczba polubień: 2",
        content: "Will Smith: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! "
    },

    {
        name: "Lisa",
        from: "Kraków, Polska",
        imgSrcName: "https://via.placeholder.com/128",
        imgSrcArticle: "https://via.placeholder.com/1000",
        likes: "Liczba polubień: 2",
        content: "Will Smith: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! "
    },

    {
        name: "Cristiano",
        from: "Kraków, Polska",
        imgSrcName: "https://via.placeholder.com/128",
        imgSrcArticle: "https://via.placeholder.com/1000",
        likes: "Liczba polubień: 2",
        content: "Will Smith: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! "
    },

    {
        name: "Cristiano",
        from: "Kraków, Polska",
        imgSrcName: "https://via.placeholder.com/128",
        imgSrcArticle: "https://via.placeholder.com/1000",
        likes: "Liczba polubień: 2",
        content: "Will Smith: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus! "
    }
];

const root = document.querySelector("#posts__container");
elements.map(function (element, index) {
    const article = document.createElement("article");
    article.setAttribute("class", "post");

    const articleHeader = document.createElement("div");
    articleHeader.setAttribute("class", "post__header");

    const articleDetails = document.createElement("div");
    articleDetails.setAttribute("class", "user-details");

    const articleDetailsImg = document.createElement("div");
    articleDetailsImg.setAttribute("class", "user-details__img");

    const articleDetailsImgSquare = document.createElement("div");
    articleDetailsImgSquare.setAttribute("class", "image-square image-square--small is-active");
    // articleDetailsImgSquare.setAttribute("class", "image-square--small");
    // articleDetailsImgSquare.setAttribute("class", "is-active");

    const articleDetailsImgSquareImg = document.createElement("img");
    articleDetailsImgSquareImg.setAttribute("src", elements[index].imgSrcName);

    const articleDetailsContent = document.createElement("div");
    articleDetailsContent.setAttribute("class", "user-details__content");

    const h3 = document.createElement("h3");
    h3.innerText = elements[index].name;

    const pWhere = document.createElement("p");
    pWhere.innerText = elements[index].from;

    const postContent = document.createElement("div");
    postContent.setAttribute("class", "post__content");


    const postContentImg = document.createElement("div");
    postContentImg.setAttribute("class", "post__img");

    const articleImg = document.createElement("img");
    articleImg.setAttribute("src", elements[index].imgSrcArticle);

    const postContentDetails = document.createElement("div");
    postContentDetails.setAttribute("class", "post__details");

    const postComments = document.createElement("div");
    postComments.setAttribute("class", "post__comments");


    const pLike = document.createElement("p");

    const strong = document.createElement("strong");
    strong.innerText = elements[index].likes;

    const postCommentsComment = document.createElement("p");
    postCommentsComment.setAttribute("class", "post__comments-comment");
    postCommentsComment.innerText = elements[index].content;

    article.appendChild(articleHeader);
    articleHeader.appendChild(articleDetails);
    articleDetails.appendChild(articleDetailsImg);
    articleDetailsImg.appendChild(articleDetailsImgSquare);
    articleDetailsImgSquare.appendChild(articleDetailsImgSquareImg);
    articleDetails.appendChild(articleDetailsContent);
    articleDetailsContent.appendChild(h3)
    articleDetailsContent.appendChild(pWhere);
    
    article.appendChild(postContent)
    postContent.appendChild(postContentImg);
    postContentImg.appendChild(articleImg);

    
    postContent.appendChild(postContentDetails);
    postContentDetails.appendChild(postComments);
    postComments.appendChild(pLike);
    pLike.appendChild(strong);
    postComments.appendChild(postCommentsComment);

    root.appendChild(article);


});



/* End projekt zaliczeniowy */