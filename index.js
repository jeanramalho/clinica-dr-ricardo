
  tailwind.config = {
      theme: {
        extend: {
          colors: {
              doura: '#b09c5e',
          }
        }
      }
    }
  

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function initScrollReveal() {
  const revealElements = [
    ...document.querySelectorAll("#clinica > div > *, #dr-ricardo > *, #FAQ > *, #contatos > *")
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealElements.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;

    if (element.tagName === "IMG") {
      element.dataset.revealDirection = "scale";
    }
  });

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.16
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("DOMContentLoaded", initScrollReveal);

document.addEventListener('alpine:init', () => {
  Alpine.store('accordion', {
    tab: 0
  });

  Alpine.data('accordion', (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
    }
  }));
})
