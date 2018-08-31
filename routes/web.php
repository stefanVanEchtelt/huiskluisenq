<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/questions', function () {
    return view('questions.index');
});
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');




//Route::post('/api/house', 'HouseController@store');
Route::resource('/api/house', 'HouseController');

Route::resource('/api/floor', 'FloorController');
Route::get('/api/house/{id}/floors', 'FloorController@getFloorsByHouse');

Route::resource('/api/room', 'RoomController');
Route::get('/api/floor/{id}/rooms', 'RoomController@getByFloor');
Route::get('/api/house/{id}/rooms', 'RoomController@getAllByHouse');

Route::resource('/api/device', 'DeviceController');
Route::get('/api/device/{roomId}/room', 'DeviceController@getByRoom');

Route::resource('/api/light', 'LightController');
Route::get('/api/light/{roomId}/room', 'LightController@getByRoom');

Route::resource('/api/radiator', 'RadiatorController');
Route::get('/api/radiator/{roomId}/room', 'RadiatorController@getByRoom');

Route::get('/api/outside/device', 'OutsideDeviceController@index');
Route::get('/api/outside/device', 'OutsideDeviceController@create');
Route::post('/api/outside/device', 'OutsideDeviceController@store');
Route::get('/api/outside/device/{outsideDevice}', 'OutsideDeviceController@show');
Route::get('/api/outside/device/{outsideDevice}', 'OutsideDeviceController@edit');
Route::put('/api/outside/device/{outsideDevice}', 'OutsideDeviceController@update');
Route::delete('/api/outside/device/{outsideDevice}', 'OutsideDeviceController@destroy');
Route::get('/api/outside/device/{houseId}/house', 'OutsideDeviceController@getByHouse');

Route::get('/api/outside/light', 'OutsideLightController@index');
Route::get('/api/outside/light', 'OutsideLightController@create');
Route::post('/api/outside/light', 'OutsideLightController@store');
Route::get('/api/outside/light/{outsideLight}', 'OutsideLightController@show');
Route::get('/api/outside/light/{outsideLight}', 'OutsideLightController@edit');
Route::put('/api/outside/light/{outsideLight}', 'OutsideLightController@update');
Route::delete('/api/outside/light/{outsideLight}', 'OutsideLightController@destroy');
Route::get('/api/outside/light/{houseId}/house', 'OutsideLightController@getByHouse');

Route::any('/house/{all}', function () {
    return view('home');
})->where(['all' => '.*']);