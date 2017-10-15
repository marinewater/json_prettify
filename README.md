[![Build Status](https://travis-ci.org/marinewater/json_prettify.svg?branch=master)](https://travis-ci.org/marinewater/json_prettify)
[![codecov](https://codecov.io/gh/marinewater/json_prettify/branch/master/graph/badge.svg)](https://codecov.io/gh/marinewater/json_prettify)

# json_prettify

[![Greenkeeper badge](https://badges.greenkeeper.io/marinewater/json_prettify.svg)](https://greenkeeper.io/)
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
