# Drink Up! ~ *Be the New Cocktail star*


![Drink_Uplogo](https://user-images.githubusercontent.com/105127608/217568794-dad07776-650f-4b8d-a1d2-238097ceedc0.png)

# Introduction

## The Project
 **DrinkUp!**.

[**DrinKUp!**]() is

Other features include: 

## The Context
This project is our Portfolio Project, concluding our Foundations Year at Holberton School. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the three weeks of development.

## The Team
We are three dog enthusiasts who are passionate about coding but also like to keep it fun!

* **Sara Cruz** [@spcruz]() - 
* **Angeira Quiles** [@AngeiraT]() - 
* **Ivanzka Rodriguez** [@Ivanzka]() - 

Follow us on Twitter for more drink and tech related awesomeness!

## Blog posts
After the development phase, we each wrote a blog post to reflect on the PuppR journey.

* Sara's article: 
* Angeira's article: 
* Ivanzka's article: 

# Tutorial

## Take a tour of the deployed version at DrinkUp!
-> 

Here is a little preview of our main feature, the swiping through 



Here is a simple flow for the user experience on PuppR:

![Screenshot from 2023-01-27 12-26-02](https://user-images.githubusercontent.com/105127608/217574857-e5ea69c9-10b8-4a69-b032-b508756facae.png)


## Run DrinkUp! with React.js 
Installing the programs necessary to view this project is pretty simple!

We'll be using nmp 




## Known bugs
* Some transitions are not as fluid as expected, and due to API calls lag can be a bit off.
* Issue when viewing on mobile. Many of the assets become squished vertically.

# Architecture
![DrinkUp!_MVP_specification](https://user-images.githubusercontent.com/105127608/217574534-b5948486-e592-477b-9277-5f560e341637.jpg)

## Overview
Our web app is a single-page app, coded mainly in Javascript. **DrinkUp!** is front-end heavy, meaning that we focused our time and energy in developping a simple but easy to use and fun app. We designed most of the User Interface, using plain CSS and some native Vue transitions and animations. We also incorporated some BootstrapVue elements which offered a simple solution for some features like image uploading.



## React.js
For this project, we decided to focus on learning a new front-end framework. Following the advice of mentors and professionals, we chose to learn and use React.js.


### List of components

These components make up what a user experiences when they check out **DrinkUp!**. Each component contains the code for a specific page of the app. These components can be located in [src/components](./src/components).



## Firebase
We decided to go with Firebase for our backend/database as it provides all the functionality we need to develop this project such as authentication, database storage, and cloud storage. As a non-relational database, it made calling any required information simple.

Firebase was incredibly helpful while we were testing as it allowed us to look through each user's collection of information. This was helpful while we were implementing the logic for user likes and matches.

### Firestore
Since our app requires frequent and numerous database calls, Firestore provides a reliable and responsive solution to achieve a seamless experience. Practically all user information, such as display name, dog info, and even their like/match lists are kept in the Firestore. This lets us quickly populate each vue with relevant information.

For instance, when a user logs in they'll be taken to the main [Swiping](./src/components/Swiping.vue) component where another user's image, dog name, age, and location will be dispalyed. They can choose to 'like' or 'pass' the dog, which will immediately populate with another dog's information. Firebase's quick database calls populate this information and help keep this functionality snappy.

Images are kept in the Firestore as a link to where they're held in cloud storage. 
### Authentication
As our app connects people and their dogs, authentication is a necessity. Firebase provides a straightforward and easy-to-implement solution so we can focus on designing an accessible app. Users simply sign up with an existing email address and a password of their choice. Firebase Authentication does the heavy lifting to make sure users are authentic.
### Cloud Firestore
The obvious choice for storing users' dog photos. It provides straightforward implementation for users to upload their photo and a relatively quick way to call and display these images for users to sift through.

# Acknowledgments

* Holberton School staff - For the help, advice and resources they provided us with during this project and during all our curriculum.

* Cohort 18 and all Holberton students - For your friendship, invaluable support, and insight not only for this project, but over the last year.

* YOU - For reading this documentation and testing out **DrnkUp!**. We hope you enjoyed the ride!

# Related projects

* [AirBnB Clone](https://github.com/lroudge/AirBnB_clone_v4): a simple web app made in Python, Flask, and JQuery.

* [Simple Shell](https://github.com/scurry222/simple_shell): a command line interpreter that replicates the sh program.

# License

MIT License
