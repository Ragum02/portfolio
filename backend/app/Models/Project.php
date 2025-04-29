<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'content',
        'image',
        'url'
    ];

    protected $hidden = [
        'pivot'
    ];

    public function tags(){
        return $this->belongsToMany(\App\Models\Tag::class);
    }
}
