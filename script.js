const answers = {
    "ok thank you": "Wellcome",
    "thank you": "Wellcome",
    "how are you": "I am doing great, thank you!",
    "what is your name": "My name is Zeeshan Ahmed.",
    "what is your father name": "My Father-name is Habib Ur Rehman.",
    "what is the capital of pakistan": "The capital of Pakistan is Islamabad.",
    "what is the national language of pakistan": "Urdu",
    "who is the founder of pakistan": "Quaid-e-Azam Muhammad Ali Jinnah",
    "what is the national flower of pakistan": "Jasmine (Chambeli)",
    "when did pakistan gain independence": "14th August 1947",
    "who was the first prime minister of pakistan": "Liaquat Ali Khan",
    "what is the national bird of pakistan": "Chukar Partridge",  
    "which is the largest province of pakistan by area": "Balochistan",
    "what is the currency of pakistan": "Pakistani Rupee (PKR)",
    "which river is the longest in pakistan": "The Indus River",
    "in which year did pakistan become a nuclear power": "1998",
    "what is the national sport of pakistan": "Field Hockey",
    "which is the highest peak in pakistan" : "K2 (Mount Godwin-Austen)",
    "hello": "Hello again! How can I assist you today?",
    "i need your help": "Of course! What do you need help with?",
    "who made you": "I was created by a web developer Zeeshan Ahmed. They designed and trained me using a lot of data to help with various tasks and conversations.",
    "where was pakistan's first nuclear power plant installed":"Karachi",
    "what is pakistan's largest airline": "pakistan Inter National Airlines",
    "where is pakistan's first geoscientific laboratory": "Islamabad",
    "when was pakistan's first women's university established":"1989",
    "where is pakistan's largest coal mine": "Quetta",
    "who was pakistan's first chief justice": "Abdul Rasheed",
    "which is pakistan's second largest city": "Lahore",
    "which is pakistan's highest mountain range": "kara karam",
    "what is the name of pakistan's first medical college": "Nishtar Medical College",
    "which is pakistan's smallest city": "Jhelum",
    "which is pakistan's highest mountain": "K2",
    "what is your country name": "My country Name Is Pakistan",
    "what is ai": "AI, or Artificial Intelligence, refers to the development of computer systems capable of performing tasks that typically require human intelligence. These tasks can include learning, problem-solving, reasoning, understanding language, recognizing patterns, and even making decisions. For More Information Go To Chat GPT Thank You!"
};

// Initialize speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US'; // You can set this to another language like 'ur-PK' for Urdu
recognition.interimResults = false;

// Start listening
function startListening() {
    recognition.start();
    document.getElementById('question').innerText = "Listening...";
}

// Handle the speech recognition result
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById('question').innerText = `${transcript}`;

    // Get the answer based on the transcript
    let answer = answers[transcript] || "Sorry, I don't know the answer to that.";
    document.getElementById('answer').innerText = `${answer}`;

    // Speak the answer
    speak(answer);
};

// Handle recognition errors
recognition.onerror = (event) => {
    document.getElementById('question').innerText = "Error occurred: " + event.error;
};

// Function to speak the answer
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}