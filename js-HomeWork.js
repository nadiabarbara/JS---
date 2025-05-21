'use strict'

// Task #1: Change background color on mouseover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});

// Task #2: Reset background color on mouseout
const hoverBox2 = document.getElementById('hoverBox2');
hoverBox2.addEventListener('mouseover', () => {
    hoverBox2.style.backgroundColor = 'lightgreen';
});
hoverBox2.addEventListener('mouseout', () => {
    hoverBox2.style.backgroundColor = 'gray';
});

// Task #3: Update click count
let count = 0;
const clickBtn = document.getElementById('clickBtn');
const clickCount = document.getElementById('clickCount');

clickBtn.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
});

