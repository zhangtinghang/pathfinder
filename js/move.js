(function(){
				var ly = 0,ys, p = null,yDeg = 0,y1,flag = 0,arrY;
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
				ys = e.touches["0"].clientY - y1;
				y1 = e.touches["0"].clientY;
				ly += ys * 0.5;
				setTimeout(remove(),30);
			})
			
			//移动完毕
			document.addEventListener("touchend", function(evet) {
//				设置阻尼系数 Math.abs绝对值
				p = setInterval(function(){
					if(Math.abs(ys)<0.5){clearInterval(p)};
						ys = ys * 0.95;
						ly += ys * 0.5;
						setTimeout(remove(),30);
					},30);
					
				document.removeEventListener('touchmove',this,false);
           		document.removeEventListener('touchend',this,false);
			})
			function remove(){
				var oLs = $('#content ul li').size();
				var flagIndex = oLs;
				for(var i = flagIndex; i > 0; i--) {
					var y = -i * 110;
					yDeg = parseFloat(y) + parseFloat(ly);
					//判断是否为>0
					if(yDeg > 0) {
						yDeg = 0;
					}
				//当第一个元素位置小于0时，禁止改变
//						if(y == -110){
//							if(yDeg < -110){
//								for(var i = oLs-1; i >= 0; i--) {
//									yDeg = -i * 110;
//									$('#content ul li').eq(i).css({
//										'transform': 'translateY(' + yDeg + 'px) translateZ(' + yDeg + 'px)'
//									});
//									if(i == 0){
//										return ;
//									}
//								}
//							
//							}
//						}
				//当最后一个元素显示在界面上时，禁止再移动下来
//						if(i == flagIndex-1){
//							if(yDeg >= -220){
//								yDeg = -220;
//								var yDeg1 = -220, yDeg2 = -110, yDeg3 = 0;
//								$('#content ul li').eq(i).css({
//										'transform':'translateY('+yDeg+'px) translateZ('+yDeg+'px)'
//								});
//								$('#content ul li').eq(i-1).css({
//										'transform':'translateY('+yDeg1+'px) translateZ('+yDeg1+'px)'
//								});
//								$('#content ul li').eq(i-2).css({
//										'transform':'translateY('+yDeg2+'px) translateZ('+yDeg2+'px)'
//								});
//								$('#content ul li').eq(i-3).css({
//										'transform':'translateY('+yDeg3+'px) translateZ('+yDeg3+'px)'
//								});
//								return false;
//							}
//						}
					
					$('#content ul li').eq(i).css({
						'transform': 'translateY(' + yDeg + 'px) translateZ(' + yDeg + 'px)'
					});
				}
			}
})()
