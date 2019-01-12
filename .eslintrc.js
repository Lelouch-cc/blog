module.exports = {
	"parser": "babel-eslint",
	"extends": "airbnb",
	"plugins": [
		"react"
	],
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"rules": {
		"no-return-assign": 0,
		// 禁止使用 console
		"no-console": 1,
		// 禁止使用 debugger
		"no-debugger": 1,
		// 禁止多余的冒号
		"no-extra-semi": 2,
		// 禁止在条件中使用常量表达式 if(true) if(1)
		"no-constant-condition": 2,
		// 禁止不必要的bool转换
		"no-extra-boolean-cast": 2,
		// 禁止比较时使用 NaN，只能用 isNaN()
		"use-isnan": 2,
		// 变量初始化时不能直接给它赋值为 undefined
		"no-undef-init": 2,
		// 强制驼峰法命名
		"camelcase": 2,
		// 禁止混用 tab 和空格
		"no-mixed-spaces-and-tabs": 2,
		// 禁止修改 const 声明的变量
		"no-const-assign":2,
		// 禁止重复的函数声明
		"no-func-assign": 2,
		// 如果 if 语句里面有 return, 后面不能跟 else 语句
		"no-else-return": 2,
		// 不能调用内置的全局对象，比如Math() JSON()
		"no-obj-calls": 2,
		// 必须使用合法的typeof的值
		"valid-typeof": 2,
		// 禁止出现未使用过的变量
		"no-unused-vars": 0,
		//引号类型 `` "" ''
		"quotes": 0,
		// 禁止函数在定义前使用
		"no-use-before-define": 0,
		// 大括号内是否允许不必要的空格
		"object-curly-spacing": 1,
		// 禁止或强制在代码块中开括号前和闭括号后有空格
		"block-spacing": 2,
		// 要求或禁止使用分号代替 ASI
		"semi": [2],
		// 禁止不必要的分号
		"no-extra-semi": 2,
		// 强制在关键字前后使用一致的空格
		"keyword-spacing": 2,
		// 要求或禁止末尾逗号
		"comma-dangle": 2,
		// 强制数组方括号中使用一致的空格
		"array-bracket-spacing": 2,
		// 强制在 function的左括号之前使用一致的空格
		"space-before-function-paren": 2,
		// 禁止不必要的 .bind() 调用
		"no-extra-bind": 0,
		// 要求使用 let 或 const 而不是 var
		"no-var": "error",
		// 强制箭头函数的箭头前后使用一致的空格
		"arrow-spacing": ["error", { "before": true, "after": true }],
		// 要求箭头函数体使用大括号
		// "arrow-body-style": ["error", "as-needed"],
		// 禁止出现空函数
		"no-empty-function": ["error", { "allow": ["arrowFunctions", "constructors"] }],
		// 禁止使用已废弃的API
		"react/no-deprecated": "error",
		// 禁止在 componentDidMount 里面使用 setState
		"react/no-did-mount-set-state": 0,
		// 禁止在 componentDidUpdate 里面使用 setState
		"react/no-did-update-set-state": "error",
		// 出现 jsx 的地方必须 import React
		"react/react-in-jsx-scope": "error",
		// 定义了的 jsx element 必须使用
		"react/jsx-uses-vars": [2],
		// jsx 文件必须 import React
		"react/jsx-uses-react": [2],
		// 支持 .js 文件
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		// 禁止直接修改 this.state
    "react/no-direct-mutation-state": "error",
    // 禁止使用一元操作符 ++ 和 --
    "no-plusplus": 0,
		"react/destructuring-assignment": [0, "always"],
		"react/prefer-stateless-function": 0,
    "react/no-access-state-in-setstate": 0,
    "react/forbid-prop-types": 0,
		"react/jsx-no-target-blank": 0,
		"react/prop-types": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"class-methods-use-this": 0,
		"consistent-return": 0,
		"jsx-a11y/media-has-caption": 0,
		"import/no-dynamic-require": 0,
		"prefer-spread": 0,
		"react/no-array-index-key": 0,
		"arrow-body-style": 0,
		"no-restricted-globals": 0,
		"prefer-destructuring": 0
	}
}