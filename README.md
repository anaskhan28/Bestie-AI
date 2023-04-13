# Bestie AI
<div style="text-align:center">
  <img src="https://media.giphy.com/media/H2GX5Ik1ILy5q/giphy.gif" alt="Setup">
</div>
Bestie AI is a browser extension that allows users to extract text from various platforms such as LinkedIn or Twitter just by asking Bestie. It is built using React, JavaScript, Webpack, and ChatGPT API.

## How it works
Bestie AI leverages ChatGPT API to provide users with relevant text snippets based on their queries. The extension is activated by typing "bestie:" in the address bar followed by the user's query. Bestie AI then sends the query to ChatGPT API and receives a response containing the relevant text snippets. The extension then displays the extracted text snippets in a pop-up window.

## Setup
To use Bestie AI, follow these steps:

- Clone the repository to your local machine.
- Install the dependencies by running npm install.
- Create a .env file and add your ChatGPT API key in the following format: API_KEY=<your_api_key>.
- Build the project by running npm run build.
- Load the unpacked extension by going to chrome://extensions in your Chrome browser and enabling Developer Mode. Then, click on "Load unpacked" and select the build     folder generated in step 4.
## Usage
To use Bestie AI, follow these steps:

- Open a new tab in your Chrome browser.
- Type "bestie:" in the address bar followed by your query.
- Press Enter.
- Bestie AI will display the extracted text snippets in a pop-up window.
## Limitations
Bestie AI currently only supports LinkedIn and Twitter. The extension may also not be able to extract text from certain pages due to the variability of website layouts.
