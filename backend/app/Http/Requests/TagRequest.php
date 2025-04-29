<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TagRequest extends FormRequest
    {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
        {
        return true; // ! A changer en false quand j'aurai mis L'auth en place
        }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
        {
        $tagId = $this->route('tag');

        return [
            'name' => ['required', Rule::unique('tags', 'name')->ignore($tagId)],
            'icon' => ['required', Rule::unique('tags', 'icon')->ignore($tagId)],
        ];
        }

        protected function prepareForValidation()
        {
            $tag = $this->route('tag');

            if ($tag) { // seulement si $tag existe
                $this->merge([
                    'icon' => $this->input('icon', $tag->icon),
                    'name' => $this->input('name', $tag->name),
                ]);
            }
        }
    }
