document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#wordTable .word');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Clear previous highlights
            cells.forEach(c => c.classList.remove('highlight'));

            // Highlight all matching words
            const wordToHighlight = cell.textContent;
            cells.forEach(c => {
                if (c.textContent === wordToHighlight) {
                    c.classList.add('highlight');
                }
            });
        });
    });
});
