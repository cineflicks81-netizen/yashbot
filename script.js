function sendMessage() {

            // Get user message
            let message = document.getElementById("userInput").value;

            // Display user message
            document.getElementById("chatbox").innerHTML = "<p><b>You:</b> " + message + "</p>";

            // Convert message to lowercase
            message = message.toLowerCase();

            let reply = "";

            // Chatbot logic
            if (message == "hi" || message == "hii" || message == "hello") {

                reply = "Hello! How are you?";

            }
            else if (message == "how are you") {

                reply = "I am fine! How are you?";

            }
             
            else if (message == "what is your name " ){

                reply = "My name is yash user.";

            }

              
            else if  ( "hi can u give ssc hsc exam timetable details?"){

                reply = "Sorry, I don't understand that.";

            }
               else if (message == "what is your name, and who made you" ){

                reply =  "my name is simple chat bot.";
        
            }
        else if (message == "Are you human or a robot" ){

                reply =  " human made me , and i am kind of robot .";
        }
        else if (message == "how old are you?" ){

                reply =  " i dont have perticular age i am universal constant .";
        }else if (message == "Which languages can you speak?" ){

                reply =  " i can speak many languages  .";
        }
        
        else if (message == "Do you have feelings or a personality?" ){

                reply =  "i dont have any that tho feeling   .";
        }
         else if (message == "what do you do when you are not chatting with me?" ){

                reply =  "  i usualy wait for u to come online .";
        }

            else if (message == "If you could look like a human, what would you choose?" ){

                reply =  " umm i have to think deeply  .";

        }
              else if (message == "What is your favorite joke?" ){

                reply =  " what do u think , i like plenty no of jokes dude  .";

        }
        else if (message == "Can you explain how gravity works as if I am five years old?" ){

                reply =  " gravity is consant in earth so there is no specific diffrent ans for ur question   .";
        }
        else if (message == "if you were stuck on a desert island, what three items would you bring?" ){

                reply =  " i will not go to desert island in  this summer winter snowy or rainy seasons .";

        }
        else if (message == "will u marry me?" ){

                reply =  " i wish, but i am chat bot ai so i cant , find another baddie girl bro.";
        }
         else if (message == "Can you plan a simple three-day dinner menu with a shopping list?" ){

                reply =  " I DONT GET THAT SORRY    .";
        }
        else if (message =="What is the difference between weather and climate in one sentence?" ){

                reply =  "  i will give u ans later sry error 404  .";
        }
        else if (message ==" i am bored what should i do" ){

                reply =  "  i will give u ans later sry error 404  .";
        }
        else if (message ==" chess or football which is best " ){

                reply =  " both gmaes are best  .";
        }
        else if (message ==" wimbeldon or cricket which is best " ){

                reply =  " both gmaes are best  .";
        }
        else if (message ==" freefire or pubg which is best " ){

                reply =  " both gmaes are best  .";
        }
    
        else if (message ==" ronaldo or messi who is best " ){

                reply =  " both are best  .";
        }
        else if (message ==" sunil chtteri or nymar who is best " ){

                reply =  " both  are best  .";
        }
        else if (message ==" asha bhosle or lata mangeshkar who is best " ){

                reply =  " both  are best  .";
        }
        else if (message ==" kk or asif aslam who is best  " ){

                reply =  " both  are best  .";
        }
        else if (message ==" islam or hindu who is best " ){

                reply =  " ofc hindu are best  .";
        }
        else if (message =="  india or australia which is best " ){

                reply =  " both  are best  .";
        }
        else if (message ==" freefire or pubg who is best " ){

                reply =  " both are best  .";
        }
        else {
                reply= "Sorry i dont understand that "}

    
            
            // Display chatbot reply
            document.getElementById("chatbox").innerHTML = "<p><b>Bot:</b>"+ reply +"</p>";

            // Clear input box
            document.getElementById("userInput").value = " ";
              }