<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Route::get('/', function () {
//     return view('default');
// });


Route::get('/{param}', function () {
    return view('default');
})->where('param', '.+');
