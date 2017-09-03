# DNA React
This is the DNA implementation of Facebook's `create-react-app`, mixed with `React Router`, `Redux` and `React Helemt`.

## Current Issues
* React Helmet isn't working, not sure why.
* Haven't tested the build
* Could do with adding some more redux examples
* No testing... yet

## Usage
It's preferable to use Yarn to run, as it seems that npm's package-lock.json gets confused and throws errors (I've tried both).

## Stylesheets
As much as I would've liked to use PostCSS, it seems like a big jump, so I've added full support for SASS. All component SASS exists within it's component directory inside the source. All global SASS needs to live inside the `sass` directory.

## Actions and Reducers
These currently exist in their own files. Break them out into invdividual files when they start to get unwieldy.

## Troubleshooting
RTFM or ask someone 
