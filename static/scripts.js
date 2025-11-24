 function fetchData()
        {   
            fetch("/get_data")
            .then(response => response.json())
            .then(data => displayData(data)
            )
        }

        function displayData(data) {
    const mainContainer = document.getElementById('main-container'); // the row container

    data.forEach(article => {
        // create elements
        let articleTitle = document.createElement('h5');
        let articleSummary = document.createElement('p');
        let articleImg = document.createElement('img');
        let articleBtn = document.createElement('a');

        // set content
        articleTitle.innerHTML = article.title;
        articleSummary.innerHTML = article.summary;
        articleImg.src = article.img_url || 'https://via.placeholder.com/300x180';
        articleImg.alt = article.title;
        articleBtn.innerText = 'Read More';
        articleBtn.href = article.url || '#';

        // add Bootstrap classes
        articleImg.classList.add('card-img-top');
        articleTitle.classList.add('card-title');
        articleSummary.classList.add('card-text');
        articleBtn.classList.add('btn', 'btn-primary');

        // create card elements
        let card = document.createElement('div');
        card.classList.add('card', 'h-100'); // h-100 makes all cards equal height
        card.style.width = '18rem';

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // append title, summary, button to card body
        cardBody.appendChild(articleTitle);
        cardBody.appendChild(articleSummary);
        cardBody.appendChild(articleBtn);

        // append image and card body to card
        card.appendChild(articleImg);
        card.appendChild(cardBody);

        // wrap card in a Bootstrap column
        let col = document.createElement('div');
        col.classList.add('col-sm-6', 'col-md-4', 'col-lg-3'); // responsive columns
        col.appendChild(card);

        // append column to the main row container
        mainContainer.appendChild(col);
    });

    console.log("Data loaded!");
}
 fetchData()
     