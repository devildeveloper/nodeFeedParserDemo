$(document).on("ready",init);
function init(){	
	window.articles=[];
	var xhr=$.ajax({
		url:"/all-news"
	}).done(function(data){
		var len=data.length;		
		var temp=$("#news");
		for(var i=0;i<len;i++){			
			temp.append("<article data-cod='"+
				i+"' class='art'><h3>"+
				data[i].titulo+"</h3><p>"+
				data[i].resumen+"</p><div class='fullart'>"+
				"</div></article>");
			window.articles.push({data:data[i].descripcion});
		}
		
	});
	// activamos el full de los articulos (noticias)	
	$("section").delegate(".art","click",function(){
		var index=$(this).attr("data-cod");
		$(this).animate({"width":"95%"});
		$(this).children("p").slideToggle();
		$(this).children(".fullart").html(window.articles[index].data);
		$(this).children(".fullart").slideToggle();		
	});
}
