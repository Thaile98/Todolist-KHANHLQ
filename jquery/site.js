// function get value li
function getvalue () {
	return $('#todotext').val();
}
// Count thing to do
function F5 () {
	let c=0;
	$('#list li').each(function () {
		if ($(this).hasClass('checked'))
			c++;
	})
	$('#count').html($("#list li").length-c);
}
F5();
$('#todotext').focus();
// on enter in input box
$('#todotext').keypress(function (key) {
	if (key.key==='Enter' && $(this).val()!='') {
	
		$("#list").prepend('<li><div class="text">'+getvalue()+'</div><div class="remove">x</div><div class="clear"></div></li>');
		$('#todotext').val('');
		// refresh Count thing to do
		F5();
		checkView()?f_completed():'';
		//remove get all bg
	}
})


//event click on remove class
$(document).on('click','.remove',function () {
	$(this).parent().remove();
	// refresh Count thing to do
	F5();
});

//event click on li tag
$(document).on('click','#list li',function () {
	$(this).toggleClass('checked');
	F5();
	checkView()?f_completed():'';
});

$('#getall').click(function () {
	var flag =false;
	var count=0;
	$('#list li').each(function() {
		if ($(this).hasClass('checked')) {
			flag=true;
			count++;
		}
		else
			flag=false;

	});
	if (flag && count==$("#list li").length) {
		$('#list li').removeClass('checked');
		F5();
	}
	else{
		$('#list li').addClass('checked');
		F5();
	}
	checkView()?f_completed():'';
	
});
$('#deleteall').click(function () {
	$('#list li').each(function () {
		$(this).hasClass('checked')?$(this).remove():'';
	})
	
});


$(document).on('mousedown','.text',function (e) {
	if( e.button == 2 ) {
		// console.log($(this).val());
		$(this).html('<input type="text" class="edittext" value="'+$(this).html()+'">');
		$(this).removeClass('text');
		$(this).css('width', '90%');
		$(this).css('float', 'left');
	}
});
$(document).on('keypress','.edittext',function (key) {
	if (key.key==='Enter' && $(this).val()!='') {
		$(this).parent().html('<div class="text">'+$(this).val()+'</div>');
	}
})
document.oncontextmenu = function() {return false;};

$('#f_all').click(function () {
	resetActive();
	$(this).addClass('active');
	$('#list li').each(function (index,val) {
		$(this).css('display','block');
	})
})
$('#f_active').click(function () {
	resetActive();
	$(this).addClass('active');
	$('#list li').each(function () {
		!$(this).hasClass('checked')?$(this).css('display', 'block'):$(this).css('display', 'none');
	})
})
$('#f_completed').click(function () {
	resetActive();
	$(this).addClass('active');
	$('#list li').each(function () {
		$(this).hasClass('checked')?$(this).css('display', 'block'):$(this).css('display', 'none');
	})
})
function resetActive () {
	$('#f_all').removeClass('active');
	$('#f_active').removeClass('active');
	$('#f_completed').removeClass('active');

}
function f_completed () {
	$('#list li').each(function () {
		$(this).hasClass('checked')?$(this).css('display', 'block'):$(this).css('display', 'none');
	})
}
function checkView () {
	return $('#f_completed').hasClass('active')?true:false;
}



  // $(document).mousedown(function(e){ 
  //   if( e.button == 2 ) { 
  //     alert('Right mouse button!'); 
  //     return false; 
  //   } 
  //   return true; 
  // }); 