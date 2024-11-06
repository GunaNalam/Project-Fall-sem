import requests
from bs4 import BeautifulSoup


# Making a GET request
r = requests.get('https://project-fall-sem.vercel.app/')

print(r)
# check status code for response received
# success code - 200

# Parsing the HTML
soup = BeautifulSoup(r.content, 'html.parser')
print(soup.prettify())
