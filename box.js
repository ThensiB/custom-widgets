{
	"id": "com.demo.gauge",
	"version": "1.0.0",
	"name": "Demo Gauge",
	"description": "A gauge demo",
	"newInstancePrefix": "Gauge",
	"icon": "https://example.demo/box/icon.png",
	"vendor": "Demo",
	"eula": "EULA",
	"license": "1.0",
	"webcomponents": [
		{
			"kind": "main",
			"tag": "com-demo-gauge",
			"url": "https://example.demo/box/box.js",
			"integrity": "",
			"ignoreIntegrity": true
		},
		{
			"kind": "styling",
			"tag": "com-demo-gauge-sps",
			"url": "https://example.demo/box/box_sps.js",
			"integrity": "",
			"ignoreIntegrity": true
		},
		{
			"kind": "builder",
			"tag": "com-demo-box-bps",
			"url": "https://example.demo/box/box_bps.js",
			"integrity": "",
			"ignoreIntegrity": true
		}
	],
	"properties": {
		"value": {
			"type": "number",
			"description": "Gauge value",
			"default": "0"
		},
		"info": {
			"type": "string",
			"description": "Gauge info",
			"default": ""
		},
		"color": {
			"type": "string",
			"description": "Text Color info",
			"default": "#3498db"
		},
		"width": {
			"type": "integer",
			"default": 100
		},
		"height": {
			"type": "integer",
			"default": 100
		}
	},
	"methods": {
		"setValue": {
			"description": "Sets the Gauge value.",
			"parameters": [
				{
					"name": "newValue",
					"type": "number",
					"description": "Gauge value"
				},
				{
					"name": "newInfo",
					"type": "string",
					"description": "Gauge info"
				},
				{
					"name": "newColor",
					"type": "string",
					"description": "Text Color info"
				}
			],
			"body": "this.value = newValue; this.info = newInfo; this.color = newColor;"
		},
		"getValue": {
			"returnType": "number",
			"description": "Returns the Gauge value.",
			"body": "return this.value;"
		}
	},
	"events": {
		"onClick": {
			"description": "Called when the user clicks the Box."
		}
	}
}

 