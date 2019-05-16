---

courseType: code
published: false
public: false
categories: javascript, html, css, vue

---

# Course: Vue Fundamentals Workshop

Authors: Dan Wahlin, John Papa

In these workshop labs you'll learn about various Vue concepts that can be applied as you design and architect applications.

Topics covered include:

*   Tooling and setup

*   Getting Started with Vue and the CLI

*   Displaying Data and Responding to Events

*   Displaying Lists and Conditional Content

*   Interacting within a Component

*   Component Communication

*   Accessing Data

*   Routing

*   Managing State with Vuex




## Lab 1: Your First Vue App

This lab will walk you through creating your first Vue app.




### Exercise 1: Create Your First Vue App

In this exercise you'll create your first Vue app




#### Step 1

Run the following command to make sure the tools are working correctly. This will use the Vue CLI to create a new project which will verify everything is working correctly.


#### Step 2

Create a file named `index.html` and open it your editor (such as VS Code)


#### Step 3

Add the following HTML to your file

```html
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

#### Step 4

Add a script tag in the `<head>` pointing to Vue in [https://cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue)

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
```

#### Step 5

Create the following HTML to capture user input. Put it inside the `<body>`.

```html
<body>
    <div id="app">
      <input type="text" />
    </div>
</body>
```

<course-item
  type="Note"
  title="">
  Notice the div's "id" is set to "app". We'll use this to let Vue know where our Vue app should be placed in the HTML page.

</course-item>

#### Step 6

Create a new script tag below the div, and inside the body. Create an instance of Vue and point it to the div we just created, by it's id.

```javascript
new Vue({
    el: '#app'
});
```

<course-item
  type="Note"
  title="">
  The Vue instance is is now ready and knows where to put it's content on the page.

</course-item>

#### Step 7

Create a `data` property in the Vue instance. Set it equal to a function that returns an object. The object should have a `name` property set to your name.

```javascript
new Vue({
    el: '#app',
    data() {
      return { name: 'John' };
    }
});
```

<course-item
  type="Note"
  title="">
  The data property of the Vue instance exposes our data model.

</course-item>

#### Step 8

Add this code `v-model="name"` inside of your `<input>`. Your code should look like the following code example. This binds the `name` model from our Vue instance to the input control.

```html
<div id="app">
  <input type="text" v-model="name" />
</div>
```

#### Step 9

Add the following code below your `<input>` and inside of the `<div>`. This will display the `name` model.

```html
Hello {{ name }}
```

#### Step 10

Verify your code looks like the following example.

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  </head>
  <body>
    <div id="app">
      <input type="text" v-model="name" />
      Hello {{ name }}
    </div>
    <script>
      new Vue({
        el: '#app',
        data() {
          return { name: 'John' };
        }
      });
    </script>
  </body>
</html>
```

#### Step 11

Now let's open your html file. From explorer (on Windows) or finder (on macOS), drag your `index.html` file to your browser.

Your name should be displayed in your app. Type a new value and your should see the "hello" message change below it.



## Lab 2: Hello World! - The Vue CLI

This lab will walk you through getting the required tools and creating your first app with the Vue CLI




### Exercise 1: Installing the Tools

In this exercise you'll install the required tools and code to run the labs in the course.




#### Step 1

Install VS Code from [https://code.visualstudio.com](https://code.visualstudio.com/?wt.mc_id=vueworkshop-github-jopapa) if it's not already installed on your machine.


#### Step 2

Install the Vetur extension from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=octref.vetur&wt.mc_id=vueworkshop-github-jopapa).


<course-item
  type="Note"
  title="">
  This extension adds additional code help for using Vue in VS Code

</course-item>

#### Step 3

Install the [Vue Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets&wt.mc_id=vueworkshop-github-jopapa) VS Code extension. This isn't required, but makes it easy to create Vue syntax.


#### Step 4

Check that you have Node.js installed by running the following command. If you don't have it on your machine install it from [https://nodejs.org](https://nodejs.org).

```command line
node --version
```

<course-item
  type="Note"
  title="">
  We recommend installing the latest **LTS version** of Node.js for this workshop.

</course-item>

#### Step 5

Install the Vue CLI if you don't already have it by running the following command:

```command line
npm install -g @vue/cli
```

#### Step 6

Verify the **Vue CLI** installation by running the following command:

```command line
vue --version
```

#### Step 7

Install the Vue developer tools for Chrome from here [https://github.com/vuejs/vue-devtools#installation](https://github.com/vuejs/vue-devtools#installation)


#### Step 8

Clone the GitHub repository with the lab code [https://github.com/johnpapa/vue-workshop](https://github.com/johnpapa/vue-workshop)

```command-line
git clone git@github.com:johnpapa/vue-workshop.git
```


### Exercise 2: Create Your First Vue App with the Vue CLI

In this exercise you'll create and serve a Vue app with the Vue CLI




#### Step 1

Run the following command to use the Vue CLI to create a new project.

```command line
vue create hello-world -d
```

<course-item
  type="Note"
  title="">
  The "-d" indicates you want to use all of the defaults for creating the Vue app.

</course-item>

#### Step 2

Run the following command to serve your app

```command line
npm run serve
```

#### Step 3

Browse to [http://localhost:8080](http://localhost:8080) to see your app running in the browser



## Lab 3: Display Data and Handling Events

This lab will walk you through creating a Heroes component and display data, changing data, and handling user input events.




### Exercise 1: Display and change model values in a component

In this exercise you'll display and change model values in the component.




#### Step 1

Download the Vue Workshop code (download the .zip or do a git clone) from the following URL if you haven't already:

[https://github.com/johnpapa/vue-workshop](https://github.com/johnpapa/vue-workshop)

```command line
git clone git@github.com:johnpapa/vue-workshop.git
```

#### Step 2

Open to the `labs\data-binding\begin` folder and run `npm install`


#### Step 3

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)


#### Step 4

Open the _Heroes_ view in `src/components/heroes.vue`


#### Step 5

Create a hero model in the `data()` function in the component's code. Give the hero properties with values for id, name and description.

```javascript
data() {
  return {
    hero: {
      id: 101,
      name: "John",
      description: "Slayer of JavaScript"
    }
  };
},
```

#### Step 6

Create a `<p>` tag below the `<h2>`, and say hello to your hero. Then display the id and description of the hero as shown below.

```html
<p>Hello {{ hero.name }}.</p>
<p>Your id is {{ hero.id }} and your description is "{{ hero.description }}"</p>
```

#### Step 7

Create an `<input>` element of type "text" above the `<p>` tags you just created. Bind your hero's name to the input element using 2-way data-binding.

```html
<input v-model="hero.name" type="text">
```

#### Step 8

In the browser, enter a different name in the input element. Notice that when you type, the name of your hero changes in all places it is data-bound.



### Exercise 2: Handle events

In this exercise you'll handle events from user input




#### Step 1

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)


#### Step 2

Open the _Heroes_ view in `src/components/heroes.vue`


#### Step 3

Create a method in the component's code named `reverseName()`. Make the code reverse your hero's name.

```javascript
methods: {
  reverseName() {
    this.hero.name = [...this.hero.name].reverse().join("");
  }
}
```

#### Step 4

Create a button inside your template. When you click the button make it call the function you just created. This should reverse the name of your hero.

```html
<button @click="reverseName()">Reverse</button>
```


### Exercise 3: Key Modifiers

In this exercise you'll handle events from user input with key modifiers




#### Step 1

Run the app using the command `npm run serve`. Then browse to [http://localhost:8080](http://localhost:8080)


#### Step 2

Open the _Heroes_ view in `src/components/heroes.vue`


#### Step 3

Create a method in the component's code named `upperCaseTheName()`. Make the code change your hero's name to all uppercase letters.

```javascript
methods: {
  reverseName() {
    this.hero.name = [...this.hero.name].reverse().join("");
  },
  upperCaseTheName() {
    this.hero.name = this.hero.name.toUpperCase();
  }
}
```

#### Step 4

When the user presses the ENTER key inside of your input element, your hero's name should become all uppercase. Add the modifier to your input element and have it call your new function.

```html
<input v-model="hero.name" type="text" @keyup.enter="upperCaseTheName()">
```


## Lab 4: Loops and Conditionals

This lab will walk you through adding a list of heroes and showing/hiding content as appropriate.


## Lab: Routing

In this lab you'll learn how to create and use routes to display Vue components in an application.

### Exercise 1: Defining Routes

In this exercise you'll explore the lab application code and define routes to display Villains and Orders components.

#### Step 1

Open `labs/routing/begin` in your editor.

#### Step 2

Open `package.json` and note that `vue-router` is included in the list of dependencies.

#### Step 3

Open a terminal window in the root of the project and run `npm install`.

#### Step 4

Open `src/components` and take a quick look at the following components:

* VillainsList.vue
* OrdersList.vue

They'll be displayed in the application using routing.

#### Step 5

Open `main.js`. Notice that `vue-router` along with several components are imported at the top of the file.

#### Step 6

Locate the `Add VueRouter Here` comment in `main.js` and add the following code after it to create `villains` and `orders` routes, and register `VueRouter` with `Vue`.

```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/villains' },
    { path: '/villains', name: 'villains', component: VillainsList },
    { path: '/orders/:id', name: 'orders', component: OrdersList },
    { path: '*', component: NotFound }
  ]
});

Vue.use(VueRouter);
```

#### Step 7

Add the `router` object into the new `Vue` object as shown next:

```javascript
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
```
#### Step 8

Open `App.vue` and add the following component into it after the `h1` element to create a placeholder for routed components.

```html
<router-view />
```

### Exercise 2: Router Links and Parameters

In this exercise you'll use the `router-link` component to create a link to a route. You'll also create a computed property that will be used to access a route parameter value and display it.

#### Step 1

Open `VillainsList.vue`, locate the `Add router-link Here` comment, and add the following code after it.

```javascript
<router-link :to="{ name: 'orders', params: { id: v.id }}">
  View Orders
</router-link>
```

<course-item type="Note" title="Defining a Route Parameter">
Notice that you're using the `name` property to reference the name of the route created earlier and the `params` property to define the value of the `id` route parameter.
</course-item>

#### Step 2

Open `OrdersList.vue`. Notice that the top of the template writes out the value of a `villainId` property. 

#### Step 3

Locate the `Add router-link Here` comment in the `OrdersList.vue` template. Add the following code after the comment to link back to the `VillainsList` component.

```javascript
<router-link :to="{ name: 'villains' }">View Villains</router-link>
```

#### Step 4

Add a new computed property named `villainId` into the component's script section.

The computed property function should accept a single parameter named `vm` and return a value of `vm.$route.params.id`. Click on the `Hint` below if you need help.

<course-item type="Note" title="Using $route">
The $route object can be used to access route parameters (such as the `:id` parameter defined in the previous exercise) or even access querystring parameters.
</course-item>

<course-item type="Hint" title="Need Help?">
The computed property function should look like the following:

```javascript
villainId: (vm) => vm.$route.params.id
```
</course-item>

#### Step 5

Run `npm run serve` to build the project and start the local server. Visit `http://localhost:8080` in the browser.

#### Step 6

A list of villains should be displayed. Click on the `View Orders` link next to any villain to see their orders. Notice that the villain's `Id` is shown.

#### Step 7

Stop the server by pressing `ctrl+c`. This lab is complete.






