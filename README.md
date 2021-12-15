# REACT NATIVE SELF DESIGNED APPLICATION

Design and Analysis documentation
Q-1 what is the title and the inspiration for the app?
A1-The title is  Name rarity
The inspiration was different people names. I was curious about how many people had the same names.


Q-2 what is the goal for the app? 
A2- The goal of this app is to display, how rare the user’s name is by showing them how many people have the same name.

**Q-3 what is the story of the app? 
A3- Hello my name is Mayank, I am 12 years old. I want to create this application for fun. I starting to think about this idea when I starting to learn about drawer navigators, in React Native. I was just curious about how rare my name is, and my friend’s names are. Since I was given an opportunity to design an app of my liking, I decided I was going to develop this app. At first, I wanted to create an app that pronounces people’s names, but I decided against it because it was based on the monkey chunky app. Then I thought about it for a bit longer and I decided to do this app.

Q-4 how many screens and features are present in the app? list them. 
A4- There are 3 screens.
Homescreen, this screen will display, an input box that will be used for inputting the user’s name. A check button will, check how rare your name is and show, the percentage of the people that have the same name. It will also show in numbers how many people have the same name as the user.
MostCommonName, this screen will display the most common name, in percentages and numbers. The percentage is how much of the population has the same name as you. The number is the amount of people that have the same as you.
LeastCommonName, this screen will show you the least common name, in percentages and numbers. The percentage is how much of the population has the same name as you. The number is the amount of people that have the same as you.



Q-5 Discuss different userflows for your application. 
A5-
1. The user opens the application, and lands on the HomeScreen. 
2. The user will see one textbox, that says enter your name here, and a check button with rounded courners. The user will type their name into the textbox. 
3. When they have finished typing their name.
4. Then they will click the check button to see how rare their name is.
5. The rarity is shown in a percentage of the total population and in rank (1 meaning very rare, and 100 meaning common.).


2nd userflows.
1. There is a drawer navigator that will open once dragged from the left side of the screen. 
2. The user can open the drawer navigator, which has 2 options: first one is the "mostCommonName", and the second one is HomeScreen (which is the landing page).
3. When the user clicks on mostCommonName the user will be shown "mostCommonName" screen. 
4. This screen will display the ten most common names  in the world.
5. If the user wishes to go back to search the rarity of names,  then the user have to open the tab navigator and click on "Home".


ORGANISED WORKFLOW.

Q-6 describes the structure, working and behaviour of each screen throughout the duration of the app in EXTREME EXTRA DETAIL.
A6- First the user will type Their name in the text input. Then the text input will feed the data to the API, the API will come back to my database to extract the information. I will use a reader in react to get that data from my database. Then i will display the result, ie how many people have the same name as you. There will be other features such as. Most common name. There will be a small circle button, that if you lick it will lead you to a screen, that I will name mostCommonName.js. It will display the name that is most commonly used. And how many people have that name. I will have another screen that will display the least common name.

Q-7 how to play the app? 
A7- To use this app, it’s very simple. You don’t need to sign in or anything. Once you are on the app’s page, just type your name in, then click the check button below it. Once clicked it will show the rarity of your name, in the percentage of how many people have the same name, and in integers of millions of the same name as you.

Q-11 How does the app provide feedback to the user?
A11- 1. If the user has clicked the Check button in HomeScreen, the button will go translucent using TouchableOpacity.
2. If the name you have entered in the textbox in HomeScreen is rare a sound will be played, and there will be fireworks at the top of the screen.

Q-12 What is the technology used to create the app? 
A12- react native

Q-13 What is the software used? 
A13- snack expo

Q-14 which react native libraries and components are used to develop or create the app 
A14- 
TouchableOpacity
React
Button
Drawer

REACT NATIVE self design project: 

— Complete designing all the visual elements in the app— 
- Create wireframes, of each screens.
- install the library for the component which they are using 
- import the library into their project 
- read the documentation for the component 
- use the props of the component in the way described in the component 
- build navigation between the different screens 
- code the visual elements to the other screens.
- identify user interface elements.
- Use react native component to create static screens.
- Add Navigation for the different routes.
- Install firebase library
- Think about the schema of database, and apply it.
- Once you create it, connect the databse.


