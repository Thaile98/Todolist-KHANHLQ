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
	
});
$('#deleteall').click(function () {
	$('#list li').each(function () {
		$(this).hasClass('checked')?$(this).remove():'';
	})
	
});


// $(document).on('dblclick','#list li',function () {
// 	$(this).html('<input type="text" class="edittext" value="'+$(this).children().get(0).innerHTML+'">');
// });
// $(document).on('keypress','.edittext',function (key) {
// 	if (key.key==='Enter' && $(this).val()!='') {
// 		$(this).parent().html('<li><div class="text">'+$(this).val()+'</div><div class="remove">x</div><div class="clear"></div></li>')
// 	}
// })