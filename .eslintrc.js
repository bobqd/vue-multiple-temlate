module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        /*
        0 或’off’：  关闭规则。
        1 或’warn’： 打开规则，并且作为一个警告，字体颜色为黄色（并不会导致检查不通过）。
        2 或’error’：打开规则，并且作为一个错误 ，色体颜色为红色(退出码为1，检查不通过)。
        */
        "no-alert": process.env.NODE_ENV === 'production' ? 'error' : 'off',//禁止使用alert confirm prompt
        "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
        "no-class-assign": 2,//禁止给类赋值
        "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',//禁止使用console
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',//禁止使用debugger
        "no-delete-var": 2,//不能对var声明的变量使用delete操作符
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2,//函数参数不能重复
        "no-duplicate-case": 2,//switch中的case标签不能重复
        "no-empty": 2,//块语句中的内容不能为空
        "no-eq-null": 2,//禁止对null使用==或!=运算符
        "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
        "no-extra-parens": 2,//禁止非必要的括号
        "no-extra-semi": 2,//禁止多余的冒号
        "no-fallthrough": 1,//禁止switch穿透
        "no-func-assign": 2,//禁止重复的函数声明
        "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
        "no-lone-blocks": 2,//禁止不必要的嵌套块
        "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
        "no-multi-spaces": 1,//不能用多余的空格
        "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
        "no-new": 1,//禁止在使用new构造一个实例后不赋值
        "no-new-func": 1,//禁止使用new Function
        "no-new-object": 2,//禁止使用new Object()
        "no-new-require": 2,//禁止使用new require
        "no-param-reassign": 2,//禁止给参数重新赋值
        "no-redeclare": 2,//禁止重复声明变量
        "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-return-assign": 1,//return 语句中不能有赋值表达式
        "no-self-compare": 2,//不能比较自身
        "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
        "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
        "no-trailing-spaces": 1,//一行结束后面不要有空格
        "no-undef": 1,//不能有未定义的变量
        "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
        "no-unreachable": 2,//不能有无法执行的代码
        "no-unused-expressions": 2,//禁止无用的表达式
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
        "no-use-before-define": 2,//未定义前不能使用
        "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
        "callback-return": 1,//避免多次调用回调什么的
        "camelcase": 2,//强制驼峰法命名
        "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
        "comma-spacing": 0,//逗号前后的空格
        "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
        "consistent-this": [2, "that"],//this别名
        "curly": [2, "all"],//必须使用 if(){} 中的{}
        "default-case": 2,//switch语句最后必须有default
        "eqeqeq": 2,//必须使用全等
        "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "new-parens": 2,//new时必须加小括号
        "newline-after-var": 2,//变量声明后是否需要空一行
        "quotes": [1, "single"],//引号类型 `` "" ''
        "quote-props":[0, "always"],//对象字面量中的属性名是否强制双引号
        "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
        "space-in-parens": [0, "never"],//小括号里面要不要有空格
        "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
        "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
        "valid-typeof": 2,//必须使用合法的typeof的值
        "vars-on-top": 2,//var必须放在作用域顶部
    }
};