const alfy = require('alfy');

var input = alfy.input;

var arr = [];

arr = input.split(",");

(function () {
    switch (arr[1]) {
        case "s":
            arr[1] = "string";
            break;
        case "n":
            arr[1] = "number";
            break;
        case "l":
            arr[1] = "Long";
            break;
        case "b":
            arr[1] = "boolean";
            break;
        case "a":
            arr[1] = "Array<any>";
            break;
    }
    alfy.output(
        [
            {
                title: `字段名 字段类型 字段注释`,
                subtitle: `类型 s->string n->number l->long b->boolean a->Array`,
                arg:
                    `
                /**
                * ${arr[2]}
                */
                protected _${arr[0]}: ${arr[1]};
                 /**
                * ${arr[2]}
                */
                public get ${arr[0]}(): ${arr[1]} {
                    return this._${arr[0]};
                }
                /**
                * ${arr[2]}
                */
                public set ${arr[0]}(value: ${arr[1]}) {
                    this._${arr[0]} = value;
                }`,
            }
        ]
    );
})();