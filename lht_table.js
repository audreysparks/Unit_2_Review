"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: audrey sparks
   Date:   2-3-2020

	
*/

var thisDay = new Date("August 30, 2018"); // theater events over a two week period 

var tableHTML =  
htmlCode +="<table id='eventTable'>";//events table
htmlCode += "<caption>"; 
htmlCode += "Upcoming Events"; 
htmlCode += "</caption>"; 
htmlCode += "<tr>"; 
htmlCode += "<th>";
htmlCode += "Date"; 
htmlCode += "</th>"; 
htmlCode += "<th>";
htmlCode += "Events";
htmlCode += "</th>" ;
htmlCode += "<th>" ;
htmlCode += "Price"; 
htmlCode += "</th>";
htmlCode += "</tr>"; 

var endDate = new Date(thisDay.getTime(), + 14*24*60*60*1000); //list of dates occurring within 14 days after current date

for(var i = 0; i < eventDates; i ++){ //loops through the length of the eventDates array
   var eventDate = new Date(thisDay.getTime(i)) 
   var eventDay = toDateString();
   var eventTime = toLocaleTimeString();
  

   if(thisDay <= eventDate && eventDate <= endDate){ //if the event falls within a two-week window 
      htmlCode += "<tr>";
      htmlCode += "<td>" + "@ event time" + "</td>";
      htmlCode += "<td>" + "description" + "</td>";
      htmlCode += "<td>" + "price" + "</td>";
      htmlCode += "</tr>";
      

   }

   var tableHTML = "</table>"; //adds text to html
   
   
   
}

