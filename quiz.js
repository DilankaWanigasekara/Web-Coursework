  
		
    //declaring variables
        var time = 5;
        var now = 0;
        var dist = 0;
        var status = 0;
        var correctAns = 0;
        var marks = 0;
        var selection = "Not answered"
        var test, test_condition, question, selection, selections, selectionA, selectionB, selectionC, selectionD, colors;
        var userselection = ["Ans", "Ans", "Ans", "Ans", "Ans", "Ans", "Ans", "Ans", "Ans", "Ans"];
		var colors = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "brown", "brown", "brown", "brown", "brown", "gray", "gray", "gray", "gray", "gray", "yellow", "yellow", "yellow", "yellow", " yellow", "green", "green", "green", "green"]
        var questions = [
            ["1. In which year did Sri Lanka win the International Cricket World Cup ?", "1998", "1996", "2001", "2005", "B"],
            ["2. Who is the fastest man in the world?", "Chester Adams", "Yohan Blake", "Tim Paine", "Usain Bolt", "D"],
            ["3. What is Conor Mcgregor's home country ?", "England", "USA", " Norway", "Ireland", "D"],
            ["4. Who did won the 2014 FIFA world cup ?", "Argentina", " Germeny ", "France", "Brazil", "B"],
            ["5. Who scored the highest run in a Test inning ?", " Sachin Tendullkar", " Kumar Sangakkar", "Bryan Lara", "Ricky Pontin", "C"],
            ["6. Archery is the national game of :", "Bhutan", "Sweaden", "denmark", "Switzerland", "A"],
            ["7. Which among the following country won the Women's Rugby World Cup 2017 ?", " England", " South Africa", "Canada", "New Zealand", "D"],
            ["8. Who did get the most wickets in Test cricket history ?", "Muralitheren", " Shane Warne", "Chaminda Vaas", "James Anderson", "A"],
            ["9. Which of the following country hosted the 2019 South Asian Games ?", "Bangladesh", "India", "Nepal", "Bhutan", "C"],
            ["10. Which team won  the IPL 2019 ?", "Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bangalore", "Delhi Daredevils", "B"]
        ];
        

        function questionProvider() {
            document.getElementById("answer").style.display = "none";
            test = document.getElementById("test");
            if (status == questions.length) {
                document.getElementById("test").style.backgroundColor = colors[marks + 10];
                test.innerHTML = "<h2>Your Results </h2>";
                test.innerHTML += "<h3>correct answers : " + correctAns + " </h3>";
                test.innerHTML += "<h3>wrong answers : " + (2 * correctAns - marks) + " </h3>";
                test.innerHTML += "<h3>No answers : " + (questions.length + marks - 3 * correctAns) + "</h3>";
                test.innerHTML += "<h2>You got " + marks + " Marks</h2>";
                test.innerHTML += "<button class = button onclick='seeAnswers()'>See the Answers</button>";
                document.getElementById("test_condition").innerHTML = "Test completed";
              
                return false;
            }
          
            question = questions[status][0];
            selectionA = questions[status][1];
            selectionB = questions[status][2];
            selectionC = questions[status][3];
            selectionD = questions[status][4];

            test.innerHTML = "<h3>" + question + "</h3>";
           
            test.innerHTML += "<input type='radio' name='selections' value='A'> " + selectionA + "<br>";
            test.innerHTML += "<input type='radio' name='selections' value='B'> " + selectionB + "<br>";
            test.innerHTML += "<input type='radio' name='selections' value='C'> " + selectionC + "<br>";
            test.innerHTML += "<input type='radio' name='selections' value='D'> " + selectionD + "<br>";

            test.innerHTML += "<button class = button onclick='answerChecker()'>Next Question</button>";
        }

        function answerChecker() {
 
            selections = document.getElementsByName("selections");
            for (var i = 0; i < selections.length; i++) {
                if (selections[i].checked) {
                    selection = selections[i].value;
                    userselection[status] = selection;
                }
            }
        
            if (selection == questions[status][5]) { 	//choose and adding 2 marks for a correct answer
                correctAns++;
                marks = marks + 2;

            } else if (selection != "Not answered") {
                marks = marks - 1			//chosse and adding -1 marks for wrong answers
            }
            selection = "Not answered"
											//selecting not answered question
			status++;

            questionProvider();
        }

        function timeOver() {
            if (status < 10) {
											// showing time  is over message
                alert('Time is over !');
                questionProvider();
            }
        }
        var i = 0;

        function seeAnswers() {
            document.getElementById("answer").style.display = "block";
            document.getElementById("topic").style.display = "none";
            answer.innerHTML = "<h3>" + questions[i][0] + "</h3>";
            answer.innerHTML += "<input type='radio' name='selections' value='A' > " + questions[i][1] + "<br>";
            answer.innerHTML += "<input type='radio' name='selections' value='B' > " + questions[i][2] + "<br>";
            answer.innerHTML += "<input type='radio' name='selections' value='C' > " + questions[i][3] + "<br>";
            answer.innerHTML += "<input type='radio' name='selections' value='D' > " + questions[i][4] + "<br><br>";
            if (userselection[i] != 'Ans') {
                answer.innerHTML += "<p>your answer is " + userselection[i] + "</p";
            }
            if (userselection[i] == 'Ans') {
                answer.innerHTML += "<p><font color='red'>Not answered. Correct answer is " + questions[i][5] + "</font></p";
            } else if (userselection[i] != questions[i][5]) {
                answer.innerHTML += "<p><font color='red'>Your answer is wrong. Correct answer is " + questions[i][5] + "</font></p";
            }
            if (userselection[i] == questions[i][5]) {
                answer.innerHTML += "<p>It is correct</p";
            }
            answer.innerHTML += "<button class=button onclick='seeAnswers()'>Next</button>";
            i++;
        }

        function timerCount() {
            var timerCountTime = new Date().getTime() + time * 60 * 1000;		//setting the time we want

  
            var x = setInterval(function() {

																			//getting now date
                now = new Date().getTime();

																		//find the difference between now time and given time
                dist = timerCountTime - now;

																						//time calculation
                var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((dist % (1000 * 60)) / 1000);

         
                if (dist < 0) {
                    minutes = 0;
                    seconds = 0;
                }

                if (status == 10) {
                    myStopFunction();
                }

                document.getElementById("min").innerHTML = minutes;
                document.getElementById("sec").innerHTML = seconds;

            }, 1000);

        }

        function myStopFunction() {
            clearInterval(t);
        }

        function displayWatch(){
            document.getElementById("timer").style.display="inline-block";
        }

  
