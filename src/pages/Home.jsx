import React from "react";

function Home() {
  let ampersand = "&";
  let attribute = {
    color: "#ffa801",
  };
  return (
    <section id="hero">
      <div class="opacity-bg text-white">
        <div class="container vh-100 d-flex flex-column align-items-center align-items-sm-start justify-content-center">
          <h1 class="hero-slug fw-bold text-uppercase text-center">
            <span style={attribute}>Eat, Drink</span> {ampersand}
          </h1>
          <h1 class="hero-slug fw-bold text-uppercase text-center">
            Endulge Yourself
          </h1>
          <button
            class="btn global-btn mt-3 ms-1 rounded-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            RESERVE NOW <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
