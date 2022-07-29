class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <nav class="navbar navbar-expand-sm  navbar-dark" id="mainHeading">
        <div class="container-fluid">
            <img id="logo" src="images/logo.jpg" style="height: 100px;">
            <h3 id="school_name">VAIDYA BHAGWANDIN MISHRA GANDHI INTER COLLEGE</h1>
            <h5 id="school_Address">Chawani (Bahraich),<br> UTTAR PRADESH <br> Pin Code : 271801 </h1>
        </div>
        </nav>
        
    </header>`
    }
}

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="last">
        <nav class="navbar navbar-expand-sm  navbar-dark" id="mainHeading">
          <div class="container-fluid">
            <div>
              <h3 style="color: white;">Authorised by <b> Mr. Jagdish Kumar Singh</b></h3>
              <h3 style="color: white;">Principal</h3> 
              <h4 style="color: white;">VAIDYA BHAGWANDIN MISHRA GANDHI INTER COLLEGE</h4>
              <br><br>        </div>
              <div>
                <h3 style="color: white;">Important Links*</h3>
                <ul>
                    <a  href="https://ncert.nic.in/" target="_blank">NCERT Books</a><br>
                    <a href="https://upmsp.edu.in/" target="_blank">UP Board</a><br>
                    <a href="https://web.umang.gov.in/landing/" target="_blank">Umang</a><br>
                    <a href="https://bahraich.nic.in/" target="_blank">Bahraich Official</a><br>
                    <a href="https://diksha.gov.in/up/" target="_blank">Diksha</a><br>
                    <a href="http://sarkariresult.com" target="_blank">Sarkari Result</a><br>
                   
                </ul>
              </div>
          </div>
          
          </nav>
          <div class="la">
            <h5 style="color: white;">©Copyright VAIDYA BHAGWANDIN MISHRA GANDHI INTER COLLEGE. All Rights Reserved. </h5>
        </div>
      </div>
      `
    }
}

customElements.define('my-footer',MyFooter);


class MyHead extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<nav class="navbar navbar-expand-sm navbar-dark" id="navBar">
        <div class="container-fluid">
        <div class="top" style="color:white"><img src="images/logo.jpg" style="height: 50px;"><h6 >VAIDYA BHAGWANDIN MISHRA GANDHI INTER COLLEGE<h6></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" id="home" href="Home.html">Home</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" id="about" href="AboutUs.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="gallery" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="course" href="#">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="faculty" href="#">Faculties</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact" href="ContactUs.html">Contact Us</a>
                    </li>    
                </ul>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('my-head',MyHead);


class MyNav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=``
    }
}

customElements.define('my-nav',MyNav);


class MyGallery extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="head">
        <a href="#"><h1 >GALLERY</h1></a>
        </div>
        <nav class="navbar navbar-expand-sm navbar-dark" id="galleryHeader">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <div class="gBar">
                <ul class="navbar-nav" id="navG">
                <li class="nav-item1">
                    <a  href="Home.html">HOME</a>
                </li>
                    <li class="nav-item1">
                        <a  href="maingate.html">MAIN GATE</a>
                    </li>
                    <li class="nav-item1">
                    <a href="mainbuilding.html">MAIN BUILDING</a>
                    </li>
                    <li class="nav-item1">
                    <a href="classroom.html">CLASSROOM</a>
                    </li>
                    <li class="nav-item1">
                    <a href="staff.html">TEACHING STAFF</a>
                    </li>
                    <li class="nav-item1">
                    <a href="prayersabha.html">PRAYER SABHA</a>
                    </li> 
                    <li class="nav-item1">
                    <a href="library.html">LIBRARY</a>
                    </li>
                    <li class="nav-item1">
                    <a href="sciencelab.html">SCIENCE LAB</a>
                    </li>
                    <li class="nav-item1">
                    <a href="playground.html">PLAY GROUND</a>
                    <li class="nav-item1">
                    <a href="greenery.html">GREENERY</a>
                    </li>
                    <li class="nav-item1">
                    <a href="other.html">OTHERS</a>
                    </li>  
                </ul>
            </div>
        </div>
        </div>
    </nav>`
    }
}

customElements.define('my-gallery',MyGallery);
