# MedMYnder

![Register](registerimage.png "Register")
This app is currently in development but you can clone it onto your machine and view it using the following steps. 

## Starting the app locally

Please note that the most complete branch to work with at the moment of writing is called
ravi. Please checkout this branch in order to proceed with these steps.

Start by installing front and backend dependencies in the client directory.
```
* cd client
* yarn install
``

Then go back to the root directory 

* cd ..

and run 

* yarn install

 
After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, our app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

