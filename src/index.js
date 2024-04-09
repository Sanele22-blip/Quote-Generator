const quotes = [
    { text: "The joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.", author: "President Russel M. Nelson" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Success is not a good teacher, failure makes you humble.", author: "Shah Rukh Khan" },
    { text: "Love recognizes no barriers.", author: "Maya Angelou" },
    { text: "United we stand, divided we fall.", author: "Aesop" },
    { text: "What doesn't kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "Without pain, without sacrifice, we would have nothing.", author: "Fight Club" },
    { text: "We win and lose together.", author: "Lewis Hamilton" },
    { text: "A huble person is more likely to be self-confident...a person with humility knows how much they are loved .", author: "Cornelius Plantinga" },
    { text: "Failure is success in progress.", author: "Albert Einstein" },
    { text: "If you are neutral in situations of injustice, you have chosen the side of the oppressor.", author: "Desmond Tutu" },
    { text: "Unity is vision it must have been part of the process of learning to see.", author: "Henry A" },
    { text: "Jealousy is a mental cancer.", author: "B. C. Forbes" },
    { text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.", author: "Martin Luther King, Jr" },
    { text: "Just because it's explainable, doesn't mean it's excusable.", author: "Anonymous" },
    { text: "You are not alone. You are seen. I am with you. You are not alone.", author: "Shonda Rhimes" },
    { text: "No one heals himself by wounding another.", author: "St Ambrose" },
    { text: "Stand out. Be different. Be a light.", author: "President Russel M Nelson" },
    { text: "This is not a men vs women issue. It's about people vs prejudice.", author: "" },
    { text: "Comparison is the thief of joy.", author: "Teddy Roosevelt" },
    { text: "The journey of a thousand miles begins with one step.", author: " Lao Tzu" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },                                                                                
];

let currentQuoteIndex = 0;
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        const nextButton = document.getElementById('nextButton');
        const audioElement = document.getElementById('audio');

        function displayQuote() {
            const { text, author } = quotes[currentQuoteIndex];
            quoteElement.textContent = `"${text}"`;
            authorElement.textContent = author !== "" ? `- ${author}` : "";
            speakQuote(text);
        }

        function speakQuote(text) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }

        function getNextQuote() {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote();
        }

        nextButton.addEventListener('click', getNextQuote);

        displayQuote();
   


