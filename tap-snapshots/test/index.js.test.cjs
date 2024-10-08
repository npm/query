/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.js TAP queries  > must match snapshot 1`] = `
Array []
`

exports[`test/index.js TAP queries #a *:root > #a *:root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 2,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "a",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 3,
              "line": 1,
            },
            "start": Object {
              "column": 3,
              "line": 1,
            },
          },
          "sourceIndex": 2,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 4,
              "line": 1,
            },
          },
          "sourceIndex": 3,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #a > :root > #a > :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 2,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "a",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 4,
              "line": 1,
            },
          },
          "sourceIndex": 3,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #a ~ :root > #a ~ :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 2,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "a",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 4,
              "line": 1,
            },
          },
          "sourceIndex": 3,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": "~",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #a, #bar:semver(2), #foo > #a, #bar:semver(2), #foo 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 2,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "a",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 2,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_3>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_3>,
          "semverValue": "2",
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 4,
          "line": 1,
        },
      },
      "sourceIndex": 3,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_4 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_4>,
          "source": Object {
            "end": Object {
              "column": 24,
              "line": 1,
            },
            "start": Object {
              "column": 21,
              "line": 1,
            },
          },
          "sourceIndex": 20,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "foo",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 24,
          "line": 1,
        },
        "start": Object {
          "column": 20,
          "line": 1,
        },
      },
      "sourceIndex": 19,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 24,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar > #bar 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 4,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 4,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar > * > #bar > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 8,
              "line": 1,
            },
          },
          "sourceIndex": 7,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(*) > #bar:semver(*) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "*",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(1 || 2) > #bar:semver(1 || 2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1||2",
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(1 || 2.0.0) > #bar:semver(1 || 2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1||2.0.0",
          "source": Object {
            "end": Object {
              "column": 23,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 23,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 23,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(1.0.0, :attr(engines, [node]), satisfies) > #bar:semver(1.0.0, :attr(engines, [node]), satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 53,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 53,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 53,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(1.4.0 || 2) > #bar:semver(1.4.0 || 2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1.4.0||2",
          "source": Object {
            "end": Object {
              "column": 23,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 23,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 23,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(1||2) > #bar:semver(1||2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1||2",
          "source": Object {
            "end": Object {
              "column": 17,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 17,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 17,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2 - 3) > #bar:semver(2 - 3) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2 - 3",
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 18,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2) > #bar:semver(2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2), #foo > #bar:semver(2), #foo 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_3>,
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 17,
              "line": 1,
            },
          },
          "sourceIndex": 16,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "foo",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 20,
          "line": 1,
        },
        "start": Object {
          "column": 16,
          "line": 1,
        },
      },
      "sourceIndex": 15,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 20,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2.0) > #bar:semver(2.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2.0",
          "source": Object {
            "end": Object {
              "column": 16,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 16,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 16,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2.0.0 - 3.0.0) > #bar:semver(2.0.0 - 3.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2.0.0 - 3.0.0",
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2.x) > #bar:semver(2.x) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2.x",
          "source": Object {
            "end": Object {
              "column": 16,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 16,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 16,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(2.x.x) > #bar:semver(2.x.x) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2.x.x",
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 18,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(<3.0.0) > #bar:semver(<3.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "<3.0.0",
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(=2.0.0) > #bar:semver(=2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "=2.0.0",
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(>1.5.0 <3.0.0) > #bar:semver(>1.5.0 <3.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": ">1.5.0 <3.0.0",
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(>=2.0.0) > #bar:semver(>=2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": ">=2.0.0",
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 20,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 20,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(^1.0.0, :attr(engines, [node]), intersects) > #bar:semver(^1.0.0, :attr(engines, [node]), intersects) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "intersects",
          "semverPosition": 0,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 55,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 55,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 55,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(^2.0.0) > #bar:semver(^2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "^2.0.0",
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(^2.0.0-beta.0) > #bar:semver(^2.0.0-beta.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "^2.0.0-beta.0",
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #bar:semver(~2.0.0) > #bar:semver(~2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "~2.0.0",
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries #ipsum > #ipsum 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "ipsum",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 6,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 6,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries * :root > * :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 2,
              "line": 1,
            },
            "start": Object {
              "column": 2,
              "line": 1,
            },
          },
          "sourceIndex": 1,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 3,
              "line": 1,
            },
          },
          "sourceIndex": 2,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 7,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 7,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries * > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 1,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 1,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries * > * > * > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 3,
              "line": 1,
            },
            "start": Object {
              "column": 3,
              "line": 1,
            },
          },
          "sourceIndex": 2,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries * > :root > * > :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 3,
              "line": 1,
            },
            "start": Object {
              "column": 3,
              "line": 1,
            },
          },
          "sourceIndex": 2,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries *:has(* > #bar) > *:has(* > #bar) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Universal {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 7,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 7,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 6,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Combinator {
                    "parent": <*ref_2>,
                    "raws": Object {
                      "spaces": Object {
                        "before": undefined,
                      },
                    },
                    "source": Object {
                      "end": Object {
                        "column": 9,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 9,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 8,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 14,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 11,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 10,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "bar",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 15,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 7,
                    "line": 1,
                  },
                },
                "sourceIndex": 6,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 15,
              "line": 1,
            },
            "start": Object {
              "column": 2,
              "line": 1,
            },
          },
          "sourceIndex": 1,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":has",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 15,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 15,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries *:has(> #bar) > *:has(> #bar) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Combinator {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 7,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 7,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 6,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 12,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 9,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 8,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "bar",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 13,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 7,
                    "line": 1,
                  },
                },
                "sourceIndex": 6,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 13,
              "line": 1,
            },
            "start": Object {
              "column": 2,
              "line": 1,
            },
          },
          "sourceIndex": 1,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":has",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 13,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 13,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries *:root > *:empty:not(*[name^=a], #b) > *:root > *:empty:not(*[name^=a], #b) 1`] = `
&ref_5 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 2,
              "line": 1,
            },
          },
          "sourceIndex": 1,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 8,
              "line": 1,
            },
          },
          "sourceIndex": 7,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 16,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":empty",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Universal {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 22,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 22,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 21,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Attribute {
                    "_attribute": "name",
                    "_constructed": true,
                    "_quoteMark": null,
                    "_value": "a",
                    "operator": "^=",
                    "parent": <*ref_2>,
                    "raws": Object {},
                    "source": Object {
                      "end": Object {
                        "column": 31,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 23,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 22,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "attribute",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 31,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 22,
                    "line": 1,
                  },
                },
                "sourceIndex": 21,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
              &ref_4 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_4>,
                    "source": Object {
                      "end": Object {
                        "column": 35,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 34,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 33,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "b",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 36,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 33,
                    "line": 1,
                  },
                },
                "sourceIndex": 32,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 36,
              "line": 1,
            },
            "start": Object {
              "column": 17,
              "line": 1,
            },
          },
          "sourceIndex": 16,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_5>,
      "source": Object {
        "end": Object {
          "column": 36,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 36,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .bundled > .bundled 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "bundled",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .bundled ~ * > .bundled ~ * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "bundled",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": "~",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .bundled ~ :not(.workspace) > .bundled ~ :not(.workspace) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "bundled",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": "~",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ClassName {
                    "_constructed": true,
                    "_value": "workspace",
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 26,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 17,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 16,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "class",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 27,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 17,
                    "line": 1,
                  },
                },
                "sourceIndex": 16,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 27,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 27,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 27,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .dev * > .dev * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "dev",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 5,
              "line": 1,
            },
          },
          "sourceIndex": 4,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 6,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 6,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .dev > .dev 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "dev",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 4,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 4,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .optional > .optional 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "optional",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .peer > .peer 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "peer",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .workspace > * > .workspace > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 14,
              "line": 1,
            },
          },
          "sourceIndex": 13,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .workspace > .workspace 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .workspace ~ * > .workspace ~ * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": "~",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 14,
              "line": 1,
            },
          },
          "sourceIndex": 13,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .workspace:has(* #lorem, ~ #b) > .workspace:has(* #lorem, ~ #b) 1`] = `
&ref_5 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Universal {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 16,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 16,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 15,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Combinator {
                    "parent": <*ref_2>,
                    "raws": Object {
                      "spaces": Object {},
                      "value": "",
                    },
                    "source": Object {
                      "end": Object {
                        "column": 17,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 17,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 16,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": " ",
                  },
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 23,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 18,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 17,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "lorem",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 23,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 16,
                    "line": 1,
                  },
                },
                "sourceIndex": 15,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
              &ref_4 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Combinator {
                    "parent": <*ref_4>,
                    "source": Object {
                      "end": Object {
                        "column": 26,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 26,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 25,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": "~",
                  },
                  ID {
                    "parent": <*ref_4>,
                    "source": Object {
                      "end": Object {
                        "column": 29,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 28,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 27,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "b",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 30,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 25,
                    "line": 1,
                  },
                },
                "sourceIndex": 24,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 30,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":has",
        },
      ],
      "parent": <*ref_5>,
      "source": Object {
        "end": Object {
          "column": 30,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 30,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries .workspace:has(> * > #lorem) > .workspace:has(> * > #lorem) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Combinator {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 16,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 16,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 15,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  Universal {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 18,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 18,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 17,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Combinator {
                    "parent": <*ref_2>,
                    "raws": Object {
                      "spaces": Object {
                        "before": undefined,
                      },
                    },
                    "source": Object {
                      "end": Object {
                        "column": 20,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 20,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 19,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 27,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 22,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 21,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "lorem",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 28,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 16,
                    "line": 1,
                  },
                },
                "sourceIndex": 15,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 28,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":has",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 28,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 28,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr([keywords=lorem]) > :attr([keywords=lorem]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "keywords",
            "operator": "=",
            "qualifiedAttribute": "keywords",
            "value": "lorem",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 23,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 23,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 23,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr([name=dasher i]) > :attr([name=dasher i]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "name",
            "insensitive": true,
            "operator": "=",
            "qualifiedAttribute": "name",
            "value": "dasher",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 22,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 22,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr([name=dasher]) > :attr([name=dasher]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "name",
            "operator": "=",
            "qualifiedAttribute": "name",
            "value": "dasher",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 20,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 20,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(arbitrary, [foo$=oo]) > :attr(arbitrary, [foo$=oo]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "foo",
            "operator": "$=",
            "qualifiedAttribute": "foo",
            "value": "oo",
          },
          "lookupProperties": Array [
            "arbitrary",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 27,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 27,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 27,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(arbitrary, [foo*=oo]) > :attr(arbitrary, [foo*=oo]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "foo",
            "operator": "*=",
            "qualifiedAttribute": "foo",
            "value": "oo",
          },
          "lookupProperties": Array [
            "arbitrary",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 27,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 27,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 27,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(arbitrary, [foo|=oo]) > :attr(arbitrary, [foo|=oo]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "foo",
            "operator": "|=",
            "qualifiedAttribute": "foo",
            "value": "oo",
          },
          "lookupProperties": Array [
            "arbitrary",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 27,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 27,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 27,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(arbitrary, foo, :attr(funding, [type=GH])) > :attr(arbitrary, foo, :attr(funding, [type=GH])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "type",
            "operator": "=",
            "qualifiedAttribute": "type",
            "value": "GH",
          },
          "lookupProperties": Array [
            "arbitrary",
            "foo",
            Symbol(arrayDelimiter),
            "funding",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 48,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 48,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 48,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(dependencies, :attr([bar="^1.0.0"])) > :attr(dependencies, :attr([bar="^1.0.0"])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "bar",
            "operator": "=",
            "qualifiedAttribute": "bar",
            "value": "^1.0.0",
          },
          "lookupProperties": Array [
            "dependencies",
            Symbol(arrayDelimiter),
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 42,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 42,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 42,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(dependencies, [bar="^1.0.0"]) > :attr(dependencies, [bar="^1.0.0"]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "bar",
            "operator": "=",
            "qualifiedAttribute": "bar",
            "value": "^1.0.0",
          },
          "lookupProperties": Array [
            "dependencies",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 35,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 35,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 35,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(devDependencies, [@scoped/package]) > :attr(devDependencies, [@scoped/package]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "@scoped/package",
            "operator": undefined,
            "qualifiedAttribute": "@scoped/package",
            "value": undefined,
          },
          "lookupProperties": Array [
            "devDependencies",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 42,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 42,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 42,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(funding, :attr([type=GitHub i])) > :attr(funding, :attr([type=GitHub i])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "type",
            "insensitive": true,
            "operator": "=",
            "qualifiedAttribute": "type",
            "value": "GitHub",
          },
          "lookupProperties": Array [
            "funding",
            Symbol(arrayDelimiter),
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 38,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 38,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 38,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :attr(funding, :attr([type=GitHub])) > :attr(funding, :attr([type=GitHub])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "type",
            "operator": "=",
            "qualifiedAttribute": "type",
            "value": "GitHub",
          },
          "lookupProperties": Array [
            "funding",
            Symbol(arrayDelimiter),
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 36,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":attr",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 36,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 36,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :empty > :empty 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":empty",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 6,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 6,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :extraneous > :extraneous 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 11,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":extraneous",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 11,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 11,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :invalid > :invalid 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":invalid",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :is(#a, #b) > * > :is(#a, #b) > * 1`] = `
&ref_5 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_4 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nestedNode": &ref_2 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_1 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_1>,
                    "source": Object {
                      "end": Object {
                        "column": 6,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 5,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 4,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "a",
                  },
                ],
                "parent": <*ref_2>,
                "source": Object {
                  "end": Object {
                    "column": 6,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 5,
                    "line": 1,
                  },
                },
                "sourceIndex": 4,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
              &ref_3 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_3>,
                    "source": Object {
                      "end": Object {
                        "column": 10,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 9,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 8,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "b",
                  },
                ],
                "parent": <*ref_2>,
                "source": Object {
                  "end": Object {
                    "column": 11,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 8,
                    "line": 1,
                  },
                },
                "sourceIndex": 7,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_4>,
          "source": Object {
            "end": Object {
              "column": 11,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":is",
        },
        Combinator {
          "parent": <*ref_4>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 13,
              "line": 1,
            },
            "start": Object {
              "column": 13,
              "line": 1,
            },
          },
          "sourceIndex": 12,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_4>,
          "source": Object {
            "end": Object {
              "column": 15,
              "line": 1,
            },
            "start": Object {
              "column": 15,
              "line": 1,
            },
          },
          "sourceIndex": 14,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_5>,
      "source": Object {
        "end": Object {
          "column": 15,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 15,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :is(*:semver(2.0.0), :semver(=2.0.0-beta.45)) > :is(*:semver(2.0.0), :semver(=2.0.0-beta.45)) 1`] = `
&ref_5 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_4 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nestedNode": &ref_2 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_1 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Universal {
                    "parent": <*ref_1>,
                    "source": Object {
                      "end": Object {
                        "column": 5,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 5,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 4,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Pseudo {
                    "attributeMatcher": Object {
                      "attribute": "version",
                      "insensitive": false,
                      "qualifiedAttribute": "version",
                    },
                    "lookupProperties": Array [],
                    "nodes": Array [],
                    "parent": <*ref_1>,
                    "semverValue": "2.0.0",
                    "source": Object {
                      "end": Object {
                        "column": 19,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 6,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 5,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "pseudo",
                    "value": ":semver",
                  },
                ],
                "parent": <*ref_2>,
                "source": Object {
                  "end": Object {
                    "column": 19,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 5,
                    "line": 1,
                  },
                },
                "sourceIndex": 4,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
              &ref_3 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Pseudo {
                    "attributeMatcher": Object {
                      "attribute": "version",
                      "insensitive": false,
                      "qualifiedAttribute": "version",
                    },
                    "lookupProperties": Array [],
                    "nodes": Array [],
                    "parent": <*ref_3>,
                    "semverValue": "=2.0.0-beta.45",
                    "source": Object {
                      "end": Object {
                        "column": 44,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 22,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 21,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "pseudo",
                    "value": ":semver",
                  },
                ],
                "parent": <*ref_2>,
                "source": Object {
                  "end": Object {
                    "column": 45,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 21,
                    "line": 1,
                  },
                },
                "sourceIndex": 20,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_4>,
          "source": Object {
            "end": Object {
              "column": 45,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":is",
        },
      ],
      "parent": <*ref_5>,
      "source": Object {
        "end": Object {
          "column": 45,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 45,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :link > :link 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":link",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :link > :link 2`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":link",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :missing > :missing 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":missing",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :not(#foo) > :not(#foo) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nestedNode": &ref_2 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_1 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_1>,
                    "source": Object {
                      "end": Object {
                        "column": 9,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 6,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 5,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "foo",
                  },
                ],
                "parent": <*ref_2>,
                "source": Object {
                  "end": Object {
                    "column": 10,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 6,
                    "line": 1,
                  },
                },
                "sourceIndex": 5,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_3>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :not(:not(:link)) > :not(:not(:link)) 1`] = `
&ref_6 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_5 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nestedNode": &ref_4 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_3 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Pseudo {
                    "nestedNode": &ref_2 Root {
                      "indexes": Object {},
                      "lastEach": 1,
                      "nodes": Array [
                        &ref_1 Selector {
                          "indexes": Object {},
                          "lastEach": 1,
                          "nodes": Array [
                            Pseudo {
                              "nodes": Array [],
                              "parent": <*ref_1>,
                              "source": Object {
                                "end": Object {
                                  "column": 15,
                                  "line": 1,
                                },
                                "start": Object {
                                  "column": 11,
                                  "line": 1,
                                },
                              },
                              "sourceIndex": 10,
                              "spaces": Object {
                                "after": "",
                                "before": "",
                              },
                              "type": "pseudo",
                              "value": ":link",
                            },
                          ],
                          "parent": <*ref_2>,
                          "source": Object {
                            "end": Object {
                              "column": 16,
                              "line": 1,
                            },
                            "start": Object {
                              "column": 11,
                              "line": 1,
                            },
                          },
                          "sourceIndex": 10,
                          "spaces": Object {
                            "after": "",
                            "before": "",
                          },
                          "type": "selector",
                        },
                      ],
                      "spaces": Object {
                        "after": "",
                        "before": "",
                      },
                      "type": "root",
                    },
                    "nodes": Array [],
                    "parent": <*ref_3>,
                    "source": Object {
                      "end": Object {
                        "column": 16,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 6,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 5,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "pseudo",
                    "value": ":not",
                  },
                ],
                "parent": <*ref_4>,
                "source": Object {
                  "end": Object {
                    "column": 17,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 6,
                    "line": 1,
                  },
                },
                "sourceIndex": 5,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_5>,
          "source": Object {
            "end": Object {
              "column": 17,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_6>,
      "source": Object {
        "end": Object {
          "column": 17,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 17,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :outdated > :outdated 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":outdated",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :outdated(any) > :outdated(any) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "outdatedKind": "any",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":outdated",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path() > :path() 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "",
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 7,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 7,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(*) > :path(*) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "*",
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(**/bar) > :path(**/bar) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "**/bar",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(./node_modules/bar) > :path(./node_modules/bar) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "./node_modules/bar",
          "source": Object {
            "end": Object {
              "column": 27,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 27,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 27,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(node_modules/*) > :path(node_modules/*) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "node_modules/*",
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 22,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 22,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(node_modules/bar) > :path(node_modules/bar) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "node_modules/bar",
          "source": Object {
            "end": Object {
              "column": 24,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 24,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 24,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :path(node_modules/foo/node_modules/bar) > :path(node_modules/foo/node_modules/bar) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "pathValue": "node_modules/foo/node_modules/bar",
          "source": Object {
            "end": Object {
              "column": 43,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":path",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 43,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 43,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :private > :private 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":private",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root #bar > * > :root #bar > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 14,
              "line": 1,
            },
          },
          "sourceIndex": 13,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root #bar:semver(1) > * > :root #bar:semver(1) > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1",
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 22,
              "line": 1,
            },
          },
          "sourceIndex": 21,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 24,
              "line": 1,
            },
            "start": Object {
              "column": 24,
              "line": 1,
            },
          },
          "sourceIndex": 23,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 24,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 24,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root #bar:semver(1) ~ * > :root #bar:semver(1) ~ * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {},
            "value": "",
          },
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 6,
              "line": 1,
            },
          },
          "sourceIndex": 5,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": " ",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1",
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 22,
              "line": 1,
            },
          },
          "sourceIndex": 21,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": "~",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 24,
              "line": 1,
            },
            "start": Object {
              "column": 24,
              "line": 1,
            },
          },
          "sourceIndex": 23,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 24,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 24,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > #bar > * > :root > #bar > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 14,
              "line": 1,
            },
          },
          "sourceIndex": 13,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 16,
              "line": 1,
            },
            "start": Object {
              "column": 16,
              "line": 1,
            },
          },
          "sourceIndex": 15,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 16,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 16,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > #bar > :root > #bar 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "bar",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > * > :root > * 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > *.workspace > :root > *.workspace 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > *:has(* > #bar) > :root > *:has(* > #bar) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  Universal {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 15,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 15,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 14,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "universal",
                    "value": "*",
                  },
                  Combinator {
                    "parent": <*ref_2>,
                    "raws": Object {
                      "spaces": Object {
                        "before": undefined,
                      },
                    },
                    "source": Object {
                      "end": Object {
                        "column": 17,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 17,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 16,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 22,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 19,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 18,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "bar",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 23,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 15,
                    "line": 1,
                  },
                },
                "sourceIndex": 14,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 23,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":has",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 23,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 23,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > *:is(.prod:not(:empty), .dev > [name=bar]) > * > :root > *:is(.prod:not(:empty), .dev > [name=bar]) > * 1`] = `
&ref_7 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nestedNode": &ref_5 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ClassName {
                    "_constructed": true,
                    "_value": "prod",
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 18,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 14,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 13,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "class",
                  },
                  Pseudo {
                    "nestedNode": &ref_4 Root {
                      "indexes": Object {},
                      "lastEach": 1,
                      "nodes": Array [
                        &ref_3 Selector {
                          "indexes": Object {},
                          "lastEach": 1,
                          "nodes": Array [
                            Pseudo {
                              "nodes": Array [],
                              "parent": <*ref_3>,
                              "source": Object {
                                "end": Object {
                                  "column": 29,
                                  "line": 1,
                                },
                                "start": Object {
                                  "column": 24,
                                  "line": 1,
                                },
                              },
                              "sourceIndex": 23,
                              "spaces": Object {
                                "after": "",
                                "before": "",
                              },
                              "type": "pseudo",
                              "value": ":empty",
                            },
                          ],
                          "parent": <*ref_4>,
                          "source": Object {
                            "end": Object {
                              "column": 30,
                              "line": 1,
                            },
                            "start": Object {
                              "column": 24,
                              "line": 1,
                            },
                          },
                          "sourceIndex": 23,
                          "spaces": Object {
                            "after": "",
                            "before": "",
                          },
                          "type": "selector",
                        },
                      ],
                      "spaces": Object {
                        "after": "",
                        "before": "",
                      },
                      "type": "root",
                    },
                    "nodes": Array [],
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 30,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 19,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 18,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "pseudo",
                    "value": ":not",
                  },
                ],
                "parent": <*ref_5>,
                "source": Object {
                  "end": Object {
                    "column": 30,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 14,
                    "line": 1,
                  },
                },
                "sourceIndex": 13,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
              &ref_6 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ClassName {
                    "_constructed": true,
                    "_value": "dev",
                    "parent": <*ref_6>,
                    "source": Object {
                      "end": Object {
                        "column": 36,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 33,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 32,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "class",
                  },
                  Combinator {
                    "parent": <*ref_6>,
                    "raws": Object {
                      "spaces": Object {
                        "before": undefined,
                      },
                    },
                    "source": Object {
                      "end": Object {
                        "column": 38,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 38,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 37,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "combinator",
                    "value": ">",
                  },
                  Attribute {
                    "_attribute": "name",
                    "_constructed": true,
                    "_quoteMark": null,
                    "_value": "bar",
                    "operator": "=",
                    "parent": <*ref_6>,
                    "raws": Object {},
                    "source": Object {
                      "end": Object {
                        "column": 49,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 40,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 39,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "attribute",
                  },
                ],
                "parent": <*ref_5>,
                "source": Object {
                  "end": Object {
                    "column": 50,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 32,
                    "line": 1,
                  },
                },
                "sourceIndex": 31,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 50,
              "line": 1,
            },
            "start": Object {
              "column": 10,
              "line": 1,
            },
          },
          "sourceIndex": 9,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":is",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 52,
              "line": 1,
            },
            "start": Object {
              "column": 52,
              "line": 1,
            },
          },
          "sourceIndex": 51,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 54,
              "line": 1,
            },
            "start": Object {
              "column": 54,
              "line": 1,
            },
          },
          "sourceIndex": 53,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
      ],
      "parent": <*ref_7>,
      "source": Object {
        "end": Object {
          "column": 54,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 54,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace > *:not(#bar) > :root > .workspace > *:not(#bar) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 20,
              "line": 1,
            },
            "start": Object {
              "column": 20,
              "line": 1,
            },
          },
          "sourceIndex": 19,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Universal {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 22,
              "line": 1,
            },
          },
          "sourceIndex": 21,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 31,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 28,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 27,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "bar",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 32,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 28,
                    "line": 1,
                  },
                },
                "sourceIndex": 27,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 32,
              "line": 1,
            },
            "start": Object {
              "column": 23,
              "line": 1,
            },
          },
          "sourceIndex": 22,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 32,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 32,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace > :root > .workspace 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 18,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace:not(#b) > :root > .workspace:not(#b) 1`] = `
&ref_4 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Pseudo {
          "nestedNode": &ref_3 Root {
            "indexes": Object {},
            "lastEach": 1,
            "nodes": Array [
              &ref_2 Selector {
                "indexes": Object {},
                "lastEach": 1,
                "nodes": Array [
                  ID {
                    "parent": <*ref_2>,
                    "source": Object {
                      "end": Object {
                        "column": 25,
                        "line": 1,
                      },
                      "start": Object {
                        "column": 24,
                        "line": 1,
                      },
                    },
                    "sourceIndex": 23,
                    "spaces": Object {
                      "after": "",
                      "before": "",
                    },
                    "type": "id",
                    "value": "b",
                  },
                ],
                "parent": <*ref_3>,
                "source": Object {
                  "end": Object {
                    "column": 26,
                    "line": 1,
                  },
                  "start": Object {
                    "column": 24,
                    "line": 1,
                  },
                },
                "sourceIndex": 23,
                "spaces": Object {
                  "after": "",
                  "before": "",
                },
                "type": "selector",
              },
            ],
            "spaces": Object {
              "after": "",
              "before": "",
            },
            "type": "root",
          },
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 19,
              "line": 1,
            },
          },
          "sourceIndex": 18,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":not",
        },
      ],
      "parent": <*ref_4>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace[name=a] > :root > .workspace[name=a] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 19,
              "line": 1,
            },
          },
          "sourceIndex": 18,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace[name=a][version=1.0.0] > :root > .workspace[name=a][version=1.0.0] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 19,
              "line": 1,
            },
          },
          "sourceIndex": 18,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
        Attribute {
          "_attribute": "version",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "1.0.0",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 41,
              "line": 1,
            },
            "start": Object {
              "column": 27,
              "line": 1,
            },
          },
          "sourceIndex": 26,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 41,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 41,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > .workspace[version=1.0.0] > :root > .workspace[version=1.0.0] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ClassName {
          "_constructed": true,
          "_value": "workspace",
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "class",
        },
        Attribute {
          "_attribute": "version",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "1.0.0",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 33,
              "line": 1,
            },
            "start": Object {
              "column": 19,
              "line": 1,
            },
          },
          "sourceIndex": 18,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 33,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 33,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > :empty > :root > :empty 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":empty",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > :root > :root > :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 13,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 13,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 13,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root > [name=bar] > :root > [name=bar] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
        Combinator {
          "parent": <*ref_1>,
          "raws": Object {
            "spaces": Object {
              "before": undefined,
            },
          },
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 7,
              "line": 1,
            },
          },
          "sourceIndex": 6,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "bar",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 9,
              "line": 1,
            },
          },
          "sourceIndex": 8,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 18,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :root, :root > :root, :root 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_3>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 8,
              "line": 1,
            },
          },
          "sourceIndex": 7,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":root",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 7,
          "line": 1,
        },
      },
      "sourceIndex": 6,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :scope > :scope 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":scope",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 6,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 6,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver() > :semver() 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "",
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(*) > :semver(*) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "*",
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, :attr(engines, [node])) > :semver(1.0.0, :attr(engines, [node])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 38,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 38,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 38,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, :attr(engines, [node]), "satisfies") > :semver(1.0.0, :attr(engines, [node]), "satisfies") 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 51,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 51,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 51,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, :attr(engines, [node]), 'satisfies') > :semver(1.0.0, :attr(engines, [node]), 'satisfies') 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 51,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 51,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 51,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, :attr(engines, [node]), satisfies) > :semver(1.0.0, :attr(engines, [node]), satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 49,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 49,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 49,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, [version]) > :semver(1.0.0, [version]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 25,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 25,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 25,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.0.0, [version], satisfies) > :semver(1.0.0, [version], satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 36,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 36,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 36,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(1.4.0 || 2.2.2) > :semver(1.4.0 || 2.2.2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "1.4.0||2.2.2",
          "source": Object {
            "end": Object {
              "column": 23,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 23,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 23,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(2 - 3) > :semver(2 - 3) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2 - 3",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(2.0.0) > :semver(2.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "2.0.0",
          "source": Object {
            "end": Object {
              "column": 14,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 14,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 14,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), 1.0.0) > :semver(:attr(engines, [node]), 1.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 38,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 38,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 38,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), 1.0.0, "satisfies") > :semver(:attr(engines, [node]), 1.0.0, "satisfies") 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 51,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 51,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 51,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), 1.0.0, 'satisfies') > :semver(:attr(engines, [node]), 1.0.0, 'satisfies') 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 51,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 51,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 51,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), 1.0.0, satisfies) > :semver(:attr(engines, [node]), 1.0.0, satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 49,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 49,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 49,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), ^1.0.0) > :semver(:attr(engines, [node]), ^1.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 1,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 39,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 39,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 39,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(:attr(engines, [node]), satisfies) > :semver(:attr(engines, [node]), satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 1,
          "semverValue": "satisfies",
          "source": Object {
            "end": Object {
              "column": 42,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 42,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 42,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(=1.4.0) > :semver(=1.4.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "=1.4.0",
          "source": Object {
            "end": Object {
              "column": 15,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 15,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 15,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(>=2) > :semver(>=2) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": ">=2",
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver([version], 1.0.0) > :semver([version], 1.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 25,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 25,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 25,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver([version], 1.0.0, satisfies) > :semver([version], 1.0.0, satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 1,
          "semverValue": "1.0.0",
          "source": Object {
            "end": Object {
              "column": 36,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 36,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 36,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver([version], ^1.0.0) > :semver([version], ^1.0.0) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 1,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver([version], ^1.0.0, satisfies) > :semver([version], ^1.0.0, satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 1,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 37,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 37,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 37,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(^1.0.0, :attr(engines, [node])) > :semver(^1.0.0, :attr(engines, [node])) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 0,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 39,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 39,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 39,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(^1.0.0, :attr(engines, [node]), satisfies) > :semver(^1.0.0, :attr(engines, [node]), satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "node",
            "operator": undefined,
            "qualifiedAttribute": "node",
            "value": undefined,
          },
          "lookupProperties": Array [
            Symbol(arrayDelimiter),
            "engines",
          ],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 50,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 50,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 50,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(^1.0.0, [version]) > :semver(^1.0.0, [version]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverPosition": 0,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 26,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 26,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 26,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(^1.0.0, [version], satisfies) > :semver(^1.0.0, [version], satisfies) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "operator": undefined,
            "qualifiedAttribute": "version",
            "value": undefined,
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverFunc": "satisfies",
          "semverPosition": 0,
          "semverValue": "^1.0.0",
          "source": Object {
            "end": Object {
              "column": 37,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 37,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 37,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :semver(~2.0.x) > :semver(~2.0.x) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "attributeMatcher": Object {
            "attribute": "version",
            "insensitive": false,
            "qualifiedAttribute": "version",
          },
          "lookupProperties": Array [],
          "nodes": Array [],
          "parent": <*ref_1>,
          "semverValue": "~2.0.x",
          "source": Object {
            "end": Object {
              "column": 15,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":semver",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 15,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 15,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :type() > :type() 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 7,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "typeValue": undefined,
          "value": ":type",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 7,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 7,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :type(alias) > :type(alias) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "typeValue": "alias",
          "value": ":type",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :type(git) > :type(git) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "typeValue": "git",
          "value": ":type",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :type(range) > :type(range) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "typeValue": "range",
          "value": ":type",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :type(tag) > :type(tag) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "typeValue": "tag",
          "value": ":type",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln > :vuln 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 5,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 5,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 5,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln([cwe=400],[severity=medium]) > :vuln([cwe=400],[severity=medium]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 34,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
          "vulns": Array [
            Object {
              "cwe": Array [
                "400",
              ],
            },
            Object {
              "severity": Array [
                "medium",
              ],
            },
          ],
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 34,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 34,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln([cwe]) > :vuln([cwe]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
          "vulns": Array [
            Object {
              "cwe": Array [
                "*",
              ],
            },
          ],
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln([severity=high]) > :vuln([severity=high]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
          "vulns": Array [
            Object {
              "severity": Array [
                "high",
              ],
            },
          ],
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 22,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 22,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln([severity=high],[severity=medium]) > :vuln([severity=high],[severity=medium]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 40,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
          "vulns": Array [
            Object {
              "severity": Array [
                "high",
              ],
            },
            Object {
              "severity": Array [
                "medium",
              ],
            },
          ],
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 40,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 40,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries :vuln([severity=high][severity=medium]) > :vuln([severity=high][severity=medium]) 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Pseudo {
          "nodes": Array [],
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 39,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "pseudo",
          "value": ":vuln",
          "vulns": Array [
            Object {
              "severity": Array [
                "high",
                "medium",
              ],
            },
          ],
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 39,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 39,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries > #a > > #a 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Combinator {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 1,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "combinator",
          "value": ">",
        },
        ID {
          "parent": <*ref_1>,
          "source": Object {
            "end": Object {
              "column": 4,
              "line": 1,
            },
            "start": Object {
              "column": 3,
              "line": 1,
            },
          },
          "sourceIndex": 2,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "id",
          "value": "a",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 4,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 4,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [arbitrary^=foo] > [arbitrary^=foo] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "arbitrary",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "foo",
          "operator": "^=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 16,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 16,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 16,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [description] > [description] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "description",
          "_constructed": true,
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 13,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 13,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 13,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [description~=best] > [description~=best] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "description",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "best",
          "operator": "~=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [description~=ever] > [description~=ever] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "description",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "ever",
          "operator": "~=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name$=oo] > [name$=oo] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "oo",
          "operator": "$=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 10,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 10,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 10,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name*=a] > [name*=a] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "*=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name=@npmcli/abbrev] > [name=@npmcli/abbrev] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "@npmcli/abbrev",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {
            "value": "@npmcli\\\\/abbrev",
          },
          "source": Object {
            "end": Object {
              "column": 22,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 22,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 22,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name=a] > [name=a] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 8,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name=a], *[name=b] > [name=a], *[name=b] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Universal {
          "parent": <*ref_3>,
          "source": Object {
            "end": Object {
              "column": 11,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "universal",
          "value": "*",
        },
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "b",
          "operator": "=",
          "parent": <*ref_3>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 19,
              "line": 1,
            },
            "start": Object {
              "column": 12,
              "line": 1,
            },
          },
          "sourceIndex": 11,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 19,
          "line": 1,
        },
        "start": Object {
          "column": 10,
          "line": 1,
        },
      },
      "sourceIndex": 9,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 19,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name=a], [name=b] > [name=a], [name=b] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 8,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 8,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
    &ref_3 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "b",
          "operator": "=",
          "parent": <*ref_3>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 18,
              "line": 1,
            },
            "start": Object {
              "column": 11,
              "line": 1,
            },
          },
          "sourceIndex": 10,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 18,
          "line": 1,
        },
        "start": Object {
          "column": 10,
          "line": 1,
        },
      },
      "sourceIndex": 9,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 18,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name] > [name] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 6,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 6,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 6,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name^=a] > [name^=a] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "a",
          "operator": "^=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 9,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 9,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 9,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`

exports[`test/index.js TAP queries [name|=dash] > [name|=dash] 1`] = `
&ref_2 Root {
  "_error": Function (message, errorOptions),
  "indexes": Object {},
  "lastEach": 1,
  "nodes": Array [
    &ref_1 Selector {
      "indexes": Object {},
      "lastEach": 1,
      "nodes": Array [
        Attribute {
          "_attribute": "name",
          "_constructed": true,
          "_quoteMark": null,
          "_value": "dash",
          "operator": "|=",
          "parent": <*ref_1>,
          "raws": Object {},
          "source": Object {
            "end": Object {
              "column": 12,
              "line": 1,
            },
            "start": Object {
              "column": 1,
              "line": 1,
            },
          },
          "sourceIndex": 0,
          "spaces": Object {
            "after": "",
            "before": "",
          },
          "type": "attribute",
        },
      ],
      "parent": <*ref_2>,
      "source": Object {
        "end": Object {
          "column": 12,
          "line": 1,
        },
        "start": Object {
          "column": 1,
          "line": 1,
        },
      },
      "sourceIndex": 0,
      "spaces": Object {
        "after": "",
        "before": "",
      },
      "type": "selector",
    },
  ],
  "source": Object {
    "end": Object {
      "column": 12,
      "line": 1,
    },
    "start": Object {
      "column": 1,
      "line": 1,
    },
  },
  "spaces": Object {
    "after": "",
    "before": "",
  },
  "type": "root",
}
`
