# Sample Ionic Project for COMP 3111/H (HKUST)
## (The Honors Club group)

This repo showcases the **sample structure** of an **Ionic Project** for **COMP 3111H**.


This repo was adapted from the default **TAB template** of Ionic (created from command
```ionic start <app_name> tabs```).

I have included **AngularFire, Firebase** here as well. 



# Why this repo exists 

The **reason** I create this repo instead of using the original repo provided by Ionic framework (which
you see after running the command ```ionic start <app_name>```) is because the code structure of the original
one **DOES NOT support collaboration very well**, specifically:

-   In the original repo, all **Angular controllers** are put into a single file called **controllers.js**.
    The same thing also happens to **Angular services** (which are put into **services.js** file) and **CSS**
    (which are put into **style.css**).
    
    *(You can check these files in the directory **www/css**, **www/js** in
    the original repo)*

-   This make us very difficult to write code simultaneously because **CONFLICTS WILL ALWAYS HAPPEN** when 
    we merge these two files. This kind of conflict is unnecessary and does not worth time to resolve.



# Structure of the repo

-   **app/css**: This directory stores all CSS files that you need to style your HTML components if necessary.
    Each of of can create CSS files **independently** from each other, just need to ensure that **All CSS file 
    names and CSS rule names are different**

-   **app/js_controllers**: This directory stores all JS files which implement Angular Controller. I recommend
    that **each controller is written in a single file** (although you can put multiple ones into a single file)
    for **readability and testability**.

    Please pay attention to the **naming convention** of these files *(AccountCtrl.js, ChatDetailCtrl.js, ...)*

-   **app/js_services**: This is for Angular services

-   **app/js_routing**: This directory stores JS files which implement **routing (page-navigation) logic** which is 
    required for the pages/components you are developing.

    Please pay attention to the code structure of the example file **tabsRouting.js** I put in this directory

-   **www/templates**: This directory stores Angular template, similar to the original repo.

    I keep this directory here instead of moving it into **app** directory in order to maintain the efficiency of
    the building process

-   **www/img**: This directory stores all images needed for the project, similar to the original repo



# How to start coding on your local computer 

-   Install **Ionic 1, Cordova >= 4.2.0** globally on your computer:

    ```
    npm install cordova -g
    npm install ionic -g    
    ```

-   Install **Cordova plugin Inapp Browser** (which is needed for **Facebook Authentication**):
        
    ```
    ionic plugin add cordova-plugin-inappbrowser
    ```

-   cd to the repo directory in your computer

-   Run ```npm install``` just to make sure that all NPM packages are fully installed

-   Before you start your developing process, start **Gulp watch**
        
    ```
    .\node_modules\.bin\gulp watch    
    ```

    This command will watch out for file changes in the **app** folder and
    automatically rebuild the project

-  Now start **Ionic Serve** in a **different terminal** (read more about it on Ionic website):

    ```
    ionic serve
    ```



# How to run unit-testing

-   Install **karma-cli** globally:

    ```
    npm install karma-cli -g
    ```

-   Run ```npm install``` just to make sure that all NPM packages are fully installed

-   Write test for **Angular controllers** in **unit_testing/test_controller** directory.
    I have included a testing file **AccountCtrl_test.js** as an example

-   Write test for **Angular services** in **unit_testing/test_services** directory.

-   **Run all test cases** (make sure you have installed Google Chrome in your computer):

    ```
    karma start
    ```

-   You can see the sample coverage report in the **coverage** directory


    