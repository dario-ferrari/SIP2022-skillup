import React from "react";
import { Link } from "react-router-dom";
import "./ObjView.css"

const Objectives = () => {

  return (

      <div className="h-full w-full text-zinc-700 overflow-hidden relative">
        
        {/*<h1 className="text-6xl font-thin text-center">Objectives</h1>*/}

        <html lang="en">
          <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Responsive Features Section</title>
              {/*<!-- Font Awesome CDN -->*/}
              <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
              />
              {/*<!-- Google Fonts -->*/}
              <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
              rel="stylesheet"
              />
              {/*  Stylesheet -->*/}
              <link rel="stylesheet" href="ObjView.css" />
          </head>
          {/*<body>*/}
              {/*<section>*/}
              <div class="row">
                  <h1>Objectives</h1>
              </div>
              <div class="row justify-center">
                  {/*<!-- Column One -->*/}
                  <div class="column">
                  <Link to="/my/personalized">
                  <div class="card">
                      <div class="icon">
                      <i class="fa-solid fa-user"></i>
                      </div>
                      <h3>Personalized Objectives</h3>
                      <p>
                      Objetivos que pueden ser personalizados.
                      </p>
                  </div>
                  </Link>
                  </div>
                  {/*<!-- Column Three -->*/}
                  <div class="column">
                  <Link to="/my/recommended">
                  <div class="card">
                      <div class="icon">
                      <i class="fa-solid fa-users"></i>
                      </div>
                      <h3>Recommended Objectives</h3>
                      <p>
                      Objetivos que pueden ser recomendados.
                      </p>
                  </div>
                  </Link>
                  </div>
              </div>
              {/*</section>*/}
          {/*</body>*/}
          </html>

      </div>

  );

}

export default Objectives;