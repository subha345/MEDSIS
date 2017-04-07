var o = {
	init: function(){
		this.diagram();	
		
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 200, 200),
			rad = 20,
			defaultText = 'BP',
			speed = 250;
			
		r.circle(100, 100, 40).attr({ stroke: 'none', fill: '#193340' , resize: true });
		
		var title = r.text(100, 100, defaultText).attr({
			font: '11px Arial',
			fill: '#fff'
		}).toFront();
		
		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(10, -180),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 100 + rad * Math.cos(b),
				sy = 100 - rad * Math.sin(b),
				x = 100 + rad * Math.cos(a),
				y = 100 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}
		
		$('.get').find('.arc').each(function(i){
	
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text(),
				pholder = t.find('.real').val(),
				unit = t.find('.unit').text();
				//alert(pholder);
			
			rad += 22;	
			var z = r.path().attr({ arc: [ value, color, rad], 'stroke-width': 20 });
			
			z.mouseover(function(){
                this.animate({ 'stroke-width': 28, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + pholder + '\n' + unit }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 20, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});	
            });
		});
		
	}
}
$(function(){ o.init(); 
		//var paper = Raphael("get", 70, 70);
		//paper.setViewBox(0, 0, 70, 70 );

		// Setting preserveAspectRatio to 'none' lets you stretch the SVG
		//paper.canvas.setAttribute('preserveAspectRatio', 'none');

		// Change the widht and the height attributes manually through DOM
		//$('#diagram').attr('width', newWeight).attr('height', newHeight);		
	});
