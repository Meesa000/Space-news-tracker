 function fetchData()
        {   
            fetch("/get_data")
            .then(response => response.json())
            .then(data => displayData(data)
            )
        }

        function displayData(data)
        {
            data.forEach(article =>
            {
                
                let articleTitle = document.createElement('h3')
                let articleSummary = document.createElement('p')
                let articleImg = document.createElement('img');

                articleTitle.innerHTML = article.title;
                articleSummary.innerHTML = article.summary;
                // articleImg.src = article.img_url;

                // gets the main container of the page to append each card to
                let mainContainer = document.getElementById('main-container');

                let card = document.createElement('div');
                card.classList.add('article-card')

                // append card to main container
                mainContainer.appendChild(card);

                // append info to each newly created card
                card.appendChild(articleImg);
                card.appendChild(articleTitle);
                card.appendChild(articleSummary);

                console.log("Data loaded!");
            })
        }
        fetchData()
     