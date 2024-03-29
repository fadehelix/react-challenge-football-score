# Architecture Decision Log
The purpose of this document is to give developers a context for the decisions that have been made in the development of this project. It is intended to be a living document that is updated as new decisions are made.

## Records
### 2024-01-22 - Use Typescript
- Helps to catch errors at compile time. 
- It also helps to understand the code by providing type information.
### 2024-01-22 - Use React
I chose react because I am most familiar with it. It is also the most popular framework and has a large community, so it is easy to find another developer to work on the project.
### 2024-01-22 - Use Vite
[Vite](https://vitejs.dev/) 
- Much faster than more popular Create React App. 
- Easy to use and has a large community. 
- Supports Typescript out of the box.
- Easy to integrate PostCSS (so we can use TailwindCSS).
### 2024-01-22 - Use TailwindCSS
[TailwindCSS](https://tailwindcss.com/) is an efficient library to build UI prototypes and MVPs.
Thanks to its utility-first approach, it is easy to build a UI without writing any CSS.
### 2024-01-22 - Use tailwind-merge utility
[tailwind-merge](https://www.npmjs.com/package/tailwind-merge) is a utility that allows us to merge TailwindCSS classes. 
#### Use case: 
Pass custom CSS class `p-8` down to the Tile component which already has `p-4` defined. Without `tailwind-merge` we would end up with both `p-4 p-8` in the final HTML. With `tailwind-merge` we get `p-8` only.