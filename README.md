# coding-challenge-front-end

Welcome to the Cove coding challenge! 👋

Adam just signed a deal with a large real estate owner 🎉. Before we can launch our *powered by cove* platform in their office building, we need to get a reservation system up and going. 

In our backlog grooming Jeremy (our Product person) presented the problem we are trying solve for our users:

*As Angela at Allsafe (office user), I’d like to book a the large conference room for the strategy meeting and I need to find a time when it's avaiable.*

The team broke this problem down and decided to start first with this User Story:
- As an office user, I’d like to see the schedule for a selected room and date, because I need to find a time when it's available.

For this challenge, we've provided you with a simple application that is meant to display a list of reservations and allows the user to filter by date and room. Your job is to complete this application so that it functions as intended.

Questions along the way? Don't hesitate to reach out to engineering@cove.is!

## Running the App

- `yarn`
- `yarn start`

## Part 1

Your first objective is to take a look at the TODOs in [`App.js`](./src/App.js) and "wire-up" the existing components. No need to change the UI at this stage in terms of styling or functionality, apart from hooking up the components.

We'd like you to use hooks for this section. Specifically we'd like you to use the `useMemo` hook in your solution. If you don't know what this hook is you can read about it [here](https://reactjs.org/docs/hooks-reference.html#usememo).

You'll need to:
- manage the state for both filters (`DatePicker` & `DropDownSelect`)
- fetch a list of reservations from this endpoint: https://cove-coding-challenge-api.herokuapp.com/reservations
- populate `DropDownSelect` with options based on the rooms you get back from the endpoint (e.g. "Room A", "Room B", ...)
- pass a filtered version of the reservations you get back to `ReservationList`

After this step, the user should be able to change the value of both filters, and they should only see reservations that match their filters.

### Explain your approach to Part 1

I started by installing and importing axios as my dependency to fetch data from the endpoint. I used useEffect hook with and empty dependency list and inside that hook I made the GET HTTP call, then I defined my local state and assigned their initial values. Inside my initial useEffect hook I reassign values for reservations, unique rooms and a room from the already filtered unique rooms. My second step was to set the initial values for datePicker and dropDownSelect and define onChange events with my functions to set the values for current selected room and date in my local state. When setting the options for the select boc I just modiefied the options prop to make the key names consisten with the API response. Lastly I just used useMemo to return a cached value from filtering my list of reservations based on changes on current date and room.  

## Part 2

Your next job is to make the list of reservations look a little nicer. Ryan, the designer on our team made some mock-ups for the desktop and mobile UI. Take a look at the TODO in [`ReservationList.js`](./src/ReservationList.js) and try to match Ryan's mock-ups below. Your design should be responsive, using a css breakpoint to switch between the desktop and mobile layouts. 


Desktop:

<img src="public/imgs/mock-up-desktop.png" alt="desktop" />

Mobile:

<img src="public/imgs/mock-up-mobile.png" alt="mobile" width="300"/>

Please don't worry about making it a pixel-perfect match with the designs! As Devs we collaborate closely with Ryan and it's a give and take.

Feel free to use whatever approach to styling you wish. No need to mirror what is already in the project. Some approaches that we consider valid:

- [Styled Components](https://styled-components.com/)
- [React-JSS](https://cssinjs.org/react-jss/?v=v10.6.0)
- [Tailwind](https://tailwindcss.com/)
- SASS/LESS
- CSS Modules
- or just plain CSS

### Explain your approach to Part 2

I mainly built using flexbox properties. I started off by installing sass as dependency because I wanted to use it for styling. Second, I defined my main 
div blocks in my component to have a structure of the contents and then I assigned classes to those blocks. My third step was to install and import date-fns because I
wanted to format the dates in an easy and quick way and used it to format the neccessary dates and times. My fourth step was creating my breakpoint to add styles to the classes for mobile design using mainly flexbox for layout, finally I added styles for the same classes which would take care of viewports beyond the breakpoint max value.

## Part 3

For this last step, we'd like to try and understand how you approach testing. Our product person Jeremy already has a bunch of reservations related User Stories lined up. In the backlog grooming, Wil pointed out that we should add some good test coverage now, since we'll likely add more complexity to our reservation app in the future.

We've started working on a util called `isScheduleConflict` to check for reservation conflicts. `isScheduleConflict` takes a list of reservations and returns `true` if any reservation in the list conflicts with another in the list (see `utils.js` for more details). Your job is to complete this util and add more test coverage. Look for the TODOs in [`utils.js`](src/utils.js) and [`utils.test.js`](src/utils.test.js) and use `yarn test` to execute the tests.

Assumptions you can make:
- `reservations` will always be an array of valid reservations
- A valid reservation always has a start/end time and the end time will always be after the start time
- Do NOT hook up the util to the user interface

NOTE: Don't worry about the efficiency of your solution:
- If you know an efficient solution, we'd love to see it and hear why you favor it.
- However, we are more focused on readable and maintainable code.

### Explain your approach to Part 3

I started by simply writing the test cases first. I wrote a successful scenario for conflicting reservations and another test case for a successful 
scenario for non clonflicting reservations. As a second step, I wrote the function logic by iterating over each element in the list and finding if any
2 given dates overlap.

Thanks much!

Edgar

