/*
Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
*/

/*
Example:-
Let’s say you have a game where you have to perform an action based on weather
the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
*/

// In place of enum we can also use the type up, down, left and right.
// type KeyInput = "up" | "down" | "left" | "right";

// Reason we use enum so that we make it more human readable and it provide options when we use
// dot operator
// (imp):- Enum only exist in the typescript not in javascript (For this we can also see javascript)
//  Compile code.

enum Direction {
  Up,
  Down,
  Left,
  Right,
  // By default this direction have the value start from 0, 1, 2, 3, 4.
  // We also assign some string to direction Up = "hi", Down = "sit down" ---- etc.
}

function dosomething(KeyPressed: Direction) {
  if (KeyPressed == Direction.Up) console.log(Direction.Up);
  else if (KeyPressed == Direction.Down) console.log(Direction.Down);
  else if (KeyPressed == Direction.Left) console.log(Direction.Left);
  else console.log(Direction.Right);
}

dosomething(Direction.Up);
dosomething(Direction.Down);
dosomething(Direction.Left);
dosomething(Direction.Right);

// --------------- We use `enum` in Express ----------------------------------------------
/*

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})

*/

// If we want to install express and also want to use the typescript than we install express
// like this:- npm install express @types/express
