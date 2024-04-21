## Build a simple task manager application

To start the projet locally: npm install, npm start.

## Requirements

Le projet est en typescript, les interfaces sont dans le dossier interface.tsx

### `Task List`

Le state de la liste des tasks est dans le component App.tsx. Le state est une liste de tasks. Les tasks sont des objets de name:string et completed:boolean.

### `Task Creation`

Dans le component TaskForm.tsx, on peut créer une nouvelle task avec le input et le bouton de création.

### `Task Deletion`

Chaque task a un bouton pour sa destruction. L'image du logo est un svg

### `Task Completion`

Chaque task a un bouton pour sa completion. L'image du logo est un svg

### `Styling`

J'ai utilisé les styled component pour faire mon style. A noter: J'ai passé un prop dans mon styled component de taskItem Container pour changer sa couleur de rouge (Not Completed) à vert (Completed).

### `State management`

Le state management est fait dans le component App.tsx. Les components TaskForm.tsx et TaskItem.tsx ont des fonctions qui remontent pour changer le state du parent App.tsx

### `Component structure`

App.tsx est le parent des components. Il possede 2 enfants: taskForm et TaskList. TaskForm contient le form qui fait la création des nouvelles taches. TaskList est la liste avec les taches. Tasklist fait un map sur tasks, et créer le component taskItem qui est l'item pour une task.

### `Data persistence`

J'ai utilisé le local storage pour storer mes datas. Ma logique ce fait dans le component App.tsx avec un useEffect. J'ai mis un message de loading... quand on a pas encore fini de fetch les datas.

### `Error Handling`

Je n'appelle pas d'api

### `Responsive design`

Ma logique de design responsive ce fait dans mes styled components. J'ai mis les breakpoints à 992px et 676px.
