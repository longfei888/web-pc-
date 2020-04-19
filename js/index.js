// 实例插件函数 为元素添加指定的动画效果（animate.css）
jQuery.fn.animate2 = function(){//定义插件
	//console.log(this)//this指代jQuery类数组对象，不是Dom
	this.on('mouseenter',function(){//鼠标进入事件
		//console.log(this)//此次的this指代的Dom对象，而不是jQuery
		let ani = $(this).data('animate')//获取data-animate属性
		$(this).addClass('animated '+ani )//添加两个动画类
	})
	.on('mouseleave',function(){      //鼠标移出
		let ani = $(this).data('animate')//获取data-animate属性
		$(this).removeClass('animated '+ani)//移出动画类
	})
}
$('[data-animate]').animate2()//调用插件

//下拉菜单 .dropdown>span+.menu
jQuery.fn.dropdown = function(){
	this.on('mouseenter',function(){//鼠标进入
		$(this).find('.menu').slideDown()//找元素展开
	})
	.on('mouseleave',function(){//鼠标移出
		$(this).find('.menu').slideUp()//收起
	})
}
$('[data-toggle="dropdown"]').dropdown()//使用插件

// 标签页组件 .tabs>.list-inkine+pane*3
jQuery.fn.tabs = function(){
	this.find('.list-inline li').on('mouseenter',function(){
		$(this).addClass('active').siblings('.active').removeClass('active').removeClass('active')//当前li添加active类，兄弟失去active类
		let i = $(this).index()//当前li的同级元素中的下标
		console.log(i)
		let pane = $(this).parent().parent().find('.pane')[i] //与当前li的下标一样的pane 此处的pane是DOM对象，不是jQuery对像
		$(pane).addClass('active').siblings('.active').removeClass('active')//找到pane获得active类 其兄弟失去active类
	})
}

$('[data-toggle="tabs"]').tabs()
