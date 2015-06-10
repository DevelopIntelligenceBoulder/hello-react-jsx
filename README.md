# hello-react-jsx
A simple example of Hello World in (React)[https://facebook.github.io/react/] utilizing (JSX)[https://jsx.github.io/].

What is JSX? JSX is a language that brings XML syntax into JavaScript, think of it as a JavaScript extension. It allows developers to write XML directly within their JavaScript. JSX makes it easy to define HTML templates and their corresponding model properties directly within a React Components JavaScript definition.

##What is this?
This example shows how to take a component state and populate it within a React component. 

### Within the js/main.js
The application namespace is created. It is a simple JavaScript namespace that the React component will be attached too.

### Within the jsx & component folders
The expectation is the JavaScript files, all containing JSX, located in the "jsx" folder will be compiled into plain old JavaScript and placed into the "component" folder. These compiled JavaScript files will be consumed by React to create React components for the application. 

The compilation can be done via the JSX compiler:
1. Download and install the JSX compiler via the `react-tools`
    * npm install -g react-tools
    * Allows the compiler to be used via `jsx` within a command-line
2. Utilize the JSX watch utility from a command-line
    * jsx --watch jsx/ component/
    * The JSX compiler will compile the JSX code into JavaScript the React will consume
    * The first parameter `jsx/` is where the JavaScript utilizing JSX is written
    * The second parameter `component/` is where the compiled JavaScript will be placed

### Within the jsx/hello.js
The Hello Component is defined. The component state is initialized and utilized within the render method, which will be invoked when this component is created/updated by React.

### Within the jsx/bootstrap.js
Bootstrapping/Rendering the top-level React component into the DOM. Contains JSX for simplification.