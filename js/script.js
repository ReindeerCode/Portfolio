$(document).ready(function () {
  $("#seeMore").on("click", function () {
    console.log("clicked more");
    const moreTemplate = `              <div class="row float-right">
    <div class="card-deck">
      <div class="card mb-5">
        <img
          class="card-img-top"
          src="./assets/work.png"
          alt="Work Day Screenshot"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">MySQL Employee Tracker</h5>
          <p class="card-text">
          A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
          </p>
          <a class="float-right mb-2 gitHubProfile" target="_blank" title="click here" href="https://reindeercode.github.io/Third-Party-APIs-Work-Day-Scheduler/">Deployed Site</a>
          <a
            class="btn btn-light mt-auto"
            target="_blank"
            href="https://github.com/ReindeerCode/Third-Party-APIs-Work-Day-Scheduler"
            alt="Github project link"
            title="click here"
            >See on GitHub
          </a>
        </div>
      </div>
      <div class="card mb-5">
        <img
          class="card-img-top"
          src="./assets/password.png"
          alt="Password Screenshot"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">JS Password Generator</h5>
          <p class="card-text">
          An application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app runs in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. 
                                  </p>
          <a class="float-right mb-2 gitHubProfile" target="_blank" title="click here" href="https://reindeercode.github.io/JavaScript-Random-Password-Generator/">Deployed Site</a>
          <a
            class="btn btn-light mt-auto"
            target="_blank"
            href="https://github.com/ReindeerCode/JavaScript-Random-Password-Generator"
            alt="Github project link"
            title="click here"
            >See on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

  <a target="_blank" href="https://github.com/ReindeerCode?tab=repositories">
  <button
    type="button"
    class="btn btn-link text-dark container mt-auto "
    alt="GitHub icon not found"
    title="go to GitHub repositories"
  >
    <i class="fab fa-3x fa-github"></i></button></a>
  `;

    $("#seeMore").replaceWith(moreTemplate);
  });
});
