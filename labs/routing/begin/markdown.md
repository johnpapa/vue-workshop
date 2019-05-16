## Lab: Routing

In this lab you'll learn how to create and use routes to display Vue components in an application.

### Exercise: Defining Routes

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

### Exercise: Router Links and Parameters

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

