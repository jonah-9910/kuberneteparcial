var express = require('express');
var router = express.Router();
let listjs = [4, 9, 12, 15, 16, 21, 23, 25, 31, 45, 58, 64, 75, 76, 87, 99, 105, 124, 215, 332];

const listls = [];
const cantdata = 30;
const numbusqueda = Math.floor(cantdata * Math.random()) + 1;

let _valuesToAdd = cantdata;
while (_valuesToAdd) {
    listls.push(_valuesToAdd);
    _valuesToAdd--;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'POD-2 = Algoritmo de Busqueda Binaria y Algoritmo de Busqueda por Metodo de Burbuja' });
});

router.get('/bubbleSort', function(req, res, next) {
  const resp = bubbleSort(listls);
  
 res.render('result2', { title: 'Busqueda por Metodo de Burbuja', Arr1: listls.toString(), Arr:  resp.toString()});
});

router.get('/binarySearch', function(req, res, next) {
  const resp = binarySearch(listjs, 76, 4, 332);

  if (resp === -1) {
    res.render('result', { title: 'Busqueda Binaria', Resultado: 'No encontrado', Num: '76', Arr:  listjs.toString()});
  } else {
    res.render('result', { title: 'Busqueda Binaria', Resultado: resp, Num: '76', Arr:  listjs.toString()});
  }
});

module.exports = router;

function binarySearch(array, x, start, end) {

	if (start > end)
		return -1;

	let mid = Math.floor((start + end) / 2);

	if (array[mid] === x)
		return mid;

	if (arr[mid] < x)
		return binarySearch(array, x, mid + 1, end)
	else
		return binarySearch(array, x, start, mid - 1)
}

function swap(array, xp, yp)
{
    var temp = array[xp];
    array[xp] = array[yp];
    array[yp] = temp;
}
  
function bubbleSort(array)
{
    let n = array.length;
    var i, j;
    for (i = 0; i < n-1; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {
            if (array[j] > array[j+1])
            {
            swap(arr,j,j+1);
              
            }
        }
      
    }

    return array;
}
