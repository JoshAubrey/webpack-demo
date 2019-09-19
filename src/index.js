//src: https://webpack.js.org/guides/getting-started/

// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
//   }

import myName from './myName';

function component() {
  var element = document.createElement('div');

  // use your function!
  element.innerHTML = myName('Josh');
  return element;
}

  
  document.body.appendChild(component());

//npm run build