import requests


base_url = 'https://api.spaceflightnewsapi.net/v4/'

def get_latest_articles():
    
    parameters = {
        'limit': '8'
    }
    
    articles_url = f"{base_url}articles/"
    response = requests.get(articles_url, params=parameters)
    data = response.json()
    
    articles_list = []
    
    # loop though json response for articles
    for article in data['results']:
        
        # creates a new dict every loop
        new_dict = {}
        
        # gets the data from title and summary keys from json response and puts it in a new key in the new dict
        new_dict['title'] = article['title']
        new_dict['summary'] = article['summary']
        new_dict['url'] = article['url']
        new_dict['news_site'] = article['news_site']
        new_dict['img_url'] = article['image_url']
        
        # appends new dict to a list to make a list of dictionaries
        articles_list.append(new_dict)
        
    return articles_list
    

        

    

