Assigned 27 Nov 18, Due 3 Dec 18

#Dog Party JS Edition

##Overview
It’s a dog party! As a frontend developer, you’re going to need to be able to accurately build out the UI (user interface) for websites based on comps provided by a designer. For your first project, you’ll build a 1-page static site to practice writing well structured, semantic HTML with clean, precise CSS, as well as take a first crack at adding some user interaction with Javascript and the DOM.

Similar to what you might be asked to do on the job, we’ve given you a comp with a set of technical specs to go along with it and your challenge is to build it.

##Learning Goals
practice accurately building a comp
write well structured, semantic HTML
craft clean, DRY CSS
try out working with Javascript to interact with the DOM

##Steps to Set Up Your Project Files
  *Using your terminal, create a directory called dog-party
  *Inside of your `dog-party` directory, create a sub-directory called images
  *Also create three files called `index.html`, `styles.css`, and `main.js`
  *You will also need to download the assets and insert them into your `images` directory

**Note: Do not use CSS flex-box or grid for this project (If you don’t know what this is, no worries! You’ll learn more about these techniques in the coming weeks!)**

##Basic Project Requirements

**Step 1**
Start by building the HTML and using semantic tags to create a clean structure for your page.

**Step 2**
Style your site using CSS – aim to get it as visually close to the comp as possible.

**Step 3**
Create a README.md file that gives a brief overview of your project (don’t forget to make sure to include the comp as well as a screen grab of your finished site!)

##Extensions
We won’t cover how to do these in class before this project ends – challenge yourself and investigate how to tackle these tasks. And remember: it is ok if you’re not sure how to do these so take a crack at it and experiment, we’ll go over this material together soon!

###CSS
1. Make your Dog Party site mobile. Experiment using your DevTools and `media queries`  
  + How could you handle the links in the nav bar? Maybe change them into a menu icon?  
  + How will you handle the columns? Will they still fit if they are in 3 columns?  
2. Make the `What Is Dog` buttons horizontally aligned no matter how much text is in each column.    

###Javascript

1. Once you have the HTML structure built and styled using CSS, experiment with adding in interaction using Javascript: Build functionality to allow a user to type a dog name in the input field and then, when the user clicks the button, have that dog name replace the text `Some Dogs` in the main `A Site About Some Dogs` header and clear out the input field. For example: if I typed Fido into the input, when I click the button the main header of the page should change to read `A Site About Fido`.

##Submission Details

After you have completed your project and are happy with it, push it up to GitHub. You’ll learn more about Git & GitHub soon, but essentially, it’s a service/website that allows developers(you) to host your code/sites. Pretty cool right!?

###Add a public key to your github account

In order to push up your work to GitHub, you’ll need to generate an SSH key. SSH keys are a way to identify trusted computers without involving passwords. You can generate an SSH key and add the public key to your GitHub account by following the procedures outlined in this tutorial from GitHub. This video will walk you through the process and likely save you time.

###Setting up Repository on GitHub and Pushing up
1. Create a new repository on GitHub by clicking that green button on the home page that says New Repository
2. Enter in a relevant name for this project (i.e. Dog Party)
3. Do NOT initialize the repository with a README. You have already created one locally on your computer.
4. Leave it set as public because you want to others to see your work and then click Create Repository!
5. Follow the steps on the next page and enter each command into your terminal
6. Once you see your code up in your repository, go to Settings and publish your site on GitHub pages!
7. Finally, place your links in the appropriate tab of the Submission Sheet

###Example Steps for Part 5
1. `git init` inside of your dog-party directory
2. `git add .``
3. `git commit -m "Initial commit"``
4. `git remote add origin git@github.com:Kalikoze/Dog-Party.git`
5. `git push -u origin master`

##Design Comp

[Orig Comp](../images/dog-party-js-edition-comp.jpg)

##My comp

[My Comp](../images/dog-party-js-my-edition.png)
