# potion-class

## Run

copy envexample to .env.local

```
  pnpm i
  pnpm dev
```

## TODO: MVP

- Improve UX of picking ingredients. Allow user to toggle selected ingredient, don't let user select more/less than the required amount before submitting his answer
- Perform ingredient checking on backend and hide potion ingredients from the user to avoid cheating
- Introduce potion difficulty so that the user can choose the difficulty of the potion they want to make
- remove tailwind
- remove typescript, use JSDoc

## V1

- Add auth layer so players can have profile displaying their play history
- Create leaderboards
- Improve UI to match the Harry Potter vibes
- Motion and animation. Have a 3D model of a student spinning the potion in the goblet with both success and failure animations.

## V2

- introduce history / wizard lore class
- introduce Duelling using the spells endpoint. Allow users to battle each other
