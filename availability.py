import requests
import time

def check_website_performance(url):
    try:
        start_time = time.time()
        response = requests.get(url, timeout=10)
        end_time = time.time()

        response_time = end_time - start_time

        if response.status_code == 200:
            print(f"Website {url} is up and running!")
            print(f"Response Time: {response_time:.2f} seconds.")
            
            # Optional: Check for specific content in the response
            if 'expected content' in response.text:
                print("Expected content found.")
            else:
                print("Expected content not found.")

        else:
            print(f"Website {url} returned status code {response.status_code}.")

    except requests.ConnectionError:
        print(f"Website {url} is currently down or not accessible.")
    except requests.Timeout:
        print(f"Request to {url} timed out.")

check_website_performance('http://localhost:4200/')
