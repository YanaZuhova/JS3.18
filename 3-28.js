let user = {
    name: "Yana",
    age: 25,
    articles: [{ name: "React" }, { name: "JS" }, { name: "Cources" }],
};

function logUserArticles() {
    let userArticles = this.articles;

    userArticles.forEach((article, index) => {
        console.log(`Article ${index + 1} name is ${article.name}`);
    });
}

logUserArticles.call(user);

let UserLogArticles = logUserArticles.bind(user);

UserLogArticles();