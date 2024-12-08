# what-can-u-eat

## Requirements

In order to use the USDA API you need a key.
You can request one from their website: https://fdc.nal.usda.gov/api-key-signup

Once you have the key you'll need to create a `secrets.edn` file in the resources directory next to the `system.edn` file.
The contents of that file should look like:

`{:usda-api-key "<your api key>"}`

## Run the app

Start a [REPL](#repls) in your editor or terminal of choice.

`clj -M:dev`

Start the server with:

```clojure
(go)
```

Start the ui in a seprate term with:

```
npm install
npx shadow-cljs watch app
```

The UI is available at http://localhost:3000
The default API is available under http://localhost:3000/api

System configuration is available under `resources/system.edn`.

To reload changes:

```clojure
(reset)
```

## TODO

1. Add data validation with something like Malli
2. Allow the user to select ranges themselves for the nurition limits
3. All the user to select a food item from a list of options as they type
4. More tests
5. Improve the UI

## REPLs

### Cursive

Configure a [REPL following the Cursive documentation](https://cursive-ide.com/userguide/repl.html). Using the default "Run with IntelliJ project classpath" option will let you select an alias from the ["Clojure deps" aliases selection](https://cursive-ide.com/userguide/deps.html#refreshing-deps-dependencies).

### CIDER

Use the `cider` alias for CIDER nREPL support (run `clj -M:dev:cider`). See the [CIDER docs](https://docs.cider.mx/cider/basics/up_and_running.html) for more help.

Note that this alias runs nREPL during development. To run nREPL in production (typically when the system starts), use the kit-nrepl library through the +nrepl profile as described in [the documentation](https://kit-clj.github.io/docs/profiles.html#profiles).

### Command Line

Run `clj -M:dev:nrepl` or `make repl`.

Note that, just like with [CIDER](#cider), this alias runs nREPL during development. To run nREPL in production (typically when the system starts), use the kit-nrepl library through the +nrepl profile as described in [the documentation](https://kit-clj.github.io/docs/profiles.html#profiles).
