var sum = function(x,y){
    return x + y;
};
alert(sum(10,20));

function Star(uname,age,sex){
    this.mingzi = uname;
    this.nianling = age;
    this.xingbie = sex;
}
var ldh = new Star("刘德华",18,"男");
document.write(typeof ldh);
document.write(ldh.mingzi);
var zxy = new Star("张学友",20,"女");
document.write(zxy["nianling"]);







