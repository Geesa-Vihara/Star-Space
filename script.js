          var winningCombinations;
          var content;
          var painted;
          var thediv;
          var turn;        
          var squaresFilled;
          var pointX;
          var pointY;
          var flag;
          var num;
          var move;

          window.onload=function(){
            move=0;
            squaresFilled=0;
            turn=0;
            flag=0;
            pointX=0;
            pointY=0;
            painted=new Array();
            content=new Array;
            winningCombinations=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
            for(var l=0;l<=8;l++){
              painted[l]=false;
              content[l]=0;
            }
          }

          function divClicked(divNumber){
            
            thediv="box"+divNumber;              
            
            if(painted[divNumber-1]==false&&flag==0&&turn==0){
                    
               
                       document.getElementById(thediv).innerHTML="<img id='star' src='star5.png'style='width:100%' height='100%'>";   
                       painted[divNumber-1]=true;
                       content[divNumber-1]='X';
                                      
                       squaresFilled++;
                       
                       checkForWinners(content[divNumber-1]);
                          
                        
                    }
                    turn=(turn+1)%2; 
                    setTimeout(computer,1000);
                    
              
            }
            
            
          
          function computer(){
            
            if(turn==1&&flag==0){
                for(var a=0;a<winningCombinations.length;a++){
                    if(content[winningCombinations[a][0]]=="O"&&content[winningCombinations[a][1]]=="O"&&painted[winningCombinations[a][2]]==false){
                        num=winningCombinations[a][2];
                        move=1;
                        
    
                }
                else if(content[winningCombinations[a][1]]=="O"&&content[winningCombinations[a][2]]=="O"&&painted[winningCombinations[a][0]]==false){
                    num=winningCombinations[a][0];
                    move=1;
    
                }
                else if(content[winningCombinations[a][0]]=="O"&&content[winningCombinations[a][2]]=="O"&&painted[winningCombinations[a][1]]==false){
                    num=winningCombinations[a][1];
                    move=1;
    
                }
    }


                if(move==0){
                   

                for(var a=0;a<winningCombinations.length;a++){

                    if(content[winningCombinations[a][0]]=="X"&&content[winningCombinations[a][1]]=="X"&&painted[winningCombinations[a][2]]==false){
                        num=winningCombinations[a][2];
                        move=1;
     
                   }
                   else if(content[winningCombinations[a][1]]=="X"&&content[winningCombinations[a][2]]=="X"&&painted[winningCombinations[a][0]]==false){
                        num=winningCombinations[a][0];
                        move=1;
     
                   }
                   else if(content[winningCombinations[a][0]]=="X"&&content[winningCombinations[a][2]]=="X"&&painted[winningCombinations[a][1]]==false){
                        num=winningCombinations[a][1];
                        move=1;
     
                   }
                }

                }
               if(move==0){ 
                   while(true){         
                   
                    num=Math.floor(Math.random() * 9);  
                    if(painted[num]==false){
                        break;
                    }
                }
                }
            thediv="box"+(num+1);
            document.getElementById(thediv).innerHTML="<img id='galaxy' src='galaxy.png'style='width:100%' height='100%'>";                      
            painted[num]=true;
            content[num]='O';
            move=0;         
            squaresFilled++;
            checkForWinners(content[num]);
            turn=(turn+1)%2; 

            }
                  }

          function checkForWinners(symbol){
            for(var a=0;a<winningCombinations.length;a++){
              if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){
                
                if(symbol=="X"){
                    pointX=parseInt(document.getElementById('pointX').innerHTML);
                    pointX++;
                    document.getElementById('pointX').innerHTML=pointX;
                    document.getElementById("comment").innerHTML="You WON!";
                    
                }
                else{
                    pointY=parseInt(document.getElementById('pointY').innerHTML);
                    pointY++;
                    document.getElementById('pointY').innerHTML=pointY;
                    document.getElementById("comment").innerHTML="Oopsy Daisy!"
                    }
                flag=1;

              }
              
              if(squaresFilled==9&&flag==0)
              {
                document.getElementById("comment").innerHTML="Its a Draw...";
                flag=1;
              }
            }
            
          }
          
          function playAgain(){          
              document.getElementById('box1').innerHTML="";   
              document.getElementById('box2').innerHTML=""; 
              document.getElementById('box3').innerHTML=""; 
              document.getElementById('box4').innerHTML=""; 
              document.getElementById('box5').innerHTML=""; 
              document.getElementById('box6').innerHTML=""; 
              document.getElementById('box7').innerHTML=""; 
              document.getElementById('box8').innerHTML="";  
              document.getElementById('box9').innerHTML="";    
              for(var l=0;l<=8;l++){
                painted[l]=false;
                content[l]='';
              }   
              squaresFilled=0;
              flag=0;
              turn=0;
              move=0;
              document.getElementById("comment").innerHTML="Make your stars shine!";
          }
          function reset(){
            document.getElementById('box1').innerHTML="";   
            document.getElementById('box2').innerHTML=""; 
            document.getElementById('box3').innerHTML=""; 
            document.getElementById('box4').innerHTML=""; 
            document.getElementById('box5').innerHTML=""; 
            document.getElementById('box6').innerHTML=""; 
            document.getElementById('box7').innerHTML=""; 
            document.getElementById('box8').innerHTML="";  
            document.getElementById('box9').innerHTML="";    
            for(var l=0;l<=8;l++){
              painted[l]=false;
              content[l]='';
            }   
            document.getElementById('pointX').innerHTML=0;
            document.getElementById('pointY').innerHTML=0;
            squaresFilled=0;
            flag=0;
            turn=0;
            move=0;
            document.getElementById("comment").innerHTML="Make your stars shine!";
          }
    
        

          
         