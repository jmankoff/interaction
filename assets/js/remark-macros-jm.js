
remark.macros.img = function (altText, width) {
  var url = this;
  return '<img alt="' + altText + '" src="' + url + '" style="width: ' + width + '" />';
};


remark.macros.youtube = function (altText, yid) {
	return '<iframe title="'+ altText + '" width="560" height="315" src="https://www.youtube.com/embed/'+yid+'?rel=0&amp;controls=1&amp;showinfo=0"	frameborder="0" allow="autoplay; encrypted-media"	allowfullscreen></iframe>';
};



remark.macros.vimeo = function (altText, yid) {
	return '<iframe title="'+ altText + '" src="https://player.vimeo.com/video/'+yid+' width="500" height="281" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'; 
};

