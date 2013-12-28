var index = 0;
var index_append_sites = 0;
var on_app = false;
var first_start = true;
var site_url = "";
$(document).ready(function(){
    /*$('.switch').css('background-image', 'url("img/switch.png")');
    $('.on_off').css('display','none');
    $('.on, .off').css('text-indent','-10000px');

    $("input[name=on],input[name=off]").change(function() {
        var button = $(this).val();
        if(button == 'off'){
            $('.switch').css('background-position', 'right');
            on_app= false;
        }
        if(button == 'on'){
            if(first_start)
            {
                first_start=false;
                site_url = $("#site_url").val();
                $("#frame_one").attr("onload", "setTimeout('next_site()', 1000)");
            }
            $("#frame_one").attr("src", sites[index]+site_url);
            $("#added_site .addedsite").eq(index_append_sites).append("<p><a href='"+sites[index]+site_url+"' target='_blank'>"+sites[index]+site_url+"</a></p>");
            index++;
            $('.switch').css('background-position', 'left');
            on_app= true;
        }
     });*/
    $(".on_b").click(function(){
        $('.swich_b').css('background-position', 'left');
        if(first_start)
        {
            first_start=false;
            site_url = $("#site_url").val();
            $("#frame_one").attr("onload", "setTimeout('next_site()', 1000)");
        }
        $("#frame_one").attr("src", sites[index]+site_url);
        $("#added_site .addedsite").eq(index_append_sites).append("<p><a href='"+sites[index]+site_url+"' target='_blank'>"+sites[index]+site_url+"</a></p>");
        index++;
        on_app= true;
    });
    $(".off_b").click(function(){
        $('.swich_b').css('background-position', 'right');
        on_app= false;
    });
    $("#site_url").keypress(function(e){
        if(e.keyCode==13){
            alert("Для запуска необходимо переключить выключетель ниже в состоянии ON.");
        }
    });
});
	function next_site(){
		if(index<sites.length&&on_app)
		{
			$("#frame_b iframe").eq(0).attr("src", sites[index]+site_url);
			if(index>=sites.length/3&&index<sites.length*2/3)
			{
				index_append_sites = 1;
			}
			if(index>=sites.length*2/3)
			{
				index_append_sites = 2;
			}
			$("#added_site .addedsite").eq(index_append_sites).append("<p><a href='"+sites[index]+site_url+"' target='_blank'>"+sites[index]+site_url+"</a></p>");
			index++;
		}
		else
		{
            $('.switch').css('background-position', 'right');
            on_app= false;
        }
	}