import { Component , OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
ngOnInit () { 

  $('#btnweb').click(function(){
    $('#web').show(3000);
    $('#opening').hide(3000);
  })
    $('#click2').click(function(){
      $('#web').css({'display':'inline'})
      $('#opening1').show(2000);
    }) 
    $('#btnweb').click(function(){
    $('#web').show(3000);
    $('#opening').hide(3000);
    })
    $('#click2').click(function(){
      $('#web').css({'display':'inline'})
      $('#opening1').show(2000);
    })
  
  }
};
