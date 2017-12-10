/*
 * xtrica-noise v1.0.1512929304 (https://xtrica.com)
 * Copyright 2017 (or 2150?) Xtrica
 * Licensed under MIT
 */
export default function(){this.noises={}
this.add=function(key,audioObject,defaultVolume=100){this.noises[key.toLowerCase()]=[audioObject,(Math.abs(parseInt(defaultVolume))/100)]}
this.play=function(key,volume=-1){let vm=this
return new Promise(function(resolve,reject){key=key.toLowerCase()
if(vm.noises.hasOwnProperty(key)){vm.noises[key][0].addEventListener('ended',function handler(){vm.noises[key][0].currentTime=0
vm.noises[key][0].removeEventListener('ended',handler)
resolve()})
vm.noises[key][0].volume=(volume>-1)?(Math.abs(parseInt(volume))/100):vm.noises[key][1]
vm.noises[key][0].play()}else{reject()}})}}