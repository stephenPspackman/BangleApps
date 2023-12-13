{
  require("Font4x5").add(Graphics);
  require("Font6x8").add(Graphics);
  WIDGETS.widtz={
  	area:'tl',
  	width:24,
  	height:24,
  	draw:function() {
  	  var settings = require('Storage').readJSON('setting.json',1)||{};
  	  var vp = this.y+11;
  	  g.reset();
  	  g.drawRect(this.x, this.y, this.x+this.width-1, this.y+this.height-1);
  	  g.setColor(g.getBgColor);
  	  g.fillRect(this.x+1, this.y+1, this.x+this.width-2, this.y+this.height-2);
  	  g.reset();
  	  g.setFontAlign(0,-1);
  	  g.setFont('6x8');
  	  g.drawString(settings.timezoneLabel || 'GMT', this.x+this.width/2, this.y+2);
  	  if (settings.timezoneLabel) {
  		  vp = this.y+14;
  		  g.drawLine(this.x+3, this.y+12, this.x+this.width-4, this.y+12);
  	  }
  	  var tz = settings.timezone||0;
  	  var tza = Math.abs(tz);
  	  var tzf = (tz < 0 ? '-' : '+') + Math.floor(tza);
  	  var tzm = Math.floor(tza * 60 % 60);
  	  if (tzm) {
  		  tzf += ':' + ('' + tzm).padStart(2, '0');
  		  g.setFont('4x5');
  	  }
  	  g.drawString(tzf, this.x+this.width/2, vp);
  	}
  };
  Bangle.on("timezone", () => WIDGETS.widtz.draw());
}
