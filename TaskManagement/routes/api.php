<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/tasks', [TaskController::class, 'index']);
Route::post('/task/create', [TaskController::class, 'store']);
Route::get('/task/{id}', [TaskController::class, 'show']);
Route::put('/task/{id}', [TaskController::class, 'update']);
Route::delete('/task/{id}', [TaskController::class, 'destroy']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/category/create', [CategoryController::class, 'store']);
Route::get('/category/{name}', [CategoryController::class, 'show']);
Route::put('/category/{name}', [CategoryController::class, 'update']);
Route::delete('/category/name', [CategoryController::class, 'delete']);

Route::get('/category/{name}/tasks', [CategoryController::class, 'showTasks']);