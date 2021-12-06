"use strict";
cc._RF.push(module, '27fe1Xk7c5Avbn2wbzcc5FU', 'NewScript');
// Script/NewScript.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        tooltip: cc.Label,
        noti: cc.RichText,
        btnSignUp: cc.Button,
        userName: null
        // _fullName,
    },

    onLoad: function onLoad() {
        this.tooltip.node.active = false;
        this.noti.node.active = false;
        this.btnSignUp.interactable = false;
    },
    editbegan: function editbegan() {
        // if(this.node.getComponent(cc.EditBox).string.length == 0){
        // this.tooltip.string = "Input PASSWORD here"
        // this.tooltip.node.active = true;
        // }
    },
    userNameCheck: function userNameCheck() {
        this.userName = this.node.getComponent(cc.EditBox).string;
        if (this.userName.length >= 6) {
            return true;
        } else {
            this.tooltip.node.active = true;
            this.tooltip.string = "User name must have at least 6 letters";
        }
    },
    passwordCheck: function passwordCheck() {
        if (this.node.getComponent(cc.EditBox).string.match(/[0-9]/gm) && this.node.getComponent(cc.EditBox).string.match(/[A-Z]/gm)) {
            this.tooltip.node.active = false;
            return true;
        } else {
            this.tooltip.node.active = true;
            this.tooltip.string = "Passwords must contain at least one uppercase letters and one numbers.";
        }
    },
    sigUpBtn: function sigUpBtn() {
        if (this.userNameCheck() && this.passwordCheck()) {
            this.btnSignUp.interactable = true;
            this.noti.node.active = true;
        }
    }
});

cc._RF.pop();