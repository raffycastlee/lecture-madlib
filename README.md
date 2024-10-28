# Lecture - madLib example
with Ben Spector | 2024/10/28

## Setting up env
1. `mkdir madlib`
2. `touch` to create `index.js`,`madlib.js`, and `madlib.spec`
3. `npm init -y`
4. `npm i jest`
5. Set up a script in `package.json` as follows to make `npm t` work:
```json
"scripts": {
    "test":"jest"
}
```