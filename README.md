Mirror Reporters v.0.0.1
========================

Google Glass + [Mocha, karma, jshint].reporter
--------------------


Before you get too excited:

*There is currently* ~~nothing~~ *not much to show*

**The mirror api and some basic mocha tests are the only things that work.**

~~The mirror api is the only thing that works.~~




### Current status:

#### GlassMocha

    testing

#### GlassJSHint

    not even started
    
#### GlassKarma

    barely even thought about.

The reporters have not been formed into complete existence yet- when they exist and work properly, this README will be updated (and the reporters will be submitted to their respective parent applications).

That being said-

I'd love some help :-).

This project is closely based off of my contributions to / implementation of Alexander Scott's [mirror-quickstart-nodejs](https://github.com/alexanderscott/mirror-quickstart-nodejs)
 ...which is largely based off of Google's [mirror-quickstart-ruby](https://developers.google.com/glass/quickstart/ruby).


## Install

    git clone https://github.com/andrew-luhring/mirror-reporters.git
    cd mirror-reporters
    npm install

## Configure

*  Go to your [Google Developers Console](https://console.developers.google.com/project/ __[[    your app name ]]]___ /apiui/credential)

*  after you create an oauth client id you should see three buttons:
  *  "edit settings",
  *  "download JSON",
  *  "delete"

*  Download your JSON file, put it in this projects' config directory
  *  **If it is not named "client.json" name it "client.json"**

*  In /app.js make sure PORT matches the redirect_uris / javascript_origins ports that are in your client.json.
  *  The default port for this project is 4567.


## Run

    npm start


*  Then fire up your browser and go to [http://localhost:[ port number ] ](http://localhost:4567)
*  If everything goes correctly, you should see something like this at your localhost:port:

![](https://raw.githubusercontent.com/andrew-luhring/mirror-reporters/master/public/assets/images/screenshot.png)


## Test

If you don't happen to have a Glass, you probably won't be able to run this-- but you CAN run the tests:

    npm test



## Contribute

*  Fork + branch,
*  pull request.
*  dance *(<== only if you want to)*.


## License

The MIT License (MIT)

Copyright (c) 2014 Andrew Luhring, Alex Ehrnschwender, Google

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/1fcc021639bf7d166b63ed9d9ae9d70b "githalytics.com")](http://githalytics.com/alexanderscott/mirror-quickstart-nodejs)

