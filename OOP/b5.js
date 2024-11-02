//Tao ra 1 ban thiet ke cho Car, cap nhat them ke thua gia tien cho cac hang tesla, Ford 
function Car(name,year) 
{
    this.name = name; 
    this.year = year; 
}
function Tesla(coin,name,year) 
{
    this.coin = coin; 
    Car.call(this,name,year);
}
Tesla.prototype = Object.create(Car.prototype); 
Tesla.prototype = Tesla; 
