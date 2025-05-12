<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Tag;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

$tags = [
    ['name' => 'Laravel', 'icon' => 'http://localhost:8000/img/icons/laravel.svg'],
    ['name' => 'Css3', 'icon' => 'http://localhost:8000/img/icons/css3.svg'],
    ['name' => 'React', 'icon' => 'http://localhost:8000/img/icons/react.svg'],
    ['name' => 'Angular', 'icon' => 'http://localhost:8000/img/icons/angular.png'],
    ['name' => 'Docker', 'icon' => 'http://localhost:8000/img/icons/docker.svg'],
    ['name' => 'JavaScript', 'icon' => 'http://localhost:8000/img/icons/javascript.svg'],
    ['name' => 'NodeJS', 'icon' => 'http://localhost:8000/img/icons/nodejs.svg'],
    ['name' => 'HTML5', 'icon' => 'http://localhost:8000/img/icons/html5.svg'],
    ['name' => 'Sass', 'icon' => 'http://localhost:8000/img/icons/sass.svg'],
    ['name' => 'Tailwind', 'icon' => 'http://localhost:8000/img/icons/tailwindcss.svg'],
    ['name' => 'PostgreSQL', 'icon' => 'http://localhost:8000/img/icons/postgresql.svg'],
    ['name' => 'MongoDB', 'icon' => 'http://localhost:8000/img/icons/mongodb.svg'],
    ['name' => 'Git', 'icon' => 'http://localhost:8000/img/icons/git.svg'],
    ['name' => 'GitHub', 'icon' => 'http://localhost:8000/img/icons/github.svg'],
    ['name' => 'GraphQL', 'icon' => 'http://localhost:8000/img/icons/graphql.svg'],
    ['name' => 'Figma', 'icon' => 'http://localhost:8000/img/icons/figma.svg'],
    ['name' => 'NestJS', 'icon' => 'http://localhost:8000/img/icons/nestjs.svg'],
    ['name' => 'NextJS', 'icon' => 'http://localhost:8000/img/icons/nextjs.svg'],
    ['name' => 'ViteJS', 'icon' => 'http://localhost:8000/img/icons/vitejs.svg'],
];

foreach ($tags as $tag) {
    Tag::create($tag);
}
    }
}
