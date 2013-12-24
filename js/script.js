var index = 1;
var index_append_sites = 0;
$(document).ready(function(){
	$("#start").click(function(){
		$("#frame_one").attr("onload", "setTimeout('next_site()', 1000)");
		$("#frame_one").attr("src", sites[index]+"google.ru");
		$("#added_site .addedsite").eq(index_append_sites).append("<p><a href="+sites[index]+"google.ru"+" target='_blank'>"+sites[index]+"google.ru"+"</a></p>");
		index++;
	});
});
	function next_site(){
		if(index<sites.length)
		{
			$("#frame_b iframe").eq(0).attr("src", sites[index]+"google.ru");
			if(index>=sites.length/3&&index<sites.length*2/3)
			{
				index_append_sites = 1;
			}
			if(index>=sites.length*2/3)
			{
				index_append_sites = 2;
			}
			$("#added_site .addedsite").eq(index_append_sites).append("<p><a href="+sites[index]+"google.ru"+" target='_blank'>"+sites[index]+"google.ru"+"</a></p>");
			index++;
		}
		else
		{
			alert("Complete");
		}
	}