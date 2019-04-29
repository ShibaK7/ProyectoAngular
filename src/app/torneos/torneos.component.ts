import { Component, OnInit } from '@angular/core';
//import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';


declare const myTest: any;
declare var $: any;
//import * as $ from 'jquery';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function() {
      $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $(".carousel-item")
                .eq(i)
                .appendTo(".carousel-inner");
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });
    });



    $(window).load(function () {
      $(".trigger_popup_fricc").click(function(){
         $('.hover_bkgr_fricc').show();
      });
      $('.hover_bkgr_fricc').click(function(){
          $('.hover_bkgr_fricc').hide();
      });
      $('.popupCloseButton').click(function(){
          $('.hover_bkgr_fricc').hide();
      });
  });

  

  var modal = document.getElementById('modal-wrapper');
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }



  }

  onClick(){
    myTest();
  }
}
