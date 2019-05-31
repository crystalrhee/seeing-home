# SeeingHome

## About

ScholarJet competition submission: Seeing Home - dashboard to help students/families stay organized created by Wayfair. The project is deployed using firebase hosting at `https://seeing-home.firebaseapp.com/`. The backend is set up so that when a user clicks on a roommate, it imitates a log in process by passing in log in credentials. This makes the demo easier and it would also be easy to revert the code to requiring log in credentials.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Features

##### To do list

The purpose of this to do list is a personal quick and light-weight reminder that is not visible to other roommates. The input has 26 character limit and clicking on the `x` will delete the element from the list.

##### Announcements

Announcements are visible by all the roommates. When a roommate posts an announcement, all the roommates can see it real time. It has 140 character limit, has a time stamp, and is intended to serve as a catalyst for a further conversation.

##### Appliances, Guests, and Trash

My roommates and I share the appliances in the house and spaces like kitchen, livingroom, and the bathroom. This section is developed in order to keep track of whether some of the things we share are being used. If the icon is gray, it is not being used, if it is pink, it is being used. In the case of trash and guests, it keeps track of the presence. All the states are updated in real time.

##### Rent

Rent is individual to each of the roommates and is just a reminder of how much the rent is.

##### Random Roommate

Selects a random roommate. This could be used for chores or any other situation where there is no designated person.

## Future Implementations

Moving forward, there will be a log in system and a way to select the group that you are sharing spaces with. Options to select which tools to show on the dashboard will be implemented and there will be an analytics aspect. The dashboard will keep track of static as well as dynamic payment to better assess where the cost is going. There will be a section where roommates can keep track of which roommates are in which rooms, along with analytics to show who spends how much time in each of the room. A challenge that I foresee is automating processes instead of manual inputs.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
