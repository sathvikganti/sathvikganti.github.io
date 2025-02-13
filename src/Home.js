import React from 'react';
import galaxyImage from './assets/galaxyimage.png';

function Home() {
  return (
    <div>
        <h1 class="font-bold text-2xl pb-1">
          Sathvik Ganti
        </h1>
        <p1 class="occupation">
          PLM Technical Consultant Intern
        </p1>
        <br></br>
        <p1>
          B.S Statistics @ </p1><p1 class="font-semibold">University of Illinois Urbana-Champaign
        </p1>
        <br></br>
        <br></br>
        <p1 class="description">
          Hey! I am a student at UIUC studying Statistics. At the moment, I am employed at ProductSpace Solutions Inc. as an intern. Check out my LinkedIn page as well as some projects that I have in the works.
        </p1>
      <img src={galaxyImage} class="galaxy"></img>
    </div>
  );
}

export default Home;
