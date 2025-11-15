document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');

    // Fetch the prompts from our own API
    fetch('/api/prompts')
        .then(response => response.json())
        .then(prompts => {
            if (!cardContainer) return;

            // Clear any existing content
            cardContainer.innerHTML = '';

            // Loop through each prompt and create a card
            prompts.forEach(prompt => {
                const card = document.createElement('div');
                card.className = 'card';

                const category = document.createElement('span');
                category.className = 'category';
                category.textContent = prompt.category;

                const title = document.createElement('h3');
                title.textContent = prompt.title;

                const content = document.createElement('p');
                content.textContent = prompt.content;

                card.appendChild(category);
                card.appendChild(title);
                card.appendChild(content);

                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching prompts:', error);
            if (cardContainer) {
                cardContainer.innerHTML = '<p style="color: #ff8a8a;">Failed to load prompts. Is the server running correctly?</p>';
            }
        });
});
