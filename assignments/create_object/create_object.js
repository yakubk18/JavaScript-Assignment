function CreateObject(arr) {
    // Write your code here
    var _object = {}
    for(var i=0; i<arr.length; i+=2){
        _object[arr[i]] = arr[i+1]
    }
    return _object;
}

module.exports = CreateObject;
