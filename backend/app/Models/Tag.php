<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'icon',
    ];

    protected $hidden = [
        'pivot'
    ];
    public function projects(){
        return $this->belongsToMany(\App\Models\Project::class);
    }
}
