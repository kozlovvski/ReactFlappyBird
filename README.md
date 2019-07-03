This project aims to recreate a popular Flappy Bird game in React & Redux.
## How will I do that

### 1. Describe the project

- This will be a React & Redux app. 
- It should work both on desktop and mobile devices
- It should be fully responsive (up to Full HD resolution)
- (optional) It should work as a PWA

### 2. Get needed resources

The only external resource I will use is the Flappy Bird spritesheet which I found somewhere in Google Images

![Flappy Bird Spritesheet](https://www.spriters-resource.com/download/59894/)

I aim to cut that into separate files because I will use some of these graphics as a `background-image` with `background-repeat` property. 

### 3. Describe the basic logic behind the app

The end product preview:
![Flappy Bird GIF](https://cdn-images-1.medium.com/max/1200/1*G-uGz8s2ti5rgVTz7AHU1w.gif)

Inside `App` component there will be two main components: one `Bird` and some number of `Pipe` components. There should also be a `gameLoop` function which should run in loop. On every frame `gameLoop` should check if `Bird` collided with any of the `Pipe` components. If a collision occurs, `gameLoop` should be stopped and the app should render a `Summary` component with achieved score and a button to play game once more. Should this button be clicked, the `gameLoop` will start again.

`Pipe` components and background elements will be animated using CSS animations. `Bird` component will be interactive, so it will store variables needed to determine its position and movement and it will be rendered on every frame using CSS transform property.