//include JSON music database prior to this on same page
const musicData = JSON.parse(JSON.stringify(works_packs));

function render_album_entry (entry_title) {
	//Get song info with song title
	data = musicData.find(({title}) => title == entry_title);

	//set any DOM reference variables now that the page is loaded & ready
	album = document.getElementById("album");
	
	//create elements
	let links = document.createElement("p");
	links.className = "album-links";
	//constants
	const TODAY = new Date().toJSON();
	
	album.innerHTML = '<div style="position:relative;padding-bottom:56.25%;"><iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="'+ data.embed +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	
	//fill summary cell, place links here
	if (data.date > TODAY) {	//Let people know if the track is not yet out.
		links.innerHTML += '<p><i style="font-weight: bold;">(Release date: ' + data.date.slice(0,10) + ')</i></p> ';
	}
	links.innerHTML += '<span class="hide-in-mobile"><b>Asset Stores</b><br/></span>';
	for(key in data.stores){
		links.innerHTML += '<a href="'+ data.stores[key] +'"><img src="../../images/icons/'+ key +'.png"/></a>';
	}
	//next we add streaming links
	links.innerHTML += '<span class="hide-in-mobile"><br/><b>Streaming</b><br/></span>';
	for(key in data.streaming){
		links.innerHTML += '<a href="'+ data.streaming[key] +'"><img src="../../images/icons/'+ key +'.png"/></a>';
	}
	
	album.appendChild(links);
}
