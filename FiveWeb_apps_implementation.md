On a web application there is the client side (multiple clients) and the server side (just one server app for all the clients).

On the client side we use the web browser, where we just can execute HTML (+ css style sheets) and javascript. But the client can perform multiple requests to the server (where the FiveWeb app is). The server app is built using Harbour and FiveWeb.

The server app basically performs a process, and provides a HTML output, and ends. It does not remain open, or waiting. It process, provides a result and ends. The dialog boxes, controls, etc that we see on the client side (web browser) are DOM objects managed using javascript.

From those controls, menu options, etc... we can call the server app again, to get new results or simply to update the current ones (in this case we use Jquery Ajax support).

When we are going to perform an action from the client side, we need to decide if it is an action that we can solve locally (using javascript and using FiveWeb javascript functions) or if we need to request it from the server (database management, new requests, etc.)

The server app can ve invoked many times, and providing a parameter to it, then we can decide what to do from the same server app:

function Main( cWhatToDo )

so when we call our app, we do: //server/myapp?TheActionToDo