var areaOfSite = "Studio";

$(document).on("ready", function(){


	$('#outer_block').on("click", function(){
		if(areaOfSite === "Boutique") {
      $(this).css("background-color", "#4A4A4C");
      $('#inner_block').css("background-color", "#808285");
      $('#inner_block_main_content_table').show();
      $('#inner_block_main_content').css("padding", "20px");
      $('#outer_block_span_link_areaofsite').text("Boutique");
      $('#inner_block_span_link_areaofsite').text("Studio");



      /*
      Grab the data from the table cells first, particularly this is needed for the table row that we will eventually remove and we want to do this before we remove it (or else we won't be able to get the data that is in that table row), because we need the data in that table row too, after that is complete then build the tables up. All of the table cells that have a value get switched out here in the tables besides, "name" and "area of site", because the "name" cell's value will remain the same and the "area of site" cell will be handled separately because the outer_block_header_table doesn't have an "area of site" cell so we get this from the value hosts from the labels (that look like titles) positioned above the table.
      */


      var four_text = $("#four").text();
      var inner_block_header_table_header_location_and_slash_or_phone_text = $("#inner_block_header_table #header_location_and_slash_or_phone").text();
      var five_html = $("#five").html();
      var inner_block_header_table_two_text = $("#inner_block_header_table #two").text();
      var inner_block_header_table_header_mailing_list_or_additional_information_html = $("#inner_block_header_table #header_mailing_list_or_additional_information").html();
      var inner_block_header_table_three_html = $("#inner_block_header_table #three").html();
      var ten_text = $("#ten").text();
      var outer_block_header_table_header_location_and_slash_or_phone_text = $("#outer_block_header_table #header_location_and_slash_or_phone").text();
      var nine_html = $("#nine").html();
      var outer_block_header_table_two_text = $("#outer_block_header_table #two").text();
      var outer_block_header_table_header_mailing_list_or_additional_information_html = $("#outer_block_header_table #header_mailing_list_or_additional_information").html();
      var outer_block_header_table_three_html = $("#outer_block_header_table #three").html();


// Build the outer_block_header_table when "Studio" becomes the inner block (Essentially, Homepage)
      $("#ten").text(four_text);
      $("#outer_block_header_table #header_location_and_slash_or_phone").text(inner_block_header_table_header_location_and_slash_or_phone_text);
      $("#nine").html(five_html);
      $("#outer_block_header_table #two").text(inner_block_header_table_two_text);
      $("#outer_block_header_table #header_mailing_list_or_additional_information").html(inner_block_header_table_header_mailing_list_or_additional_information_html);
      $("#outer_block_header_table #three").html(inner_block_header_table_three_html);

      // Build the inner_block_header_table when "Studio" becomes the inner block (Essentially, Homepage)
      $("#four").text(ten_text);
      $("#inner_block_header_table #header_location_and_slash_or_phone").text(outer_block_header_table_header_location_and_slash_or_phone_text);
      $("#five").html(nine_html);
      $("#inner_block_header_table #two").text(outer_block_header_table_two_text);
      $("#inner_block_header_table #header_mailing_list_or_additional_information").html(outer_block_header_table_header_mailing_list_or_additional_information_html);
      $("#inner_block_header_table #three").html(outer_block_header_table_three_html);

      $("#outer_block_header_table #header_location_and_slash_or_phone").parent().next().remove();
      $("#inner_block_header_table #header_location_and_slash_or_phone").parent().after("<tr><td id='two'></td><td id='header_mailing_list_or_additional_information'><a href='#!'>Datum</a></td></tr>");



      areaOfSite = "Studio";
		} else {
      $(this).css("background-color", "#808285");
      $('#inner_block').css("background-color", "#4A4A4C");
      $('#inner_block_main_content_table').hide();
      $('#inner_block_main_content').css("padding", "20px");
      $('#outer_block_span_link_areaofsite').text("Studio");
      $('#inner_block_span_link_areaofsite').text("Boutique");



      /*
      Grab the data from the table cells first, particularly this is needed for the table row that we will eventually remove and we want to do this before we remove it (or else we won't be able to get the data that is in that table row), because we need the data in that table row too, after that is complete then build the tables up. All of the table cells that have a value get switched out here in the tables besides, "name" and "area of site", because the "name" cell's value will remain the same and the "area of site" cell will be handled separately because the outer_block_header_table doesn't have an "area of site" cell so we get this from the value hosts from the labels (that look like titles) positioned above the table.
      */


      var four_text = $("#four").text();
      var inner_block_header_table_header_location_and_slash_or_phone_text = $("#inner_block_header_table #header_location_and_slash_or_phone").text();
      var five_html = $("#five").html();
      var inner_block_header_table_two_text = $("#inner_block_header_table #two").text();
      var inner_block_header_table_header_mailing_list_or_additional_information_html = $("#inner_block_header_table #header_mailing_list_or_additional_information").html();
      var inner_block_header_table_three_html = $("#inner_block_header_table #three").html();

      var ten_text = $("#ten").text();
      var outer_block_header_table_header_location_and_slash_or_phone_text = $("#outer_block_header_table #header_location_and_slash_or_phone").text();
      var nine_html = $("#nine").html();
      var outer_block_header_table_two_text = $("#outer_block_header_table #two").text();
      var outer_block_header_table_header_mailing_list_or_additional_information_html = $("#outer_block_header_table #header_mailing_list_or_additional_information").html();
      var outer_block_header_table_three_html = $("#outer_block_header_table #three").html();


      // Build the inner_block_header_table when "Boutique" becomes the inner block (Essentially, Homepage)
      $("#four").text(ten_text);
      $("#inner_block_header_table #header_location_and_slash_or_phone").text(outer_block_header_table_header_location_and_slash_or_phone_text);
      $("#five").html(nine_html);
      $("#inner_block_header_table #two").text(outer_block_header_table_two_text);
      $("#inner_block_header_table #header_mailing_list_or_additional_information").html(outer_block_header_table_header_mailing_list_or_additional_information_html);
      $("#inner_block_header_table #three").html(outer_block_header_table_three_html);

      // Build the outer_block_header_table when "Boutique" becomes the inner block (Essentially, Homepage)
      $("#ten").text(four_text);
      $("#outer_block_header_table #header_location_and_slash_or_phone").text(inner_block_header_table_header_location_and_slash_or_phone_text);
      $("#nine").html(five_html);
      $("#outer_block_header_table #two").text(inner_block_header_table_two_text);
      $("#outer_block_header_table #header_mailing_list_or_additional_information").html(inner_block_header_table_header_mailing_list_or_additional_information_html);
      $("#outer_block_header_table #three").html(inner_block_header_table_three_html);


      $("#inner_block_header_table #header_location_and_slash_or_phone").parent().next().remove();
      $("#outer_block_header_table #header_location_and_slash_or_phone").parent().after("<tr><td id='two'></td><td id='header_mailing_list_or_additional_information'><a href='#!'>Datum</a></td></tr>");



      areaOfSite = "Boutique";
		}
		
	})
  
  $('#work1').on('click', function(e){
	  e.stopPropagation();
	  $('#table2').hide();

	  $('#inner_block_main_content').css("padding-left", "260px").append('<table id="inner_block_main_content_table"><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr></table>');
  })
	
  $('#ten, #one').on('click', function(){
	  // When the areaOfSite is Boutique give the padding style 20px for #inner_block_main_content and show the #inner_block_header_table if it's currently in a hidden state.
    if(areaOfSite === "Boutique") {
		  $('#inner_block_main_content').css("padding", "20px");
	    $('#inner_block_header_table').show();
      /*
	    $('#outer_block_main_content_table').hide();
	    */
     }
   })

   $("#outer_block_span_link_name, #outer_block_span_link_areaofsite, #inner_block_span_link_name, #inner_block_span_link_areaofsite").on("click", function(e) {
    // Prevent the event from bubbling any further outward with the e.stopPropagation() method so it doesn't reach the #outer_block click event handler, we are going to trigger the #outer_block click event already in all cases in this function, we don't need that event handler to be ran any additional times than the specific amount that we want, otherwise the areaOfSite could be in the alternate areaOfSite than the areaOfSite that is desired.
    e.stopPropagation();
    if($(this).parent().parent().parent().parent().parent()[0] === $("#outer_block")[0]) {
      $("#outer_block").trigger("click");
    } else {
      $("#outer_block").trigger("click");
      $("#outer_block").trigger("click");
    }
   })


})

