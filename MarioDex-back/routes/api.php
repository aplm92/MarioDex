<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonajeController;

Route::get('/personajes', [PersonajeController::class, 'index']);
Route::post('/personajes', [PersonajeController::class, 'store']);
Route::delete('/personajes/{id}', [PersonajeController::class, 'destroy']);
