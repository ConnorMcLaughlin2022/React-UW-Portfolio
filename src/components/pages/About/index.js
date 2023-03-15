import React from 'react';
import Headshot from './headshot2.png'
const styleCard = {
  width:"200px",
height:"250px",
marginLeft: "1%",
marginTop: "3%"
}

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img style={styleCard} src={Headshot} alt="Connor McLaughlin"></img>
      <p>
        My name is connor McLaughlin and i am a full stack web developer. I am hard working, focused, and eager to learn. I have found that as i started this bootcamp, my slight interest in coding developement and web design sky rocketed. im very excited to pursuer my career moving forward!

        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. 
          Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
    </div>
  );
}
