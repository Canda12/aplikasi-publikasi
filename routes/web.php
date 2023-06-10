<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicationController; 
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/publication', [PublicationController::class, 'index'])->name('publication.index');
    Route::get('/publication/create', [PublicationController::class, 'create'])->name('publication.create');
    Route::get('/publication/{publication}/edit', [PublicationController::class, 'edit'])->name('publication.edit');
    Route::get('/publication/export', [PublicationController::class, 'export'])->name('publication.export');  
    Route::get('/publication/pdf', [PublicationController::class, 'pdf'])->name('publication.pdf');  
    Route::post('/publication', [PublicationController::class, 'store'])->name('publication.store'); 
    Route::put('/publication/{publication}', [PublicationController::class, 'update'])->name('publication.update'); 
    Route::delete('/publication/{publication}', [PublicationController::class, 'delete'])->name('publication.delete'); 
}); 

require __DIR__.'/auth.php';
