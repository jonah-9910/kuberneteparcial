var express = require('express');
var router = express.Router();
let listjs = [4, 9, 12, 15, 16, 21, 23, 25, 31, 45, 58, 64, 75, 76, 87, 99, 105, 124, 215, 332];

const listls = [];
const cantdata = 100;
const numbusqueda = Math.floor(cantdata * Math.random()) + 1;

let _valuesToAdd = cantdata;
while (_valuesToAdd) {
    listls.push(_valuesToAdd);
    _valuesToAdd--;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'POD-1 = Algoritmo de Busqueda Secuencial y Algoritmo de Busqueda por Saltos' });
});

router.get('/linealSearch', function(req, res, next) {
  const resp = linearSearch(listls, numbusqueda);

  if (resp === -1) {
    res.render('result', { title: 'Busqueda Lineal', Resultado: resp, Num: numbusqueda, Arr:  listls.toString()});
  } else {
    res.render('result', { title: 'Busqueda Lineal', Resultado: resp, Num: numbusqueda, Arr:  listls.toString()});
  }
});

router.get('/jumpSearch', function(req, res, next) {
  const resp = jumpSearch(listjs, 76);

  if (resp === -1) {
    res.render('result', { title: 'Busqueda por Saltos', Resultado: 'No encontrado', Num: '76', Arr:  listjs.toString()});
  } else {
    res.render('result', { title: 'Busqueda por Saltos', Resultado: resp, Num: '76', Arr:  listjs.toString()});
  }
});

module.exports = router;

function jumpSearch(array, seekElement) {
    const arraySize = array.length;

    let step = Math.sqrt(arraySize);
    
    let prev = 0;
    while (array[Math.min(step, arraySize)-1] < seekElement) {
        prev = step;
        step += Math.sqrt(arraySize);
        if (prev >= arraySize) {
            return -1;
        }
    }

    while (array[prev] < seekElement) {
        prev++;

        if (prev == Math.min(step, arraySize)) {
            return -1;
        }
    }

    if (array[prev] == seekElement) {
        return prev;
    }

    return -1;
}

function linearSearch(array, seekElement) {
    const foundIndices = [];

    array.forEach((element, index) => {
        if (element === seekElement) {
            foundIndices.push(index);
        }
    });

    return foundIndices;
}
