
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');

    fetch('/api/prompts')
        .then(response => response.json())
        .then(prompts => {
            prompts.forEach(prompt => {
                const card = document.createElement('div');
                card.className = 'card';

                const category = document.createElement('div');
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
            cardContainer.innerHTML = '<p style="color: red;">Error loading prompts. Is the server running? Check the console for details.</p>';
        });
});
