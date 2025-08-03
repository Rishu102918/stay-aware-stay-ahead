document.addEventListener("DOMContentLoaded", () => {
  const domains = {
    Technology: {
      articles: [
        { title: "The Rise of AI", link: "https://builtin.com/artificial-intelligence" },
        { title: "Quantum Computing Explained", link: "https://quantum.country/qcvc" },
      ],
      books: [
        { title: "Life 3.0 by Max Tegmark", link: "https://www.goodreads.com/book/show/34272565-life-3-0" },
        { title: "AI Superpowers by Kai-Fu Lee", link: "https://www.goodreads.com/book/show/38242135-ai-superpowers" },
      ],
    },
    Science: {
      articles: [
        { title: "CRISPR and Gene Editing", link: "https://www.nature.com/articles/d41586-020-00551-4" },
        { title: "James Webb Telescope Discoveries", link: "https://webbtelescope.org/news" },
      ],
      books: [
        { title: "A Brief History of Time", link: "https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time" },
        { title: "The Selfish Gene", link: "https://www.goodreads.com/book/show/61535.The_Selfish_Gene" },
      ],
    },
    "Social & Commercial": {
      articles: [
        { title: "The Attention Economy", link: "https://hbr.org/2020/05/the-attention-economy" },
        { title: "Crypto and the New Economy", link: "https://www.coindesk.com/" },
      ],
      books: [
        { title: "Freakonomics", link: "https://www.goodreads.com/book/show/1202.Freakonomics" },
        { title: "The Tipping Point", link: "https://www.goodreads.com/book/show/2612.The_Tipping_Point" },
      ],
    },
    Random: {
      articles: [
        { title: "The Mandela Effect", link: "https://www.verywellmind.com/what-is-the-mandela-effect-5196226" },
        { title: "Strange Phenomena in Nature", link: "https://www.livescience.com/strange-nature" },
      ],
      books: [
        { title: "The Book of General Ignorance", link: "https://www.goodreads.com/book/show/17718.The_Book_of_General_Ignorance" },
        { title: "Ripley’s Believe It or Not!", link: "https://www.goodreads.com/book/show/320.978.Ripley_s_Believe_It_or_Not" },
      ],
    }
  };

  const container = document.querySelector(".container");

  Object.entries(domains).forEach(([domain, resources]) => {
    const domainDiv = document.createElement("div");
    domainDiv.classList.add("domain");

    const heading = document.createElement("h2");
    heading.textContent = domain;
    domainDiv.appendChild(heading);

    const articleList = document.createElement("ul");
    resources.articles.forEach(article => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>`;
      articleList.appendChild(li);
    });

    const bookList = document.createElement("ul");
    resources.books.forEach(book => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${book.link}" target="_blank">${book.title}</a>`;
      bookList.appendChild(li);
    });

    domainDiv.innerHTML += `<h3>Articles:</h3>`;
    domainDiv.appendChild(articleList);

    domainDiv.innerHTML += `<h3>Books:</h3>`;
    domainDiv.appendChild(bookList);

    container.appendChild(domainDiv);
  });
});
