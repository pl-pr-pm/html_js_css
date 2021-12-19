const child = document.querySelector('.child');
const cb = (entries, observer) =>{
  // alert('intersepting');
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      // observer.unobserve(entry.target);
      entry.target.classList.add('inview');
    } else {
      console.log('outview');
      entry.target.classList.remove('inview');
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  
};

const io = new IntersectionObserver(cb, options);
io.observe(child);