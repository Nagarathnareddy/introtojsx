import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <body>
                      {/*SSC student1*/}

    <fieldset id="fset">
        
       
        <strong><h1 id="heading">SSC EXAMINATION RESULTS</h1></strong> 
        <label>Telugu Marks</label>
        <br></br>
        
        <input id="telMarks" type="text"></input>
        <br></br>
        <label>English Marks</label>
        <br></br>
        <input id="engMarks" type="text"></input>
        <br></br>
        <label>Hindi Marks</label>
        <br></br>
        <input id="hinMarks" type="text"></input>
        <br></br>
        <label>Maths Marks</label>
        <br></br>
        <input id="matMarks" type="text"></input>
        <br></br>
        <label>Science Marks</label>
        <br></br>
        <input id="sciMarks" type="text"></input>
        <br></br>
        <label>Social Marks</label>
        <br></br>
        <input  id="socMarks"type="text"></input>
      
        <br></br>
        <br></br>
        <button id="button">Calculate</button>
        <br></br>

        <label>TotalMarks</label><br></br><input type="text" id="totalMarks"></input>
        <br></br>
        <label>Average</label><br></br><input type="text" id="averageMarks"></input>
        <br></br>
        <label>Grade</label><br></br><input type="text" id="grade"></input>
        </fieldset>
                       {/*Intermediate First year */}

  <fieldset id="fset1">
        
        <strong><h1 id="heading">INTERMEDIATE-1 EXAMINATION RESULTS</h1></strong> 
        <label>Sanskrit</label>
        <br></br>
        <input id="sanMarks1" type="text"></input>
        <br></br>
        <label>English</label>
        <br></br>
        <input id="engMarks1" type="text"></input>
        <br></br>
        <label>Maths-1A</label>
        <br></br>
        <input id="mat1aMarks1" type="text"></input>
        <br></br>
        <label>Maths-1B</label>
        <br></br>
        <input id="mat1bMarks1" type="text"></input>
        <br></br>
        <label>Physics</label>
        <br></br>
        <input id="phyMarks1" type="text"></input>
        <br></br>
        <label>Chemistry</label>
        <br></br>
        <input id="cheMarks1"type="text"></input>
        <br></br>
        <br></br>

        <button id="button1" onclick="totalMarks(); averageMarks();  result(); ">Calculate</button>

        
        <br></br>
        <br></br>
      
        <label>TotalMarks</label><br></br><input type="text" id="totalMarks1"></input>
        <br></br>
        <label>Average</label><br></br><input type="text" id="averageMarks1"></input>
        <br></br>
      
        <label>Grade</label><br></br><input type="text" id="grade1"></input>
        
  </fieldset>

                      {/*Intermediate second year */}

<fieldset id="fset2">
        
        <strong><h1 id="heading">INTERMEDIATE-2 EXAMINATION RESULTS</h1></strong> 
        <label>Sanskrit</label>
        <br></br>
        <input id="sanMarks2" type="text"></input>
        <br></br>
        <label>English</label>
        <br></br>
        <input id="engMarks2" type="text"></input>
        <br></br>
        <label>Maths-2A</label>
        <br></br>
        <input id="mat2aMarks2" type="text"></input>
        <br></br>
        <label>Maths-2B</label>
        <br></br>
        <input id="mat2bMarks2" type="text"></input>
        <br></br>
        <label>Physics</label>
        <br></br>
        <input id="phyMarks2" type="text"></input>
        <br></br>
        <label>Chemistry</label>
        <br></br>
        <input id="cheMarks1"type="text"></input>
        <br></br>
        <br></br>

        <button id="button2" onclick="totalMarks(); averageMarks();  result(); ">Calculate</button>

        
        <br></br>
        <br></br>
      
        <label>TotalMarks</label><br></br><input type="text" id="totalMarks2"></input>
        <br></br>
        <label>Average</label><br></br><input type="text" id="averageMarks2"></input>
        <br></br>
      
        <label>Grade</label><br></br><input type="text" id="grade2"></input>
        
   </fieldset>
  
     
       </body>     
  );
 
}

export default App;

