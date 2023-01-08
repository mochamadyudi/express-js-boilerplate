const ObjResolve = function(obj = {},key = ''){
    if( obj &&  Object.keys(obj).length > 0 && typeof(obj[key]) !== "undefined" && obj[key] !== "" && obj[key] !== null){
        Reflect.set(obj,key,obj[key])

        return obj[key]
    }
    return null
}

const StrToBoolean = function(str,val = '') {
    try{
        if(typeof(str) !== "undefined" && str !== null && str !== ""){
            if(typeof(val) !== 'undefined' && str === val){
                return true
            }
            if(Boolean(str)){
                return JSON.parse(str)
            }
        }
        return false
    }catch(err){
        return false
    }
}

const QueryResolve = (obj = {},key = '')=> {
    if( obj &&  Object.keys(obj).length > 0 && typeof(obj[key]) !== "undefined" && obj[key] !== "" && obj[key] !== null){
        Reflect.set(obj,key,obj[key])

        return obj[key]
    }
    return null
}

let Helper = {
    ObjResolve,
    StrToBoolean,
    QueryResolve
}

global.Helper = Helper
Object.keys(Helper).forEach((key)=> {
    global[key]= Helper[key]
})