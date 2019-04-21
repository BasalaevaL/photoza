function openBlock(el) {
	// el.parentNode - взять родительский элемент
	// el.parentNode.childNodes - взять все дочерние элементы родителя
	// и положить их в массив kids
	var kids = el.parentNode.childNodes; 

	// прокрутить в цикле все элементы массива kids
	for (var k = 0; k < kids.length; k++) {
		var child = kids[k];

		// если имя класса текущего элемента равно this_block_is_hidden,
		// то выполнить ниже следующие инструкции
		if (child && child.className == "content-top__imgg") {

			// если блок не виден, то показать его
			if (child.style.display != 'block') {
				child.style.display = 'block';
			} 

			// иначе скрыть его
			else {
				child.style.display = 'none';
			}
		}
	}
}


