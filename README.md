# pestHubMap

<!-- badges: start -->
<!-- badges: end -->

## Description

A framework to build applications that map “hubs” at high risk of
transporting invasive pests among properties. The framework and code can
be easily adapted to build applications for any pest, and we provide our
data and code in the context of the spotted lanternfly (SLF; *Lycorma
delicatula*).

-   *Why ‘pestHubMap’?* pest == invasive species + Hub == properties
    that facilitate invasive species spread + Map == interactive mapping
    applications
-   *Why build pestHubMaps?* Our maps are designed to provide agencies
    with information to find and optimally allocate resources to control
    invasive species and control spread.
-   *Why slf?* SLF is a rapidly spreading pest that hitchhikes on a wide
    range of goods and transportation infrastructure. SLF feeds
    on &gt;150 plant hosts and threatens billions of dollars of
    agricultural loss.

## Usage

To understand why this framework is useful and to build your own
applications:

1.  Read the [paper](LINK)
2.  Explore this [GitHub
    repository](https://ieco-lab.github.io/pestHubMap/) and use our
    provided data to test things out

## Lycorma delicatula Spotted Lanternfly Applications

Our SLF Dashboard with all applications:
[slf.iecolab.org/](https://iecolab.org/slfDashboard/index.html)

1.  Pennsylvania pestHubMap:
    <https://iecolab.org/lanternfly-webapp/SLF_Points_of_Interest/index.php>
2.  California pestHubMap:
    <https://iecolab.org/slfDashboard/california_risk.html>
3.  Indiana pestHubMap:
    <https://iecolab.org/lanternfly-webapp-indiana/SLF_Points_Indiana/index.php>
4.  Ohio pestHubMap:
    <https://iecolab.org/lanternfly-webapp-cleveland/SLF_Points_Cleveland/index.php>
5.  Chicagoland pestHubMap:
    <https://iecolab.org/lanternfly-webapp-chicago/SLF_points_Chicago/index.php>
6.  Virginia pestHubMap:
    <https://iecolab.org/lanternfly-webapp-va/SLF_Points_VA/index.php>

## Citation

Helmus, M.R., Zangakis, E. J., Gleditsch, J. M. Ramirez, V.A. pestHubMap: A framework to design
interactive applications to map properties that spread invasive species.
*In prep.*

## pestHubMap Local Host Instructions

To build an pestHubMap, you first must deploy it locally on your computer and then edit the code to get the app you want. Once you have edited the code to make the app you want, and it runs on your localhost, then you can upload your app to a web hosting service following the protocols of that external service. All of the below instructions were developed on Windows 10 PC. Below are described the steps to deploy a localhost instance of a pestHubMap. 

### Steps for localhost deployment

#### Fork the Repository
1. Fork this pestHubMap repository https://github.com/ieco-lab/pestHubMap.
    -   By forking, you can then code your own pestHubMap application based on the Template code we provide.
    -   If you have improvements to the code, then suggest a commit!
    -   Use GitHub Desktop to fork if you do not know Git or another version control system. Read the [GHD Instructions](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop), it is easy to use this GUI for all of your version control needs.  

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
