# pestHubMap Code Repo

<!-- badges: start -->
<!-- badges: end -->

## Citation

Helmus, MR, VA Ramirez, EJ Zangakis, JM Gleditsch, I Smith. *in prep* pestHubMap: A framework to design
interactive applications to map properties that spread invasive species. contact mrhelmus@temple.edu

## Description

A framework to build applications that map “hubs” at high risk of
transporting invasive pests among properties. The framework and code can
be easily adapted to build applications for any invasive species, and we provide our
data and code in the context of the spotted lanternfly (SLF; *Lycorma
delicatula*).

-   *Why ‘pestHubMap’?*
    -   pest == invasive species
    -   Hub == properties that accelerate invasive species spread
    -   Map == interactive mapping applications
-   *Why build pestHubMaps?*
    -   Invasive species spread rapidly via hubs, Our maps are designed to provide agencies with information to find and optimally allocate resources to control invasive species and control spread.
-   *Why spotted lanternfly?*
    -    [The spotted lanternfly pest](https://en.wikipedia.org/wiki/Spotted_lanternfly) is a rapidly spreading, large, invasive planthopper that hitchhikes on a wide range of goods and transportation infrastructure. SLF feeds on &gt;150 plant hosts and threatens billions of dollars of agricultural loss. Primarily to grapes, where it damage is substantial and it has the potential to [disrupt the global wine market](https://www.nature.com/articles/s42003-022-03580-w). It is a prime model organism to develop the pestHubMap framework. 

## *Lycorma delicatula* Spotted Lanternfly pestHubMap apps

We have developed several pestHubMap apps for spotted lanternfly management in the U.S.A. These apps range in extent from county to state. The link below takes you to a dashboard to explore the different apps.
[slf.iecolab.org](https://iecolab.org/slfDashboard/pestHubMap.html)

## Instructions to Build a pestHubMap App

To build a pestHubMap app, first copy this repo to your computer and customize the code as needed. Once the app runs successfully on your [localhost](https://en.wikipedia.org/wiki/Localhost), proceed to host it online by following the required guidelines of your chosen web service. The programs we reference below are tailored for Windows users.

#### Copy this Repo
1. Fork the pestHubMap repo https://github.com/ieco-lab/pestHubMap/fork and get a copy of the repo and use the template code we provide.
    -   By forking, you copy a version of this repo into your own GitHub account. 
    -   Clone the repo on your computer.
        - If you know [git](https://git-scm.com/), great, you know what to do!
        - Otherwise, to fork install the GUI [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).  
  
#### Install WampServer
1.  For Windows, install [WampServer](https://sourceforge.net/projects/wampserver/files/latest/download). For other operative systems, perhaps try [XAMPP](https://www.apachefriends.org/).
    -   Read all of the WampServer installation instructions when they pop up. If you do not follow the instructions well, then the installation will not work and the WampServer icon will not turn green indicating that you can begin building the app.
        -   [Troubleshooting Tips](http://forum.wampserver.com/read.php?2,134915)
        -   Helpful tutorial for installation: [post](https://themescode.com/install-wamp-server-windows-10/), [video](https://www.youtube.com/watch?v=7gMplrbDZJs)
    -   The three main things are:
        -   Close Skype (it uses port 80)
        -   Disable or Uninstall IIS. go to Start->Run type inetmgr and press OK. If you get an IIS configuration screen. It is installed, otherwise it isn't. 
        -   Make sure that all the C++ library updates are installed (hopefully you have been keeping up to date with windows updates).
    -   MySQL and phpMyAdmin are now also installed, that is why we use Wamp.
2.  Clone pestHubMap to C:\wamp64\www.
    -   Using Git GitHub Desktop, then Add your forked pestHubMap repository to this location on your computer by cloning your forked repository.
    -   Check if there is now a folder with the name of your pestHubMap repository within the web server root working directory of Wamp, namely www.
3. Check if pestHubMap is a project within Wamp
    -   Click on the Wamp icon in your Windows toolbar and navigate to localHost. http://localhost/
    -   Your local Wamp website dashboard should open on a browser (the default browser you chose when you installed Wamp).

#### Open phpMyAdmin

1.  Click on the Wamp icon in your Windows toolbar and navigate to the phpMyAdmin version that was installed with Wamp.
2.  Your browser should opens to a login page. Use *root* as the username and leave password blank and click login.  http://localhost/phpmyadmin
3.  Select MySQL rather than MariaDB (if given the option).
4.  phpMyAdmin should now open in your browser.  http://localhost/phpmyadmin

### Make Hub Database

https://www.youtube.com/watch?v=C-50GV2uUu0

From here, make a new database and add user privileges if you want (not needed for this to work, but I suggest it to help keep your info private) 

Remember any new usernames/passwords you make, as you need this for the SQL access file! 

When prompted to give the server name for SQL access, it should just be “localhost” 

In this new database either upload datatables one by one, or if you already have a SQL database NOT on this local host…. 

Go to phpMyAdmin (or equivalent) and export the desired database as a SQL table 

Then import this file into the new, local SQL database 
2.  
