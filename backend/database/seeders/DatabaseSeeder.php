<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Tag;
use App\Models\Project;
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
            Tag::truncate();

        Project::truncate();
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
    ['name' => 'TypeScript', 'icon' => 'http://localhost:8000/img/icons/typescript.svg'],
];

foreach ($tags as $tag) {
    Tag::create($tag);
}

$projects = [
            [
                'name' => 'Portfolio',
                'content' => "Mon petit portfolio, créé en Laravel pour le backend, Angular 19 & SCSS pour le frontend, et SQLite3 pour la base de données et le tout Dockeriser. Lors de ma formation, j'ai utilisé React et Node, mais j'ai voulu changer un peu pour le plaisir, avec un thème un peu SF des années 2000, nourri à coups de Mass Effect, DOOM 3 et autres...",
                'image' => 'http://localhost:8000/img/screenshots/portfolio.png',
                'url' => '#',
                'tags' => ['Laravel', 'Angular', 'Sass', 'Docker', 'HTML5'],
            ],
                        [
                'name' => 'Challenge conception',

                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge d\'entrainement a la conception en total autonomie.
                ',
                'image' => 'http://localhost:8000/img/screenshots/training-conception.png',
                'url' => 'https://github.com/Ragum02/training-conception',
                'tags' => ['NestJS', 'Docker', 'TypeScript'],
            ],
            [
                'name' => 'Ranvex (Wix)',
                'content' => 'Un petit projet fait sous Wix ancienne version, en guise de MVP.',
                'image' => 'http://localhost:8000/img/screenshots/ranvexwix.png',
                'url' => 'https://www.ranvex.com/',
                'tags' => [],
            ],
                        [
                'name' => 'Okanban',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Challenge bonus donné par un formateur pour me permettre de faire mes premiers pas sur Nest.JS, TypeScript et TypeORM , pour la réalisation d\une simple API
                ',
                'image' => 'http://localhost:8000/img/screenshots/okanban-nest.png',
                'url' => 'https://github.com/Ragum02/okanban-nest/tree/nest-typeorm',
                'tags' => ['NestJS', 'TypeScript'],
            ],
            [
                'name' => 'Pokedex',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge de formation, pour la création d\'une API, cela ma aussi permis de m\'initier a swagger et aux observers en total autonomie.',
                'image' => 'http://localhost:8000/img/screenshots/pokedexjs.png',
                'url' => 'https://github.com/Ragum02/pokedexJS',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Social Network Challenge',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge de formation, pour permettre de m\'entrainer aux micro services, a docker et a l\'auth.',
                'image' => 'http://localhost:8000/img/screenshots/challenge-social-network.png',
                'url' => 'https://github.com/Ragum02/challenge-social-network',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Auth/React Challenge',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge de formation, pour permettre de m\'entrainer avec React, a la gestion de l\'auth.',
                'image' => 'http://localhost:8000/img/screenshots/challenge-auth-react.png',
                'url' => 'https://github.com/Ragum02/challenge-auth-react',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Triple Triad Deck Builder',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge de formation, dans lequel j\'ai crée un deck builder pour le Triple Triad de Final Fantasy 8.',
                'image' => 'http://localhost:8000/img/screenshots/challenge-auth-react.png',
                'url' => 'https://github.com/Ragum02/challenge-auth-react',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Coffee Challenge',
                'content' => '<! - Les challenges ont été nettoyés pour enlever les enoncer - !>
                Un challenge de formation, pour apprendre les fondamentaux de l\'architecture MVC.',
                'image' => 'http://localhost:8000/img/screenshots/coffee.png',
                'url' => 'https://github.com/Ragum02/ocoffee',
                'tags' => ['JavaScript', 'HTML5', 'Css3', 'PostgreSQL'],
            ],
            [
                'name' => 'To-Do',
                'content' => 'Premier essai debut 2024 en total autonomie avec Odin Project en paralèle, c\'est toujours marrant de voir d\'ou l\'on vien :D ',
                'image' => 'http://localhost:8000/img/screenshots/todo.png',
                'url' => 'https://to-do-day.vercel.app/',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
        ];

        foreach ($projects as $projectData) {
            // Créer le projet
            $project = Project::create([
                'name' => $projectData['name'],
                'content' => $projectData['content'],
                'image' => $projectData['image'],
                'url' => $projectData['url'],
            ]);

            // Récupérer les tags et associer au projet
            $tags = Tag::whereIn('name', $projectData['tags'])->get();
            $project->tags()->attach($tags);
        }


    }
}
