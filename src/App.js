 import React from 'react';
 import XReactDOM from 'react-dom';


// your code goes here for now
    const Pet = ({ name, animal, breed })  => {
        return React.createElement( "div",  {}, 
        [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed),
            
         ] );
    };

  


      // React.createElement gets three parameters: first> type of element it is, second> object, third> the children it's creating 
  
      const App = () => {
           return React.createElement(
              "div",
              {id: "something-important"},
              [
                React.createElement("h1", {}, "Adopt Me!"),
                React.createElement(Pet, {
                name: "Luna", 
                animal: "Dog",
                breed: "Havanese"
                }),
                React.createElement(Pet, {
                name: "Pepper", 
                animal: "Bird", 
                breed: "Cokatiel"
                }),
                React.createElement(Pet, {
                name: "Doink",
                animal: "Cat",
                breed: "mixed"
                })

              ]      
           );
      };
    

          

     ReactDOM.render(
     //<App />,
     React.createElement(App), 
     document.getElementById("root") 
     );

