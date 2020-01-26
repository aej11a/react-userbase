# react-userbase

> React Hooks for [Userbase](https://userbase.com/)

[![NPM](https://img.shields.io/npm/v/react-userbase.svg)](https://www.npmjs.com/package/react-userbase) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

You need to install Userbase separately from this package

```bash
yarn add userbase-js react-userbase
```

or

```bash
npm install userbase-js react-userbase --save
```

## Usage

The hook takes arguments like these:

```tsx
useUserbase(action, options?)
```

where action is one of the Userbase functions from their [SDK](https://userbase.com/docs/sdk/) and `options` is an object of options to pass to the function.

The hook returns an array with a function and an object as shown in the example below.

The generated function will trigger its Userbase function, and the object properties will track that function's state.

You can also pass options to the function when you call it, as shown below.

**Note**: it is reccomended to initialize your app using userbase.init directly from userbase-js, in your app's `index.js`. You can see this in the example app.

```tsx
import * as React from "react";
import { useUserbase } from "react-userbase";

const Example = () => {
  const [signIn, { response, loading, error }] = useUserbase("signIn");
  const [signOut, { response: signOutResponse, loading: signOutLoading, error: signOutError = useUserbase("signOut");

  const username = "aej11a"
  const password = "Password123"

  useEffect(() => {
    console.log(response, loading, error)
  })

  if(loading) return <LoadingIndicator/>
  return (
    <button onClick={() => signIn({username, password})}>Sign In</button>
  )
};
```

## Example Project

Clone the repo locally and add a `.env.local` file at `react-userbase/example/.env.local`

In that file, add `REACT_APP_USERBASE_APP_ID=<YOUR USERBASE APP ID>`

Start the dev server to test. You can see a few different uses of the hook in `react-userbase/example/src/App.js`

## License

MIT © [aej11a](https://github.com/aej11a)

---

This hook was created using [create-react-hook](https://github.com/hermanya/create-react-hook).

Excellent explanation of the object syntax instead of using an array: https://github.com/zeit/swr/issues/9#issuecomment-547224457
