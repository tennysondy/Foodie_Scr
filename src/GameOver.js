var gameOverLayer = cc.Layer.extend({
	background:null,
	gameRestart:null,
	gameShare:null,

	ctor:function () {
//		//////////////////////////////
//		// 1. super init first
		this._super();

		var size = cc.winSize;

		this.background = new cc.Sprite(res.GameOver_jgp);
		// this.boss.setColor(cc.color(0,255,0));
		this.addChild(this.background, 1); // 在gameLayer层上加载这个精灵
		this.background.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点
		this.background.setPosition(size.width/2, size.height/2);// 设置位置

		this.gameRestart = new cc.LabelTTF("重新开始", "Helvetica", 30);		
		this.gameShare = new cc.LabelTTF("分享到微信", "Helvetica",30);		
		//创建菜单项（MenuItem）    
		var restartMenuItem = new cc.MenuItemLabel(this.gameRestart, function () {
			var scene = new playScene();  
			//var tranScene= new cc.TransitionMoveInL(0.5,scene);  
			//cc.Director.getInstance().replaceScene(tranScene);
			cc.director.runScene(scene);
		}, this);
		restartMenuItem.setColor(cc.color(255,255,255));

		var shareMenuItem = new cc.MenuItemLabel(this.gameShare, function () { 

		}, this);
		shareMenuItem.setColor(cc.color(255,255,255));
		//创建游戏菜单（Menu）  
		var menu= new cc.Menu(restartMenuItem, shareMenuItem);
		//menu.setColor(cc.color(255,0,0));
		menu.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点 
		menu.setPosition(size.width/2, size.height/3);// 设置位置

		restartMenuItem.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点 
		restartMenuItem.setPosition(-80, 30);// 设置位置
		shareMenuItem.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点 
		shareMenuItem.setPosition(80, 30);// 设置位置
		this.addChild(menu, 2);
	}

});

var gameOverScene = cc.Scene.extend({
	overLayer:null,
	// 构造函数
	ctor: function () {
		this._super();
	},
	onEnter:function () {
		this._super();
		this.overLayer = new gameOverLayer();
		this.addChild(this.overLayer);
	}
});