import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// img 1
  
$('#small_imgs1').click(
  function(){
    $('.big_img').css({"background":" url(../../assets/img/Untitled-1.png) no-repeat center","background-size":"contain"});
}
);

// img 2
 
$('#small_imgs2').click(
  function(){
    $('.big_img').css({"background":" url(../../assets/img/Untitled-2.png) no-repeat center","background-size":"contain"});
}
);

// img 3

$('#small_imgs3').click(
  function(){
    $('.big_img').css({"background":" url(../../assets/img/Untitled-3.png) no-repeat center","background-size":"contain"});
}
);

// img 4

$('#small_imgs4').click(
  function(){
    $('.big_img').css({"background":" url(../../assets/img/Untitled-4.png) no-repeat center","background-size":"contain"});
}
);




  }
}


