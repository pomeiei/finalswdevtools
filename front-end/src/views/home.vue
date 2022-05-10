<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" ><router-link to="/"
                    ><img src="https://www.ais.co.th/base_interface_v2/images/ais_logo.jpg" alt="" width="50" height="25"></router-link
                    ></a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="ค้นหา..."
              aria-label="Search friends or post"
              size="35"
            />
            <button class="btn btn-outline-success" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            </button>
          </form>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >my AIS</a
              >
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <center>
        <img src="https://cdn.discordapp.com/attachments/842089444559421470/973483026535292948/unknown.png"/>
      <img src="https://www.ais.th/vaccinesforthais/images/vaccine28-04-2022.png" width="70%"/>
      <img src="https://media.discordapp.net/attachments/842089444559421470/973483492769923082/unknown.png" width="70%"/>
      <br/><br/>
      <router-link to="/login"><button type="button" class="btn" style="background-color: #b8d434; border-radius: 40px"><h2>ลงทะเบียนจองคิว - Register</h2></button></router-link>
      </center>
      
    </div>
    <br/>
    <br/>
    <div class="footer">
      <img src="https://media.discordapp.net/attachments/842089444559421470/973484574287986738/unknown.png?width=1241&height=173" width="100%"/>
    </div>
  </div>
</template>

