<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::prefix('/projects')->name('projects.')->controller(ProjectController::class)->group(
    function () {
        Route::get('/', 'getAllProjects');
        Route::get('/{project}', 'getOneProject');
        Route::post('/create', 'createProject');
        Route::patch('/{project}/edit/', 'editProject');
        Route::delete('/{project}/delete/', 'deleteProject');
         }
);

Route::prefix('/tags')->name('tags.')->controller(TagController::class)->group(
    function () {
        Route::get('/', 'getAllTags');
        Route::get('/{tag}', 'getOneTag');
        Route::post('/create', 'createTag');
        Route::patch('/edit/{tag}', "editTag");
        Route::delete('/delete/{tag}', "deleteTag");
        }
);
