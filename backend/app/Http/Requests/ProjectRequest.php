<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        $project = $this->route('project');

        return [
            'name' => ['required', Rule::unique('projects', 'name')->ignore($project)],
            'content' => 'nullable',
            'image' => 'required',
            'url' => 'nullable',
            'tags' => 'sometimes|array', // Le champ tags est facultatif et doit être un tableau
            'tags.*' => 'exists:tags,id', // Chaque élément du tableau doit exister dans la table tags
        ];

    }

    protected function prepareForValidation()
    {
        $project = $this->route('project');

        if ($project) { // seulement si $project existe
            $this->merge([
                'name' => $this->input('name', $project->name),
                'content' => $this->input('content', $project->content),
                'image' => $this->input('image', $project->image),
                'url' => $this->input('url', $project->url),
                'tags' => $this->input('tags', $project->tags->pluck('id')->toArray())
        ]);

        // On ajoute cette ligne pour récupérer les tags seulement si le projet existe
        if ($project->tags) {
            $this->merge(['tags' => $this->input('tags', $project->tags->pluck('id')->toArray())]);
        }
        }
    }
}
