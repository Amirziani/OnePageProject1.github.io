import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Button Alert
    $(function () {
      $(".send").click(function (){
        alert('Your Comment Has Been Sent');
      });
    });

    // comment Counter 
$(function () {
  function num_Char(id, span) {
  
    $(id).keyup(function () {
  
        var max = $(this).attr('maxlength'); //------ 150 charccter
        var sizeval = $(this).val().length;
        var allchar = max - sizeval;
        $(span).html('remainder ' + allchar + ' Charcter ');
  
    });
   //--------------
   $('#contactt').click(function(){
     $('#contact').fadeIn(500).delay(1500).fadeOut(500);  
   })
  
   $('#helpp').click(function(){
    $('#help').fadeIn(500).delay(1500).fadeOut(500) 
    $('#help').css({'postition':'absolute','left':'100px'});
  })
  
  $('#invitee').click(function(){
    $('#invite').fadeIn(500).delay(1500).fadeOut(500) ;
   
  })
  
  
  }
  //--------------
  num_Char('#text_news', '#span_text');
  });
  
  
  // end comment Counter
  
  }

}
