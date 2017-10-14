# json_prettify
Takes javascript objects in any notation and converts them to proper JSON with indendation.

## Installation
```
npm install -g json_prettify
```

## Usage
```
json_prettify file.json <options>
```

or

```
cat file.json | json_prettify <options>
```

### Options
- `-o output.json` or `--out file.json` write output to file
- `-s <number>` or `--spaces <number>` number of spaces for indentation
- `--help` help text
