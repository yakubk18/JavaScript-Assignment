function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence==true) {
        if (isTired==true || isSober==false){
            return "You shouldn't drive"
        }else{
            return "You can drive"
        }
    }else{
        return "You cannot drive"
    }

}

module.exports = CanDrive;
