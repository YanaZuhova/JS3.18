let user = {
    name: "Yana",
    age: 25,
    articles: [{ name: "React" }, { name: "JS" }, { name: "Cources" }],
};

for (const key in user) {
    console.log(key);
}

const logUsersArticles = (user) => {
    let userArticles = user.articles;

    for (let index = 0; index < userArticles.length; index++) {
        const article = userArticles[index];
        console.log(`Article ${index + 1} name is ${article.name}`);
    }
};

logUsersArticles(user);