function toggleFaq(element) {
    const answer = element.querySelector('.faq-answer');
    answer.classList.toggle('open');
    
    const span = element.querySelector('span');
    if (answer.classList.contains('open')) {
        span.textContent = '×';
    } else {
        span.textContent = '+';
    }
}