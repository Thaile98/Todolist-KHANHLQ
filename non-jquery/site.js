Reload = function() {
	let Li=document.getElementById('list').getElementsByTagName('li');
	let completed=0;
	for (var i = 0; i < Li.length; i++) {
		Li[i].classList.contains('checked')?completed++:'';
	}

	document.getElementById('count').innerHTML=Li.length-completed;
};

//Delete li
	Element.prototype.remove = function() {
		if (this.parentElement!=null)
			this.parentElement.removeChild(this);
	}

addRemove = function() {
	let removeitems= document.getElementsByClassName('remove');
	for (var i = removeitems.length - 1; i >= 0; i--) {
	// console.log(removeitems[i]);	
	removeitems[i].addEventListener("click", function () {
		this.parentElement.remove();
		Reload();
	});	
}
};

Reload();
document.getElementById("todotext").focus();
addRemove();
	// Add item

	document.getElementById('todotext').addEventListener('keypress', function (key) {
	// catch event press Enter
	if (key.key==='Enter' && this.value!='') {
		let li = document.createElement("li");
		let text = document.createElement("div");
		text.appendChild(document.createTextNode(document.getElementById('todotext').value));
		text.setAttribute('class', 'text');
		let remove = document.createElement("div");
		remove.appendChild(document.createTextNode('x'));
		remove.setAttribute('class', 'remove');
		let clear = document.createElement("div");
		clear.setAttribute('class', 'clear');
		li.appendChild(text);
		li.appendChild(remove);
		li.appendChild(clear);
		li.addEventListener('click', function () {
			this.classList.toggle('checked');
			Reload();
		})
		document.getElementById('list').prepend(li);
		// clear to do text
		document.getElementById('todotext').value='';

		// update things
		Reload();

		//add listener for new li 
		addRemove();

		// add event Completed
		// addCompleted();
	}
// document.getElementById('list').getElementsByTagName('li')[0].remove();
// 
// remove Items
});
	// completed item
// console.log(document.getElementById('list').children);

let li = document.getElementById('list').children;
for (var i = 0; i < li.length; i++) {
		// console.log(li[i]);
		li[i].addEventListener('click', function () {
			this.classList.toggle('checked');
			Reload();
		})
	}

// for (var i = 0; i < li.length; i++) {
// 	li[i].addEventListener('dblclick', function () {
// 		console.log('ok');
// 	})
// }

// get all
document.getElementById('getall').addEventListener('click', function () {
	let li = document.getElementById('list').children;
	let count=0;
	for (var i = 0; i < li.length; i++) {
		if (li[i].classList.contains('checked')) {
			count++;
		}
	}
	if (count==li.length) {
		for (var i = 0; i < li.length; i++) {
			li[i].classList.remove('checked');
			Reload();
		}
	}
	else
		for (var i = 0; i < li.length; i++) {
			li[i].classList.add('checked');
			Reload();
		}
	})
//Clear complete
document.getElementById('deleteall').addEventListener('click',function () {
	let li = document.getElementById('list').children;

	for (var i = 0; i < li.length; i++) {
		// console.log(li[i]);
		li[i].classList.contains('checked')?li[i].style.display = 'none':'';
	}

})






