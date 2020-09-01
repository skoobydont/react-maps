## React Maps
This app is designed to demonstrate scaffolding a react app in a docker container to be run on a linux or other OS consuming google maps

## Start Up
To run this application:
<ol>
    <li>Pull Branch</li>
    <li>Ensure Docker version with command <code>docker --version</code></li>
    <li>For a development environment, run <code>docker-compose -f docker-compose-development.yml up -d --build</code>
        <ul>
            <li>this runs docker and gives back the terminal session (which will help with stopping the container later)</li>
        </ul>
    <li>After the fun ends, go to <a href="http://localhost:3000">localhost:3000</a> and the app should be running</li>
</ol>

## Once you're ready to call it a day
To stop the docker image:
<ol>
    <li>Simply run <code>docker-compose down</code></li>
    <li>Enjoy the rest of your day</li>
</ol>