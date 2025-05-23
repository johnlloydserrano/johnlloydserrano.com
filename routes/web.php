<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'repositoryVersion' => Http::get('https://api.github.com/repos/johnlloydserrano/johnlloydserrano.com/releases/latest')->json()['tag_name'] ?? 'v1.0.0',
    ]);
})->name("home");

Route::get('/projects/{slug}', function () {
    return Inertia::render('Project/Detail');
})->name("project.detail");

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::prefix('download')->name('download.')->group(function () {
    Route::middleware('throttle:5,1')->get('/resume', function () {
        return response()->download(public_path('downloads/SERRANO-RESUME.pdf'), 'SERRANO-RESUME.pdf');
    })->name('resume');

    Route::middleware('throttle:5,1')->get('/skillsheet', function () {
        return response()->download(public_path('downloads/SERRANO-SKILLSHEET.xlsx'), 'SERRANO-SKILLSHEET.xlsx');
    })->name('skillsheet');
});

Route::get('/sitemap.xml', function () {
    $sitemap = Sitemap::create();

    $sitemap->add(Url::create('/')
        ->setLastModificationDate(now())
        ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
        ->setPriority(1.0));

    #make this dynamic in future
    $sitemap->add(Url::create('/projects/portfolio-website')
        ->setLastModificationDate(now())
        ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
        ->setPriority(0.8));

    $sitemap->add(Url::create('/privacy-policy')
        ->setLastModificationDate(now())
        ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
        ->setPriority(0.6));


    return response($sitemap->render())
        ->header('Content-Type', 'application/xml');
});

Route::get('/{any}', function () {
    return Inertia::render('Errors/NotFound');
})->where('any', '.*');


require __DIR__ . '/auth.php';
