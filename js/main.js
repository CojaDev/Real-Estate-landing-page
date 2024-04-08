//Nav
let nav = document.querySelector('.nav');
var PocetnaPoz = nav.getBoundingClientRect();
let y = PocetnaPoz.y;
y = y + window.scrollY;

function proveraPoz() {
  let novaPoz = nav.getBoundingClientRect();
  let ny = novaPoz.y;
  ny = y + window.scrollY;
  if (ny > y + 10) {
    nav.style.background = 'rgba(0, 0, 0, 0.559)';
  } else {
    nav.style.background = 'transparent';
  }
}
window.addEventListener('scroll', proveraPoz);

//Text Holders
const textholders = document.querySelectorAll('#faq .text-holder');

textholders.forEach((holder) => {
  holder.addEventListener('click', () => {
    closeOther(holder);
    holder.classList.toggle('activee');
  });
});

function closeOther(currentHolder) {
  textholders.forEach((holder) => {
    if (holder !== currentHolder && holder.classList.contains('activee')) {
      holder.classList.remove('activee');
    }
  });
}
//forms
let forms = document.querySelectorAll('form');

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Request Sent');
  });
});
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

//text slider
function showItem(index) {
  // Remove "active" class from all items
  sliderItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Add "active" class to the selected item for the fade-in effect
  sliderItems[index].classList.add('active');
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  showItem(currentIndex);
}

// Initial display
showItem(currentIndex);

// Event listeners for navigation buttons
document.getElementById('nextButton').addEventListener('click', nextItem);
document.getElementById('prevButton').addEventListener('click', prevItem);
