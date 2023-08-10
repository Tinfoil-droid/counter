//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
const saveButton = document.querySelector('.save');
let savedCount = localStorage.getItem('savedCount');
const loadButton = document.querySelector('.load');

//save
saveButton.addEventListener('click', function() {
    localStorage.setItem('savedCount', count);
    alert('Count saved!');
});

// Check if there's a saved count and update the count variable
if (savedCount !== null) {
    count = parseInt(savedCount);
    value.textContent = count;
}

loadButton.addEventListener('click', function() {
    let savedCount = localStorage.getItem('savedCount');
    if (savedCount !== null) {
        count = parseInt(savedCount);
        value.textContent = count;
        alert('Count loaded!')
    } 
    else {
        alert('No saved count found.');
    };
});

//count logic
buttons.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains ('increase')){
            count++;
        } 
        else if (styles.contains ('reset')){
            count = 0;
        }
        else if (styles.contains ('plusTen')){
            count += 10;
        }
        else if (styles.contains ('plusFifty')){
            count += 50;
        }
        else if (styles.contains ('minusTen')) {
            count -= 10;
        }
        else if (styles.contains ('minusFifty')) {
            count -=50;
        }
        value.textContent = count;
    });
});