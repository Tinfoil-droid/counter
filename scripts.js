//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
const saveButton = document.querySelector(".save");
let savedCount = localStorage.getItem("savedCount");
const loadButton = document.querySelector(".load");
const notification = document.querySelector(".notification");

//save
saveButton.addEventListener("click", function () {
  localStorage.setItem("savedCount", count);
  notification.textContent = "Count Saved!";
  notification.classList.add("active");
  notification.classList.remove("fade-out");
  setTimeout(() => {
    notification.classList.add("fade-out");
  }, 2000);
});

// Check if there's a saved count and update the count variable
if (savedCount !== null) {
  count = parseInt(savedCount);
  value.textContent = count;
}

loadButton.addEventListener("click", function () {
  let savedCount = localStorage.getItem("savedCount");
  if (savedCount !== null) {
    count = parseInt(savedCount);
    value.textContent = count;
    notification.textContent = "Count Loaded!";
  } else {
    notification.textContent = "Count not saved!";
  }
  notification.classList.add("active");
  notification.classList.remove("fade-out");
  setTimeout(() => {
    notification.classList.add("fade-out");
  }, 2000);
});

//count logic
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
      notification.textContent = "Reset!";
      notification.classList.add("active");
      notification.classList.remove("fade-out");
      setTimeout(() => {
        notification.classList.add("fade-out");
      }, 1000);
    } else if (styles.contains("plusTen")) {
      count += 10;
      notification.textContent = "+ 10";
      notification.classList.add("active");
      notification.classList.remove("fade-out");
      setTimeout(() => {
        notification.classList.add("fade-out");
      }, 500);
    } else if (styles.contains("plusFifty")) {
      count += 50;
      notification.textContent = "+ 50";
      notification.classList.add("active");
      notification.classList.remove("fade-out");
      setTimeout(() => {
        notification.classList.add("fade-out");
      }, 500);
    } else if (styles.contains("minusTen")) {
      count -= 10;
      notification.textContent = "- 10";
      notification.classList.add("active");
      notification.classList.remove("fade-out");
      setTimeout(() => {
        notification.classList.add("fade-out");
      }, 500);
    } else if (styles.contains("minusFifty")) {
      count -= 50;
      notification.textContent = "- 50";
      notification.classList.add("active");
      notification.classList.remove("fade-out");
      setTimeout(() => {
        notification.classList.add("fade-out");
      }, 500);
    }
    value.textContent = count;
  });
});
