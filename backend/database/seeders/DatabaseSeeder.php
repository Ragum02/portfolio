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

        User::create([
            'name' => env('ADMIN_NAME'),
            'password' => bcrypt(env('ADMIN_PASSWORD')),
        ]);


        Tag::truncate();

        Project::truncate();
        $tags = [
            ['name' => 'Laravel', 'icon' => '/icons/laravel.svg'],
            ['name' => 'Css3', 'icon' => '/icons/css3.svg'],
            ['name' => 'React', 'icon' => '/icons/react.svg'],
            ['name' => 'Angular', 'icon' => '/icons/angular.png'],
            ['name' => 'Docker', 'icon' => '/icons/docker.svg'],
            ['name' => 'JavaScript', 'icon' => '/icons/javascript.svg'],
            ['name' => 'NodeJS', 'icon' => '/icons/nodejs.svg'],
            ['name' => 'HTML5', 'icon' => '/icons/html5.svg'],
            ['name' => 'Sass', 'icon' => '/icons/sass.svg'],
            ['name' => 'Tailwind', 'icon' => '/icons/tailwindcss.svg'],
            ['name' => 'PostgreSQL', 'icon' => '/icons/postgresql.svg'],
            ['name' => 'MongoDB', 'icon' => '/icons/mongodb.svg'],
            ['name' => 'Git', 'icon' => '/icons/git.svg'],
            ['name' => 'GitHub', 'icon' => '/icons/github.svg'],
            ['name' => 'Expo', 'icon' => '/icons/expo.svg'],
            ['name' => 'Firebase', 'icon' => '/icons/firebase.svg'],
            //['name' => 'GraphQL', 'icon' => '/icons/graphql.svg'],
            //['name' => 'Figma', 'icon' => '/icons/figma.svg'],
            ['name' => 'NestJS', 'icon' => '/icons/nestjs.svg'],
            ['name' => 'NextJS', 'icon' => '/icons/nextjs.svg'],
            ['name' => 'ViteJS', 'icon' => '/icons/vitejs.svg'],
            ['name' => 'TypeScript', 'icon' => '/icons/typescript.svg'],
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }

        $projects = [
            [
                'name' => 'Cyclobuddy (WIP)',
                'content' => "Cyclobuddy est une application mobile en cours de développement, développée avec React Native et Expo, utilisant Tailwind via NativeWind pour le design et Firebase pour l'authentification, la base de données et le stockage.
                              Elle permet aux cyclistes de publier et découvrir des sorties à proximité, filtrer par type de parcours et niveau, et rejoindre des discussions de groupe en temps réel, avec un focus sur la simplicité, la performance et l'expérience utilisateur.",
                'image' => '/screenshots/cyclobuddy.png',
                'url' => 'https://github.com/Ragum02/cyclobuddy',
                'tags' => ['React', 'Expo', 'Firebase', 'Tailwind'],
            ],
            [
                'name' => 'Portfolio',
                'content' => "Mon portfolio a été développé avec Laravel pour le backend, Angular 19 et SCSS pour le frontend, et SQLite3 pour la base de données, le tout dockerisé.
                              Lors de ma formation, j’ai principalement travaillé avec React et Node.js, mais j’ai choisi ici d’explorer de nouvelles technologies pour le plaisir, en créant un thème inspiré de l’univers SF des années 2000, influencé par des titres comme Mass Effect ou DOOM 3.",
                'image' => '/screenshots/portfolio.png',
                'url' => '#',
                'tags' => ['Laravel', 'Angular', 'Sass', 'Docker', 'HTML5'],
            ],
            [
                'name' => 'Challenge conception',

                'content' => 'Un challenge d\'entrainement a la conception en total autonomie.
                ',
                'image' => '/screenshots/training-conception.png',
                'url' => 'https://github.com/Ragum02/training-conception',
                'tags' => ['NestJS', 'Docker', 'TypeScript'],
            ],
            [
                'name' => 'Ranvex (Wix)',
                'content' => 'Un petit projet fait sous Wix ancienne version, en guise de MVP.',
                'image' => '/screenshots/ranvexwix.png',
                'url' => 'https://www.ranvex.com/',
                'tags' => [],
            ],
            [
                'name' => 'Okanban',
                'content' => 'Challenge bonus donné par un formateur pour me permettre de faire mes premiers pas sur Nest.JS, TypeScript et TypeORM , pour la réalisation d\une simple API
                ',
                'image' => '/screenshots/okanban-nest.png',
                'url' => 'https://github.com/Ragum02/okanban-nest/tree/nest-typeorm',
                'tags' => ['NestJS', 'TypeScript'],
            ],
            [
                'name' => 'Pokedex',
                'content' => 'Un challenge de formation, pour la création d\'une API, cela ma aussi permis de m\'initier a swagger et aux observers en total autonomie.',
                'image' => '/screenshots/pokedexjs.png',
                'url' => 'https://github.com/Ragum02/pokedexJS',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Social Network Challenge',
                'content' => 'Un challenge de formation, pour permettre de m\'entrainer aux micro services, a docker et a l\'auth.',
                'image' => '/screenshots/challenge-social-network.png',
                'url' => 'https://github.com/Ragum02/challenge-social-network',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Auth/React Challenge',
                'content' => 'Un challenge de formation, pour permettre de m\'entrainer avec React, a la gestion de l\'auth.',
                'image' => '/screenshots/challenge-auth-react.png',
                'url' => 'https://github.com/Ragum02/challenge-auth-react',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Triple Triad Deck Builder',
                'content' => 'Un challenge de formation, dans lequel j\'ai crée un deck builder pour le Triple Triad de Final Fantasy 8.',
                'image' => '/screenshots/challenge-auth-react.png',
                'url' => 'https://github.com/Ragum02/challenge-auth-react',
                'tags' => ['JavaScript', 'HTML5', 'Css3'],
            ],
            [
                'name' => 'Coffee Challenge',
                'content' => 'Un challenge de formation, pour apprendre les fondamentaux de l\'architecture MVC.',
                'image' => '/screenshots/coffee.png',
                'url' => 'https://github.com/Ragum02/ocoffee',
                'tags' => ['JavaScript', 'HTML5', 'Css3', 'PostgreSQL'],
            ],
            [
                'name' => 'To-Do',
                'content' => 'Premier prototype développé en autonomie début 2024, parallèlement à ma formation sur Odin Project. C\'est intéressant de constater le chemin parcouru depuis ce premier essai.',
                'image' => '/screenshots/todo.png',
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
