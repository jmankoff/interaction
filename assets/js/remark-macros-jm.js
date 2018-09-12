remark.macros.img = function (altText, width) {
  var url = this;
  return '<img alt="' + altText + '" src="' + url + '" style="width: ' + width + '" />';
};
