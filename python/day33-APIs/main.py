import requests

response = requests.get(url='http://api.open-notify.org/iss-now.json')
print(response.json())

response = requests.get(url='https://api.kanye.rest')
response.raise_for_status()
print(response.json())

MY_LAT= 33.442543
MY_LON=-112.038163
params = {
    'lat': MY_LAT,
    'lng': MY_LON,
    'formatted': 1
}
response = requests.get('https://api.sunrise-sunset.org/json', params=params)
data = response.json()

print(data['results']['sunset'])