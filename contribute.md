# Contributing to Twelfth Man
## General Workflow
1. Clone down the master directly (do not fork):
 `git clone masterURL yourdirectory`
2. Create a new feature branch from master, If it's a new feature, name the branch `#-feature/description`. If it's a bug fix, name the branch `#-bug/description` or `#-bugfix/description`. `#` should be the associated issue number inside of Linear. While `description` should be a short description of what was fixed. 
 Examples:
  `git checkout -b AUS-123-feature/adds-a-thing`
  OR
  `git checkout -b AUS-123-bug/fixes-a-thing`
3. Make changes and commit to your feature branch.
  `git add -p`
4. Sync up with latest master before pushing to remote feature branch:
  `git pull --rebase origin master`
5. Fix any merge conflicts if necessary.
6. Push changes to remote feature branch:
  `git push --set-upstream origin AUS-123-feature/adds-a-thing`
7. Generate pull request. Generally done through Github.
8. Fix any issues highlighted by reviewer if necessary.
9. When everything checks out, reviewer merges pull request to master.
10. When a pull request is merged and closed, delete `AUS-123-feature/adds-a-thing` branch.
## Detailed Workflow
### Cut a namespace branch from master
Your branch should follow this naming convention:
 - #-bug/description
 - #-bugfix/description
 - #-feature/description
Where `#` associates directly with the issue number in Linear.
Where `description` is a brief explanation of what the branch does.
### Creates your branch and brings you there
`git checkout -b AUS-123-feature/adds-a-thing`
### Make commits to your branch.
Only make changes and commits that are relevant to this branch. If you find yourself making unrelated changes, create an issue inside of Linear and a new branch for those issues.
### Commit Message Guidelines
- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.
### Rebase upstream changes into your branch
Once you are done making changes, you can begin the process of getting
your code merged into the main repo. First step is to rebase upstream
changes to the master branch into your own by running this command
from your working branch:
`git pull --rebase origin master`
This will start the rebasing process. One you are done fixing any and all conflicts, you should rerun all tests to make sure nothing has borked.
If rebasing happened to break anything, fix it, then repeat the above process until you nothing is broken and all tests pass.
### Make a pull request
Make a clear pull request from your fork and branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is, the faster you can get
your changes incorporated into the repo.
At least two other person must give your changes a code review. Once you have two approvals, you may merge your changes into the master repository. Alternatively, they may have some requests changes. After addressing any issues or concerns, you should commit these changes, rebase once more, and push the changes to your branch.
Note: A pull request will be immediately rejected if there are any conflicts!
Thanks for contributing!
### Guidelines
1. Uphold the current code standard:
    - Keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
    - Apply the [boy scout rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule).
2. Run all tests before submitting a pull request.
 - Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
4. Your pull request is comprised of a single [squashed](https://blog.carbonfive.com/2017/08/28/always-squash-and-rebase-your-git-commits/) commit.
## Approving Pull Requests
### Initial Steps for a PR review
1. `git fetch`
2. `git pull <branch-name>`
3. `yarn` - install dependencies
4. `yarn test` - runs unit tests
5. `yarn start` - verify change (based on acceptance criteria)
6. `yarn cypress:open` - run cypress tests
7. Comment in PR stating approval, then pressing the fancy green approve button.
## Things to keep in mind
### General
* Make sure the PR builds successfully. (Locally)
* Make sure you have the correct packages installed. Especially if the PR includes new or updated packages. Make sure to clear any updated or changed packages after testing the PR on your local environment.
* Does the PR accomplish what it was meant to do?
* Is the code easily understood?
* Does it conform to agreed coding conventions? No eslint errors.
* Redundant or duplicate code?
* Be free of compiler errors and warnings.
* Is the code as modular as possible?
* Commented out code?
* Logging or debugging leftover that needs to be removed?
* Don't discount frontend complexity. A simple css or html change could alter or break a users experience.
* Check what has NOT changed. Sometimes code is left over and forgotten about, potentially polluting the codebase. (Cypress should help capture potential breaks)
* Should have merged all changes from master and all conflicts resolved.
* Leftover styles that should be added / removed?
---
### Documentation / PropTypes
* Do comments exist and describe intent of code?
* Are all functions commented? (Use discretion)
* Any unusual behavior or edge case handling described?
* Are data structures and units of measurement explained?
* PropTypes? isRequired?
* Leftover documentation / PropTypes from recently removed code.
---
### Tests
* Is the code testable?
* Checking test coverage HTML. (Don't gamify code. Should have test for passing and failing.)
* Do tests exist and are they comprehensive?
* Check that the tests work and are of high quality.
* Do unit tests actually test the code is being performed for the intended functionality?
* Are the expected snapshots being updated? Are there snapshots that should not have been affected?
* Are there unnecessary tests?
---
### Extras
* Frame feedback as requests, not commands. i.e. "Could we extract this function into a helper?" vs "Extract this function into a helper."
* If you find an issue, do not stop the review, continue to review the PR.
* Be curious. If you're unsure of code, ask questions. If it's too hard for you to understand now, imagine when someone takes over in the future.
* If you can suggest an improvement, give an example.
---
### After PR Approval
* Let person who opened PR to merge, and then watch that build doesn't fail. Upon success, delete branch.
