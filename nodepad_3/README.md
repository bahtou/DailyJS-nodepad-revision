[DailyJS](http://dailyjs.com/2010/11/01/node-tutorial/) has a tutorial on how to create a notepad web app: Nodepad.  
This is the initialization of a rewrite.

## Quick Notes #

Deviations from the tutorial:

* See [Migrating from 2.x to 3.x](https://github.com/visionmedia/express/wiki/Migrating-from-2.x-to-3.x)
* To deal only with **development** environment
* New version of express is instantiated by:

        var app = express();

- Added more `require()` methods
- Initializing **`express`** produces additional folders that aid in applying an *V* stype of application.
 + **views**
 + **routes**
 + **public**
<br />
- Added the following folders to aid in our MCV model:
    - **congigs**
    - **controllers**
    - **models**
<br />
- Moved the `mongodb` connection configuration to **`configs`**
- Moved *model* functionalities from `app.js` to **`models`** folder and added files for schema, db connection, and indexing.
- `express` comes with boiler plate `app.configure` settings that differ from *DailyJS*
- All the `routes` are hardcoded into `app.js` making it bloated with code.  Moved the `routes` to the **`routes`** folder.
- `routes` in the **`routes`** folder point to the **`controllers`** folder where `routes` are rendered to the user.
- `http` protocol is instantiated and called with `http.createServer(app)`