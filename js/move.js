(function(){
				var ly = 0,ys, p = null,yDeg = 0,y1,flag = 0,arrY,flagCar = false;
			//移动开始
			document.addEventListener("touchstart", function(event) {
				var oLs = $('#content ul li').size();
				var flagIndex = oLs;   
				//清除定时器
				y1 = event.targetTouches["0"].clientY;
				clearInterval(p);
				//获取当前有多少li
				for(var t = 0; t < flagIndex; t++) {
					arrY = $("#content ul li").eq(t).css('transform').match(/\d+/g)[14] || '0';
					if(arrY == 0) {
						flag++;
						continue;
					} else {
						break;
					}
				}
			});
			
			//开始移动
			document.addEventListener('touchmove', function(e) {
				//移动相对距离
				e.preventDefault(); 
				flagCar = true;
				ys = e.touches["0"].clientY - y1;
				y1 = e.touches["0"].clientY;
				ly += ys * 0.5;
				setTimeout(remove(),30);
			})
			
			//移动完毕
			document.addEventListener("touchend", function(evet) {
//				设置阻尼系数 Math.abs绝对值
				if(flagCar){
					p = setInterval(function(){
					if(Math.abs(ys)<0.5){clearInterval(p)};
						ys = ys * 0.95;
						ly += ys * 0.5;
						setTimeout(remove(),30);
					},30);
					
				document.removeEventListener('touchmove',this,false);
           		document.removeEventListener('touchstart',this,false);
				}
				
			})
			function remove(){
				var oLs = $('#content ul li').size();
				var flagIndex = oLs;
				var changeFlag =true;
				for(var i = flagIndex; i >= 0; i--) {
					var y = -i * 200;
					yDeg = parseFloat(y) + parseFloat(ly);
					if(yDeg < -2*200){
							yDeg = -2*200;
						}
					if(yDeg > 500){
							yDeg = 500;
					}
					//静止上面
					if(i == flagIndex && yDeg > -400){
						return false;
					}
					//静止下面
					if(i == 1 && yDeg < -200){
						return false;
					}
					
					$('#content ul li').eq(i).css({
							'transform': 'translateY(' + yDeg + 'px) translateZ(' + yDeg + 'px)'
						});
				}
				
			}
})()
