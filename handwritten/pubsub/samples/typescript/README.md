# About TypeScript samples

In order to provide better samples for our TypeScript users, new samples going forward will be written in TypeScript, in this directory. `npm run compile` will take care of all the steps needed to merge the existing JavaScript samples into `build/` along with the compiled TypeScript samples.

When you are ready to submit a PR for the updated sample, please run `npm run updatejs`. This will copy the built `*.js` files to the main sample directory, where they can be found by the docsite processors. You may also want to run `npm run lint` from the parent directory, because sometimes removing the typing annotations is enough to upset Prettier's formatting rules. The simplest fix for that is to just go ahead and run `gts fix`, also from the parent directory.
