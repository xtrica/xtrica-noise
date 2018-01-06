/*
 * xtrica-noise v1.0.1515210952 (https://xtrica.com)
 * Copyright 2017-2018 (or 2150?) Xtrica
 * Licensed under MIT
 */
"use strict";export default function(){this.noises={};this.play=function(key,volume=-1){let vm=this;return new Promise((resolve,reject)=>{key=key.toLowerCase();if(vm.noises.hasOwnProperty(key)&&vm.noises[key][2]===!0){try{vm.noises[key][0].addEventListener("ended",function handler(){vm.noises[key][0].currentTime=0;vm.noises[key][0].removeEventListener("ended",handler);resolve()});vm.noises[key][0].volume=(volume>-1)?(Math.abs(parseInt(volume))/100):vm.noises[key][1];vm.noises[key][0].play()}catch(error){resolve()}}else{resolve()}})};this.add=function(key,audioObject,defaultVolume=100){let vm=this;key=key.toLowerCase();vm.noises[key]=[audioObject,(Math.abs(parseInt(defaultVolume))/100),!1];vm.noises[key][0].addEventListener("canplaythrough",()=>{vm.noises[key][2]=!0});vm.noises[key][0].addEventListener("unhandledrejection",(error)=>{throw error})}}