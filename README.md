# Zia's Website

If you wanna get fancy and edit on your own, I would recommend using a text editor. I used to use Sublime Text when I was just starting out because it's free and simple to use. Otherwise, you can edit the files directly in Github, but you won't be able to see the changes immediately; you'll have to wait for it to redeploy in a couple minutes.

I'm going to setup a script to automatically build and deploy the website when someone pushes to the `main` branch, so you don't have to worry about it.

## Available Scripts

1. Open a terminal (on Mac, you can search `command + space` and type `terminal`; it should be installed).
2. Navigate to the directory of the project: `cd path/to/ziavirani.github.io`. I'm not sure what your default directory is, but you just want to list the folders it's in. For example, `cd Documents/website/ziavirani.github.io` if it's in a Documents folder and then a website subfolder.
3. Run any of the following commands:

### `npm start` **RUN THIS TO VIEW**

Runs the app in the development mode. (i.e. you can hit save and see the changes immediately)\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` **IGNORE THIS**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` **IGNORE THIS**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` **IGNORE THIS**

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Editing the website

The data that populates the website is stored in the `src/data` folder. See `src/data/types.ts` file for all the properties you can change.

### Changing the header

1. Go to `src/data/header.ts`
2. Change the `title` and `subtitle` properties to any strings.
3. If you want to add a new line to the subtitle, you can do so by adding a `\n` in the string.
4. If you want to remove the header entirely, just make the object empty.
   `const header: Header = {}`

### Changing the footer

1. Go to `src/data/footer.ts`
2. Change the `title` and `subtitle` properties to any strings.
3. If you want to add a new line to the subtitle, you can do so by adding a `\n` in the string.
4. If you want to remove the footer entirely, just make the object empty.
   `const footer: Footer = {}`

### Adding a new tab

1.  Go to `src/data/tabs.tsx`
2.  Add a new object to the `tabs` array by following the format of the other objects. The `label` is the text that will appear on the actual tab. The `title` is optional if you want to change the header of the panel to something other than the label; if you leave it blank, the label will be used. The `description` is text below the header. The `content` is anything you want to put inside the panel that isn't text.

### Updating the theme

1. Go to `src/theme.ts`
2. If you want to change the colors, you can do so in the `palette` object. They're hardcoded into the components, so the best way to keep things consistent is to change the theme color for everything. You have to use hex values, so you can use a tool like [this](https://www.w3schools.com/colors/colors_picker.asp) to find the hex value of the color you want.
3. Changing the font is a bit more complicated. The font you have is downloaded from Google Fonts and pasted into the `src/index.css` file. But, if you want a basic font, you can change the `fontFamily` property in the `typography` object - just look up what fonts are available and paste the family name in.
