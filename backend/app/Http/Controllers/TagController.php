<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TagController extends Controller
{
    public function createTag(TagRequest $request){
        $validated = $request->validated();      //On valide les données grace au TagRequest

        $tag = Tag::create([
            'name' => $validated['name'],
            'icon' => $validated['icon']
        ]);

        return response()->json($tag, 201); //Renvoi la réponse 201 et le tag nouvellement crée
    }

    public function getAllTags(){
        $tags = Tag::with('projects')->get(); // Recupere les tags avec leurs projet(s) associés
        return response()->json($tags);       // Renvoi en JSON
        }
        public function getOneTag(Tag $tag){
            return response()->json($tag, 200);
        }
    public function editTag(TagRequest $request, Tag $tag){
        //On valide les données :
        $validated = $request->validated();

        //on lance l'update avec les données validé
        $tag->update($validated);


        return response()->json([
            'message' => 'Tag mis a jour',
            'tag' => $tag
        ]);
        }

    public function deleteTag(Tag $tag){
        $tag->delete();

        return response()->json([
            'message' => 'Tag supprimer !',
        ]);
        }
    }

