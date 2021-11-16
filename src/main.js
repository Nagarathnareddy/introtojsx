
     function totalMarks(telMarks,engMarks,hinMarks,matMarks,sciMarks,socMarks) 
     {

      var totalMarks = parseInt(telMarks)+ parseInt(engMarks)+ parseInt(hinMarks)+ parseInt(matMarks)+ parseInt(sciMarks)+ parseInt(socMarks);
     }
     document.getElementById("totalMarks").value = totalMarks;
     export default totalMarks;
     