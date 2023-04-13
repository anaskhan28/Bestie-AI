const envVariables = process.env;


async function getCompletion(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 50,
      model:"text-davinci-003",
      temperature: 0.5,
      frequency_penalty: 0.8,
    })
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}

document.addEventListener("keydown", async (event) => {
  
  const activeElement = document.activeElement;
  if (
    (activeElement && activeElement.isContentEditable) ||
    (activeElement &&
      (activeElement.nodeName.toUpperCase() === "TEXTAREA" ||
       activeElement.nodeName.toUpperCase() === "INPUT") &&
      (activeElement.getAttribute("aria-label") === "Text editor for creating content" ||
       activeElement.getAttribute("aria-label") === "Message Body") &&
      activeElement.getAttribute("id") === ":r2")
  ) {
 
    if (event.key === "Enter" && !event.shiftKey) {
      const inputText = activeElement.innerText.trim();
     
      if (inputText.startsWith("bestie:")) {
        const prompt = inputText.replace("bestie:", "").trim();
        console.log("Prompt: ", prompt);

        
        const response = await getCompletion(prompt);
        activeElement.innerHTML = response;
      }
    }
  }
});