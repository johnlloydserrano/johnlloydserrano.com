<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("home");

Route::get('/projects/{slug}', function () {
    return Inertia::render('Project/Detail');
})->name("project.detail");

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/{any}', function () {
    return Inertia::render('Errors/NotFound');
})->where('any', '.*');


require __DIR__.'/auth.php';
