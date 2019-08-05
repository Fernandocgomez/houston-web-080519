# Intro to Git


### Learning Goals
- Use `git clone` to get code from GitHub
- Use `git commit` and  `git push` to save code back to GitHub
- Use `git branch` to work on your own copy of a project
- Merge branches together using Pull Requests


### Vocabulary
* git
    * Saves different versions of code
        * for recovery
        * pulling data from different places (multiple developers )
* GitHub
    * Where we post these git repositories to share them
* `clone`
    * Gets code from an address
* `commit`
    * Save our code
    * `git add <file> (or .)`
    * `git commit -am `
* `push`
    * Sends it back
* `branch`
    * Create a seperate "pocket" of code to work in
* `checkout`
    * Select a branch to work in

### Resources
* https://github.com/Joshua-Miles/lecture-exercises-080519

### Assessments

#### Self Assessment I: Cloning
* Clone this repository by writing `git clone <url from GitHub>` in the terminal
* Change into this directory by writing `cd lecture-exercises-080519/01-intro-to-git`
* Open the folder with a code editor (e.g. write `code .` in the terminal)
* Add your favorite food next to your name in `FOODS.md`

#### Self Assessment II: Pushing
* Write `git add .` so that `git` will find all of your changes
* Write `git commit -m "done"` to "save" all of your changes with the message "done"
* Write `git push` to send your changes back to GitHub

#### Self Assessment III: Branching
* Write `git branch <your name>` to create your own copy of the code
* Write `git checkout <your name>` to "open" (or "select") your copy of the code
* Write `git push` to send your changes back to GitHub on your branch
* When it gives you an error telling you to try another command (e.g. `git push --set-upstream origin <your name>`), copy and paste _that_ command into your terminal and run it.

#### Self Assessment IV: Pull Requests
* Go to this repo in GitHub
* Click the "New Pull Request" button
* Select **master** as the "base" and your name as the "compare".
* Click create pull request
* Click "Files Changed" to see what you changed.
