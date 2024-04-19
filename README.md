# pestHubMap Code Repo

<!-- badges: start -->
<!-- badges: end -->

## Citation

Helmus, MR, VA Ramirez, EJ Zangakis, JM Gleditsch, I Smith. *in prep* pestHubMap: A framework to design
interactive applications to map properties that spread invasive species. contact mrhelmus@temple.edu

## Description

pestHubMap is a framework to build applications that map hubs at high risk of
transporting invasive pests among properties. The framework and code repo here can be adapted to build applications for any invasive species. We developed pestHubMap in the context of the spotted lanternfly (SLF; *Lycorma
delicatula*).

-   *Why pestHubMap?*
    -   pest == any invasive species
    -   Hub == properties that accelerate invasive species spread
    -   Map == interactive mapping applications
-   *Why build pestHubMap Apps?*
    -   Invasive species spread rapidly via hubs, Our maps are designed to provide agencies with information to find and optimally allocate resources to control invasive species and control spread.
-   *Why spotted lanternfly?*
    -    [The spotted lanternfly pest](https://en.wikipedia.org/wiki/Spotted_lanternfly) is a rapidly spreading, large, invasive planthopper that hitchhikes on a wide range of goods and transportation infrastructure. SLF feeds on &gt;150 plant hosts and threatens billions of dollars of agricultural loss. Primarily to grapes, where it damage is substantial and it has the potential to [disrupt the global wine market](https://www.nature.com/articles/s42003-022-03580-w). It is a prime model organism to develop the pestHubMap framework. 

## Spotted Lanternfly pestHubMap apps

We have developed several pestHubMap apps for spotted lanternfly management in the U.S.A. These apps range in extent from county to state. The link below takes you to a dashboard to explore the different apps.
[slf.iecolab.org](https://iecolab.org/slfDashboard/pestHubMap.html)

### Point of Interest Data
Hubs locations of a particular property type like a landscaping company, boat dock, or railyard. Comprehensive [Point of interest (POI) data](https://en.wikipedia.org/wiki/Point_of_interest) for large geographic regions are often propriety and thus are not easily shared as open access. The spotted lanternfly apps all use a mix of open access and proprietary point of interest data, thus we cannot share these data. 

## Code Template and Examples
To facility use of the pestHubMap framework, in this repo we provide:
1. Code Template that can be used as a basis for developing your own app.
2. Example app code and data built on open access POI and other spatial data.  


## Instructions to Build a pestHubMap App

To build a pestHubMap app, first copy this repo to your computer, then get the example apps to run on your computer as a [localhost](https://en.wikipedia.org/wiki/Localhost), next customize the template code (or the example app code) and include your spatial data to map. Make sure that your new pestHubMap app runs successfully on your [localhost](https://en.wikipedia.org/wiki/Localhost). If it does, then it is up to you to follow the instructions provide by your web hosting service to host it online or deploy it on your network server. Note that the apps require an SQL database, thus they cannot be easily hosted on a static webserver service like Github Pages. __EDIT Links to the deployed example apps are here and here__.  

Below we provide a list of steps to build a pestHubMap app and links to resources (note: these instructions are tailored for PCs).

### Fork this  Repo
1. Fork the pestHubMap repo https://github.com/ieco-lab/pestHubMap/fork and get a copy of the repo and use the template code we provide.
    -   By forking, you copy a version of this repo into your own GitHub account.  
  
### Install WampServer
2.  On your computer install [WampServer](https://sourceforge.net/projects/wampserver/files/latest/download). For non-PC operative systems, try [XAMPP](https://www.apachefriends.org/).
    -   Read all of the WampServer installation instructions when they pop up. If you do not follow the instructions well, then the installation will not work and the WampServer icon will not turn green indicating that you can begin building the app.
        -   [Troubleshooting Tips](http://forum.wampserver.com/read.php?2,134915)
        -   Helpful tutorial for installation: [post](https://themescode.com/install-wamp-server-windows-10/), [video](https://www.youtube.com/watch?v=7gMplrbDZJs)
    -   The three main things are:
        -   Close any application that uses port 80 (e.g., Skype)
        -   Disable or Uninstall IIS. go to Start->Run type inetmgr and press OK. If you get an IIS configuration screen. It is installed, otherwise it isn't. 
        -   Make sure that all the C++ library updates are installed (hopefully you have been keeping up to date with windows updates).
    -   MySQL and phpMyAdmin are now also installed.
3.  Clone pestHubMap to your computer
    - Clone the repo to the this path on your computer C:\wamp64\www
    - If you know [git](https://git-scm.com/), great, you know how to clone!
    - Otherwise, to clone, install and use [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).
    -   Check if there is now a folder with the name of your forked pestHubMap repository within the web server root working directory of Wamp, namely www
        
4. Check if pestHubMap is a project within Wamp
    -   Click on the Wamp icon in your Windows toolbar and navigate to localHost. http://localhost/
    -   Your local Wamp website dashboard should open on a browser (the default browser you chose when you installed Wamp).

__UNDER CONSTRUCTION EDIT THE BELOW__
### Open phpMyAdmin
5.  Click on the Wamp icon in your Windows toolbar and navigate to the phpMyAdmin version that was installed with Wamp.
6.  Your browser should opens to a login page. Use *root* as the username and leave password blank and click login.  http://localhost/phpmyadmin
7.  Select MySQL rather than MariaDB (if given the option).
8.  phpMyAdmin should now open in your browser.  http://localhost/phpmyadmin

### Make Hub Database

https://www.youtube.com/watch?v=C-50GV2uUu0

From here, make a new database and add user privileges if you want (not needed for this to work, but I suggest it to help keep your info private) 

Remember any new usernames/passwords you make, as you need this for the SQL access file! 

When prompted to give the server name for SQL access, it should just be “localhost” 

In this new database either upload datatables one by one, or if you already have a SQL database NOT on this local host…. 

Go to phpMyAdmin (or equivalent) and export the desired database as a SQL table 

Then import this file into the new, local SQL database 
2.  
