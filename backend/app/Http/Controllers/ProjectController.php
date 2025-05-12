<?php

namespace App\Http\Controllers;


use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProjectController extends Controller
{
    public function getAllProjects(){
        $projects = Project::with(['tags' => function ($query) {
            $query->select('tags.id', 'tags.name', 'tags.icon');
        }])->get();
    return response()->json($projects);       // Renvoi en JSON
    }
    public function getOneProject(Project $project){
        $project->load(['tags:id,name']);
        return response()->json($project, 200);
    }
    public function createProject(ProjectRequest $request)
    {
        $validated = $request->validated();

        $project = Project::create([
            'name' => $validated['name'],
            'content' => $validated['content'] ?? null,
            'image' => $validated['image'],
            'url' => $validated['url'] ?? null,
        ]);

        if ($request->has('tags')) {
            $project->tags()->attach($validated['tags']);
        }

        return response()->json($project, 201);
    }

    public function editProject(ProjectRequest $request, Project $project)
    {

        $validated = $request->validated();

        // Extraire les tags avant la mise à jour
        $tags = $validated['tags'] ?? null;

        unset($validated['tags']);

        // Mettre à jour le projet sans les tags
        $project->update($validated);

        // Gérer les tags séparément
        if ($tags !== null) {
            $project->tags()->sync($tags);
        }

        // Charger la relation tags pour le retour json
        $project->load('tags');

        return response()->json([
            'message' => 'Projet mis à jour',
            'project' => $project
        ]);
    }

    public function deleteProject(Project $project){
    $project->delete();

    return response()->json([
        'message' => 'Projet supprimer !',
    ]);
    }
}
