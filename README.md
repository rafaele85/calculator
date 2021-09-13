# Calculator

## Requirements

Create a simple calculator application
The task - Create a very basic calculator application with the
below basic operations:

1) separated UI and API

2) best coding and collaborative practices implemented

3) fully tested - MUST WORK, no errors

While taking the task, you should consider the below things:

Check for code modularization - how to extend the code base.

Testing strategy.

User Experience

Make sure the front end and back-end services are split/ separate

If you type a meaningless expression, does it produce any values? Is this right?

Ensure decimal arithmetic is correct.

If changing precision, make sure no errors


#Implementation details

The application was implemented using the stack React.js/Node.js/Express in Typescript.
It uses REST API to send requests from frontend to backend.

Both frontend and backend are hosted in the same git project.


##Frontend

Frontend consists of the components:

* App - main application shell that processes events, interacts with backend and displays the result
* Display - displays the user entry and results
* Keyboard - renders calculator keyboard , consisting of set of Key components

User can interact with calculator by clicking on the buttons.


Frontend consists of basic folders:

* components - contains React components
* api - contains API logic (basically sends the key to the server) 

Front end is responsible just for capturing user input and displaying the results.
All processing is done on the backend.

Frontend is built using React.js and Typescript.

It does not use any 3rd party component library, all components are implemented using regular React elements.
It uses Material UI css-in-js for component styling.  


## Backend

Backend is build using Express framework in Typescript.

It uses architecture with layer separation

* controller layer is responsible for handling REST API requests from frontend and sending back response to the frontend
* service layer contains business logic and validations, as well as computations

### Description of logic

All keypresses are sent to the backend and are processed there.
Backend performs validation to make sure that only valid characters are allowed.
If an invalid character is pressed / sent, it is ignored and not processed.

Backend parses the display string and the last key pressed, then depending on the key pressed it 
determines if need to add a digit to user entry , perform a math operation, or clear the screen, etc.

At the end it returns the updated displayString to the frontend, which frontend displays.





# Running the application

Pre-requisites:

node.js v14 or better

## To start it


cd back-end

Create config file .env with the following content

HOST=<host or IP to bind server to>, e.g. localhost

PORT=<port for server to listen>, e.g. 5000

npm install

npm run build

npm start



cd front-end

npm install

Create config file .env with the following content

REACT_APP_API_URL=<url to back-end API service>, e.g. http://localhost:5000/api, should match host/port specified in back-end config


Then run:

npm run build

npm start


# Testing

Testing was done manually by trying the following cases:

* A normal expression  434 * 12 = 5208
* An expression with decimals:  1.3434 * 8.34 = 11.203956
* An expression with negative numbers  -329 - -24 = -304
* A division by zero 0 / 0 = NAN
* A division by zero 34 / 0 = Infinity
* All arithmetic ops ( 2 + 2, 3 * 6, 10 - 2, 3 / 5)
* Clear button
* Negate button (for first and for second number)
* % button (for first and for second number)


#Shortcomings / things to improve

This is a test task and I didn't spend much time to make it perfect.
I decided to implement one endpoint because the logic and operations are very similar.
Also in order to save time I didn't implement key processing and validation both on frontend and backend,
it is implemented on backend only. This causes a slight delay after each key press.
In general, a calculator app is typically not a client app, so it is not a good candidate for client-server service. 


* There is a slight delay and message 'Processing' after each key press. Add key processing and validation on the frontend to reduce the delay after key is pressed
* Calculator incorrectly works with large numbers in exponential notation (3e+41). Add correct handling of exp notation
* Calculator does not clear results after pressing a digit key it adds to the end of the result.
* Calculator uses javascript expression evaluation mechanism for computation, which not always works precisely with floating point numbers. Improve that.
* Break down service.ts to multiple files and implement better structuring, possibly with an API endpoint for each math operation
* From UX perspective it is also helpful to allow keyboard entry, not just mouse click on buttons.
Currently keyboard entry is supported with the display component is focused, but it does not work for all buttons, so it is a undocumented feature.
* Add better details and documentation for each function
* Possibly breakdown a singleton service into a set of classes and utilize OOP for it
* Add unit testing across the board , covering both front end and backend side
