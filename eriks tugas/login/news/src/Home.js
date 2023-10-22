import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Home() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav justify-content-center align-items-center">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Posting</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  
  export default Home;
  
  