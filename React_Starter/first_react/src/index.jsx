import React from "react";
import ReactDom from "react-dom";

//  3 way to embed multiple compnents

// ReactDom.render( <> <h1> Salaam </h1> <h2>1 se zyada element is tarah add kr sakte ho</h2> </> , document.getElementById("root"));

// ReactDom.render( <div> <h1> Dosra</h1> <h2> is tariqe se bhi kr sakte ho</h2> </div> , document.getElementById("root"));

// ReactDom.render( <React.Fragment> <h1> Yaa  </h1> <h2>phir ase bhi likh sakte ho ho</h2> </React.Fragment> , document.getElementById("root"));



ReactDom.render( <> <h1> Top 10 Favorites Cricketers </h1>
<ol>
 <li>Imran Nazir</li> 
 <li>Shoaib Malik</li> 
 <li>Shahid Afridi</li> 
 <li>M Amir</li> 
 <li>Q De Kock</li> 
 <li>AB Devilliers</li> 
 <li>MS Dhoni</li> 
 <li>Virat Kohli</li> 
 <li>Pat Cummins</li> 
 <li>Chris Woakes</li> 
 </ol>
  </> , document.getElementById("root"));


