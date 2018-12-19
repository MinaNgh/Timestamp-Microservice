# Request-Header-Parser-Microservice

Timestamp Microservice for FreeCodeCamps API-Projects

## How to use it:

You can use a natural language date matching one of the following formats

    .../2016-12-02
    .../02-12-2016
    .../December 2, 2016
    .../December 2 2016
    .../Dec 2, 2016
    .../Dec 2 2016
    .../2 December 2016
    .../2 December 16
    .../2 Dec 2016
    .../2 Dec 16
    
Or a Unix-Timestamp:

    .../1480636800
  
## Output:

    {
        unix:  1480636800,
        utc: "December 2, 2016"
    }
