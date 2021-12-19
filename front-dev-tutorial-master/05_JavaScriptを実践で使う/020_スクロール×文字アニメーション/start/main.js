document.addEventListener('DOMContentLoaded', function () {
    
    const cb = (el, isIntersecting) => {
        if (isIntersecting) {
          const ta = new TextAnimation(el);
          ta.animate();
        }
    }

    const scroll = new scrollObserver('.animate-title', cb, {once: false});
});

class scrollObserver {
  constructor (target, cb, options) {
    this.els = document.querySelectorAll(target);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      once: true,
    };
    this.options = Object.assign(this.defaultOptions, options);
    this.cb = cb;
    this._init();
  }
  _init() {
    const callback = (entries, observer) =>{
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          this.cb(entry.target, true);
          if(this.options.once) {
          observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach(el => this.io.observe(el));
  }

  destroy() {
    this.io.disconnect();
  }
}