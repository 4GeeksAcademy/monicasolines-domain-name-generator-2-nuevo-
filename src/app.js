/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  let html = ``;

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let l = 0; l < noun.length; l++) {
        for (let m = 0; m < extensions.length; m++) {
          let domain = pronoun[i] + adj[j] + noun[l] + extensions[m];
          html += `
            <li class="list-group-item"> ${domain} </li>
          `;
        }
      }
    }
  }

  document.querySelector("#domainList").innerHTML = html;
};
