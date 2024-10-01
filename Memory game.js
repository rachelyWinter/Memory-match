document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("p-end").style.display = "none";
  document.getElementById("w").style.display = "none";
  document.getElementById("p").style.display = "none";
  document.getElementById("winer").style.display = "none";

});
const divinclud=document.createElement("div")
divinclud.id="includ"
 document.getElementById("main").appendChild(divinclud);
 let str="בחר רמת משחק! ! ! !"
 let x=null//משתנה ששומר את הסט אינטרבל של הכותרת
 let randompic=[];//מערך שלתוכו יוגרל בכל רמה כרטיסים 
 let piceasy=[];//מערך התמונות שקיימות
 let moment;
 let k
 let b//משתנה לפונקציה של הטיימר
 let m=0;//של היסטוריית משחקים id-משתנה שמקדם את ה 
 let level;//משתנה ששומר את הרמה הנוכחית ונשלח לפונקציה שתכתוב ב"היסטוירה" איזה רמה שוחק
 document.getElementById("p").style.display="none"
 document.getElementById("p-end").style.display="none"
 document.getElementById("tbl").style.display="none"
 //piceasy מילוי המערך 
 for(let i=0;i<15;i++){
  piceasy[i]=`./pictur/${i}.gif`
   }
 let history=[
  {
    status: "ניצחון",
    Howtime: 10,
  }]

 ///הגרלת כרטיסים
 function random(n)
 {
  randompic=[];
  let flagcard=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let r=0;
  for(let i=0; i<n ;i++)
  {
   r=Math.floor( Math.random()*(n/2));
  if(flagcard[r]<2)
  {  randompic[i] = piceasy[r];
    flagcard[r]++;
   }
  else{
    i--;
  }
  
  }
 }
 // כותרת
 let y=0
 let d=0
function title()
{
  document.getElementById("title game").innerHTML=str.substring(d,str.length)+" "+str.substring(0,d);
  d++;
  if(d>str.length)
  d=0;
  y++
  if(y==30){
 clearInterval(x);
 document.getElementById("title game").innerHTML="!בהצלחה"
}
  }

function play()
{
x=setInterval(title, 250);

}
play();
let flag;
flag=false
///////////////////////////////////////רמה קלה////////////////////////////////////////////////////////
function  Easylevel()
 {
   i=0
  level="קל"
  document.getElementById("p-end").style.display="none"
  document.getElementById("w").style.display="none";
  // document.getElementById("footer").style.display="none";
   random(12);
  document.getElementById("audioHard").pause();
  document.getElementById("audioMidi").pause();
    document.getElementById("winery").pause();
    document.getElementById("overgame").pause();
  clearInterval(x);
  document.title= "level one!";
 

  str="      !עלייך למצוא זוג כרטיסים מתאים במינימום זמן אפשרי"
  play();
    document.getElementById("onclick").play();
    
    document.getElementById("audioEasy").play();
    flag=true;
    
divinclud.style.width = "80vw"; // 80% of the viewport width
divinclud.style.height = "75vh"; // 75% of the viewport height
divinclud.style.display = "grid";
divinclud.style.gridTemplateRows = "repeat(3, 1fr)"; // Equal rows
divinclud.style.gridTemplateColumns = "repeat(4, 1fr)"; // Equal columns
divinclud.style.gap = "2vw"; // 2% of the viewport width for gaps
divinclud.style.left = "10vw"; // Positioning based on the viewport width
const cards=[12];
document.getElementById("includ").innerHTML=" ";
 for(let i=0;i<12;i++)
 {
   
   cards[i]=document.createElement("img")
   cards[i].id="c"
   cards[i].style.width="14.5vw";
   cards[i].style.height="9.5vw";
   cards[i].style.backgroundColor="crimson"
   cards[i].onclick=function(){putpic(cards[i],randompic[i],12,cards,randompic,level)}
   divinclud.appendChild(cards[i]);
   
   
 }
 b=setInterval(liner(300,cards,12));
}



flag=false;
///////////////////////////רמה בינונית///////////////////////////////////////////////// 
function  mediumlevel(){
  i=0//איפוס משתנה של הטיימר כדי שהטיימר יתחדש כשיעברו בין הרמות
  level="בינוני"
  document.getElementById("p-end").style.display="none"
  document.getElementById("w").style.display="none";
  // document.getElementById("footer").style.display="none";
  random(20);
  document.getElementById("audioEasy").pause();
    document.getElementById("audioHard").pause();
    document.getElementById("winery").pause();
    document.getElementById("overgame").pause();
  clearInterval(x);
  document.title= "level two!";
    document.getElementById("onclick").play();
    str="    !עלייך למצוא זוג כרטיסים מתאים במינימום זמן אפשרי"
   play();
  document.getElementById("audioMidi").play();
   flag=true;
   //יצירת הגריד של הכרטיסים
   divinclud.style.width = "90vw";  // רוחב יחסי למסך
   divinclud.style.height = "60vh";  // גובה יחסי למסך
   divinclud.style.display = "grid";
   divinclud.style.gridTemplateRows = "repeat(4, 1fr)";  // יחידות יחסיות
   divinclud.style.gridTemplateColumns = "repeat(5, 1fr)";  // יחידות יחסיות
   divinclud.style.gap = "2vw";  // גודל הרווחים מותאם למסך
   divinclud.style.left = "5vw";  // מרחק מצד שמאל
   divinclud.style.top = "2vh";  // מרחק מלמעלה
   const cards=[20];
   document.getElementById("includ").innerHTML=" ";
   //יצירת הכרטיסים
    for(let i=0;i<20;i++)
    {
      cards[i]=document.createElement("img")
      cards[i].id="c"
      cards[i].style.width="11vw";
      cards[i].style.height="7vw";
      cards[i].style.backgroundColor="crimson";
      cards[i].onclick=function(){putpic(cards[i],randompic[i],20,cards,randompic,level)}
      divinclud.appendChild(cards[i]);
    }
    b=setInterval( liner(700,cards,20));
  }
       
      ///////////////////////////רמה קשה/////////////
   function  hardlevel(){
   i=0
    level="קשה"
    document.getElementById("p-end").style.display="none"
    document.getElementById("w").style.display="none";
    // document.getElementById("footer").style.display="none";
    random(30);
    document.getElementById("audioMidi").pause();
    document.getElementById("audioEasy").pause();
    document.getElementById("winery").pause();
    document.getElementById("overgame").pause();
    clearInterval(x);
    document.title= "level three!";
    document.getElementById("onclick").play();
    str="     !עלייך למצוא זוג כרטיסים מתאים במינימום זמן אפשרי"
    play();
   document.getElementById("audioHard").play();
  flag=true;
  divinclud.style.width = "90vw";  // רוחב יחסי למסך
divinclud.style.height = "60vh";  // גובה יחסי למסך
divinclud.style.display = "grid";
divinclud.style.gridTemplateRows = "repeat(5, 1fr)";  // יחידות יחסיות
divinclud.style.gridTemplateColumns = "repeat(6, 1fr)";  // יחידות יחסיות
divinclud.style.gap = "2vw";  // רווח מותאם למסך
divinclud.style.left = "5vw";  // מרחק מצד שמאל
divinclud.style.top = "1vh";  // מרחק מלמעלה

   const cards=[20];
   document.getElementById("includ").innerHTML=" ";
    for(let i=0;i<30;i++)
    {
      cards[i]=document.createElement("img")
      cards[i].id="c"
      cards[i].style.width="10vw";
      cards[i].style.height="6vw";
      cards[i].style.backgroundColor="crimson";
      cards[i].onclick=function(){putpic(cards[i],randompic[i],30,cards,randompic,level)}
      divinclud.appendChild(cards[i]);
    }
    
    b=setInterval(liner(900,cards,30));
  }
   
  let FirstCard
  let SecondCard
  let count=0;
  let coupls=0;
  let FirstGif
  let SecondGif

  //טיפול בכרטיסים שנלחצו
function putpic(card,gif,z,cards,randompic,level)
{
   count++;
   if(count==1)//טיפול בכרטיס הראשון
   {
    // card.style.transform="rotateY(180deg)"
    card.style.transform=" scale(1.1) "
    card.style.transition="transform 0.2s"
    card.src=gif;
    FirstCard=card;//משתנה לכרטיס שנפתח
    FirstGif=gif;//משתנה לתמונה של הכרטיס שנפתח
    FirstCard.onclick="null";
   }

   if(count==2)//טיפול בכרטיס השני
  {  
    card.style.transform=" scale(1.1) "
    card.style.transition="transform 0.4s"
     card.src=gif;
     SecondCard = card;
     SecondGif=gif;
     SecondCard.onclick="null";
     for(let r = 0; r<z; r++)
     {
     cards[r].onclick="null";//שלא יהיה אפשר ללחוץ על יותר משתי כרטיסים
     }
     if(SecondCard.src==FirstCard.src){
      coupls++;
     setTimeout(()=>{hideCard(FirstCard,SecondCard,z,cards,randompic)},750)//פונקציה ש"תחביא" את זוג הכטיסים
     if(coupls!=0 && coupls == z/2){//אם נמצאו כל הזזוגות
      setTimeout(()=>{win(level);},550)//פונקציה שמקפיצה הודעת ניצחון
      clearInterval(timing);//ניקוי של הטיימר
      clearInterval(b);
      }
      }
    
    else{//אם הכרטיסים לא זוג
      setTimeout(()=>{closCard(FirstCard,SecondCard,FirstGif,SecondGif,z,cards,randompic)},750)//פונקצי שסוגרת את הכרטיסים
     
    }
    count=0
   
  }
  }

//פונקציה שסוגרת כרטיסים שהם לא זוג
function closCard(FirstCard,SecondCard,FirstGif,SecondGif,z,cards,randompic){
  FirstCard.style.transform=" scale(1.0) "
  FirstCard.style.transition="transform 0.2s"
  SecondCard.style.transform=" scale(1.0) "
  SecondCard.style.transition="transform 0.2s"
  FirstCard.src="./מאשה\ והדוב-אנגלית\ קריסטמס\ \,שלג_Sub_01.00_00_16_24.Still002.png"
  SecondCard.src="./מאשה\ והדוב-אנגלית\ קריסטמס\ \,שלג_Sub_01.00_00_16_24.Still002.png"
 
  for(let r = 0; r<z; r++)
     {
      if(cards[r].src!=FirstCard||cards[r].src!=SecondCard)//החזרת האונקליק של כל הכרטיסים חוץ מאלו שנלחצו
     cards[r].onclick=function(){putpic(cards[r],randompic[r],z,cards,randompic,level)};
     }
     FirstCard.onclick=function(){putpic(FirstCard,FirstGif,z,cards,randompic,level)}//החזת האונקלילק לכרטיסם שנסגרים
     SecondCard.onclick=function(){putpic(SecondCard,SecondGif,z,cards,randompic,level)}
}
//פונקציה שמעלימה את הקלפים שהם זוג
function hideCard(FirstCard,SecondCard,z,cards,randompic)
{ 
  document.getElementById("pair").play();
  // SecondCard.style.opacity="0"
  // FirstCard.style.opacity="0"
  FirstCard.style.transform=" scale(0.0) "
  SecondCard.style.transform=" scale(0.0) "
  for(let r = 0; r<z; r++)
     {
      if(cards[r].src!=FirstCard)//החזרת האונקליק חוץ מהכרטיסים שנלחצו
     cards[r].onclick=function(){putpic(cards[r],randompic[r],z,cards,randompic,level)}
     }
     
}
//פונקציה לטיימר
function resetTimer() {
  if (timing) { // בדיקה אם כבר קיים טיימר פעיל
      clearInterval(timing); // ביטול הטיימר הפעיל
  }
  i = 0; // איפוס של הטיימר
  width = 0; // איפוס אחוזי התקדמות
}
let i = 0;
let width
let timing
function liner(n,cards,l) {
  resetTimer()
  document.getElementById("p").style.display="block";
  if (i == 0) {
    i = 1;
    let ruler = document.getElementById("line");
     width = 0;
     timing = setInterval(frame, n);
    function frame() {
      if (width >= 100) {//אם נגמר הזמן
        clearInterval(timing);//איפוס
        i = 0;
        GameOver(cards,l,level);//הקפצת הודעה גיים אובר
      } else {
        width++;
        ruler.style.width = width + "%";//קידום באחוזים של הסרגל
        p.innerHTML = width + "%"//תצוגת האחוזים
      }
    }
  }
}
let winwin=document.getElementById("w");//משתנה להודעת ניצחון
let xx = document.getElementsByClassName("close")[0];//כפתור סגירה להודעה
winwin.style.display="none"
//פונקציה לסגירת ההודעה 
xx.onclick = function() {
winwin.style.display = "none";
  }
 let min=200
  //המשחק נוצח
function win(level){
  document.getElementById("audioMidi").pause();
  document.getElementById("audioEasy").pause();
  document.getElementById("onclick").pause();
  document.getElementById("winery").play();
  titleNote.innerHTML="!סימת בהצלחה את משחק הזיכרון";
  winwin.style.display = "block";
  second.innerHTML=":נהנית"+"?שחק שוב"+" ";
   titleNote2.innerHTML="!!!כל הכבוד";
  text.innerHTML="!!"+"סיימת תוך"+" "+width+" "+"שניות"
  document.getElementById("p").style.display="none"
 document.getElementById("p-end").style.display="block"
 document.getElementById("tbl").style.display="block"
 document.getElementById("p-end").innerHTML=width
 document.getElementById("Game-Over1").onclick=function(){hardlevel()};
document.getElementById("Game-Over2").onclick=function(){mediumlevel()};
document.getElementById("Game-Over3").onclick=function(){Easylevel()};
 coupls=0;
 i=0;
 count=0;
 document.getElementById(m).innerHTML=width
m++
document.getElementById(m).innerHTML="ניצחון"
m++
document.getElementById(m).innerHTML=level
m++
if(width<min)
{
  min=width;
  document.getElementById("cc").innerHTML="השיא שלך:"+" "+width
  flagC=true
}
 if(m>=48)
 m=0
 
}
let flagC=false//דגל שנדלק בשמחק הראשון
//אם נגמר המשחק
function GameOver(cards,l,level)
{if(flagC==false)//אם המשחק הראשון נגמר בכישלון
  {
  document.getElementById("cc").innerHTML="השיא שלך:"+"0"
  flagC=true
}
   document.getElementById("audioMidi").pause();
document.getElementById("audioEasy").pause();
document.getElementById("onclick").pause();
document.getElementById("winery").pause();
document.getElementById("overgame").play();
  winwin.style.display = "block";
  titleNote.innerHTML="game over";
  titleNote2.innerHTML="!!לא נורא חבר יש צרות גדולות יותר";
  text.innerHTML="!המשחק נגמר! אזל הזמן<br>תוכל לנסות שוב"
  second.innerHTML="";
  for(let r = 0; r<l; r++)//כל הכרטיסים יעלמו ברגע שעובר הזמן
     {
     cards[r].style.display="none"
    }

coupls=0;
i=0;
count=0;
document.getElementById("tbl").style.display="block"
document.getElementById(m).innerHTML="---"
m++
document.getElementById(m).innerHTML="כישלון"
m++
document.getElementById(m).innerHTML=level
m++

if(m>=48)
m=0
document.getElementById("Game-Over1").onclick=function(){hardlevel()};
document.getElementById("Game-Over2").onclick=function(){mediumlevel()};
document.getElementById("Game-Over3").onclick=function(){Easylevel()};
}
//פונקציות ל"היסטוריה" של המשחקים
function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
  document.getElementById("main").style.marginLeft = "250px";
 }
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//פונקציות להוראות משחק
function openT() {
  document.getElementById("myNav").style.height = "100%";
}

function closeT() {
  document.getElementById("myNav").style.height = "0%";
}