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
                // get data
                let articleTitle = document.createElement('h1')
                let articleSummary = document.createElement('p')
                articleTitle.innerHTML = article.title;
                articleSummary.innerHTML = article.summary;
                let mainContainer = document.getElementById('main-container');
                mainContainer.appendChild(articleTitle);
                mainContainer.appendChild(articleSummary);
                console.log("Data loaded!")
            })
        }
        fetchData()
     