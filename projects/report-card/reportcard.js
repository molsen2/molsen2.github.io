function testGrades(subject){
    var test1 = prompt("What did you make on your first test?");
    var test2 = prompt("What did you make on your second test?");
    var test3 = prompt("What did you make on your third test?");
    var test4 = prompt("What did you make on your fourth test?");
    
    document.write("<li>"+subject+" Test 1: "+test1);
    document.write("<li>"+subject+" Test 2: "+test2);
    document.write("<li>"+subject+" Test 3: "+test3);
    document.write("<li>"+subject+" Test 4: "+test4);
    
    var average = ((Number(test1)+Number(test2)+Number(test3)+Number(test4))/4).toFixed(2);
    document.write("<p>" + "Your average test score is: "+average+ "</p>");
    
    return average;
  }
  
  //LETTER GRADE*
  
  function letterGrade(grade, subject){
    var grade;
    
    var letterGrade = "F";
    var gpa = 0.0;
  
    if (grade >= 93) {
      letterGrade = "A";
      gpa = 4.0
    }
  
    else if (grade >= 85){
      letterGrade = "B";
      gpa = 3.0
    }
  
    else if (grade >= 75){
      letterGrade = "C";
      gpa = 2.0;
    }
  
    else if (grade >= 67){
    letterGrade = "D";
      gpa = 1.0;
      
      
    }
    
    document.write("<h3>"+"Your letter grade in "+subject+ " is: "+letterGrade+"</h3>");
    return gpa;
  }
  
  //GPA*
  
  function gpa(gpa1, gpa2, gpa3, gpa4){
    var totalGPA = ((Number(gpa1) + Number(gpa2) + Number(gpa3) + Number(gpa4))/4).toFixed(2);
    document.write("-------------------------------------------------");
    document.write("<h2>" + "Your cumulative GPA is: "+totalGPA+"</h2>");
  }
  
  
  //CLASS 1*
  
  var class1 = prompt("What is your first class?");
  document.write("<h2>"+class1+"</h2>");
  //typeOfClass();
  var average = testGrades(class1);
  var gpa1 = letterGrade(average, class1);
  
  
  
  //CLASS 2*
  
  var class2 = prompt("What is your second class?");
  document.write("<h2>"+class2+"</h2>");
  //typeOfClass();
  var average2 = testGrades(class2);
  var gpa2 = letterGrade(average2, class2);
  
  //CLASS 3*
  
  var class3 = prompt("What is your third class?");
  document.write("<h2>"+class3+"</h2>");
  //typeOfClass();
  var average3 = testGrades(class3);
  var gpa3 = letterGrade(average3, class3);
  
  
  //CLASS 4*
  
  var class4 = prompt("What is your fourth class?");
  document.write("<h2>"+class4+"</h2>");
  //typeOfClass();
  var average4 = testGrades(class4);
  var gpa4 = letterGrade(average4, class4);