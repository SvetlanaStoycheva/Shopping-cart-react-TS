#### Shopping cart with React/TypeScript

##### (tutorial)[https://www.youtube.com/watch?v=7NqeSf1c-bw]

- Libraries
  - material-ui
  - styled-components
  - react-query
  - Fake store API: https://fakestoreapi.com

#### Challenges

- To add TypeScript to an existing Create React App project
  - first install it: npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  - Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!
- Error "Cannot use JSX unless the '--jsx' flag is provided"
  - Adding "jsx": "preserve" to tsconfig.json will bypass the warning
