# json_prettify

[![npm version](https://img.shields.io/npm/v/json_prettify.svg)](https://www.npmjs.com/package/json_prettify)
[![Gitlab pipeline status (branch)](https://img.shields.io/gitlab/pipeline/marinewater/json_prettify/master.svg?style=flat-square)](https://gitlab.com/marinewater/json_prettify/pipelines)
[![codecov](https://codecov.io/gh/marinewater/json_prettify/branch/master/graph/badge.svg)](https://codecov.io/gh/marinewater/json_prettify)
[![License](https://img.shields.io/github/license/marinewater/json_prettify.svg)](https://github.com/marinewater/json_prettify/blob/master/LICENSE)
![node](https://img.shields.io/node/v/json_prettify.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/marinewater/json_prettify.svg)](https://greenkeeper.io/)

Takes javascript objects in any notation and converts them to proper JSON with indendation.

For example:
```shell
$ echo "{foo: 'bar',n:3}" | json_prettify
```
Output:
```json
{
    "foo": "bar",
    "n": 3
}
```
## Installation
```shell
npm install -g json_prettify
```

## Usage
```shell
json_prettify file.json <options>
```

or

```shell
cat file.json | json_prettify <options>
```

### Options
- `-o output.json` or `--out file.json` write output to file
- `-s <number>` or `--spaces <number>` number of spaces for indentation
- `--help` help text
