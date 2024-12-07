/** STATIC, PRIVATE VÀ PUBLIC 
 * static: xác định 1 thành phần thuộc về class, không thuộc vè instance của class đó 
 * static <method / proprty> 
 * VD: 
 * 
 * 2. Private 
 * private: xác định 1 thành phần là private, không thể truy cập ngoài class 
 * -> Kể cả khi tạo ra instance thì cũng khoog truy cập được 
 * Cú pháp khai báo: #<ten bien / method> 
 * 3. Public 
 * - Xác định 1 biến có thể truy cập bên ngoài 
 * -> Tạo ra instance mới truy cập được 
 * 
 */
class BankAccount 
{
    #balance; //khai bao private 
    constructor(balance) 
    {
        this.#balance = balance; 
    }
    deposit(amout) 
    {
        if (amout <= 0) 
        {
            console.log('Invalid...'); 
            return; 
        }
        this.#balance += amout; 
    }
    widrawth(amout) 
    {
        if (amout <= 0) {
            console.log('Invalid...'); 
            return; 
        }
        else if (amout > this.#balance) {
            console.log('Khong du tien'); 
            return; 
        }
        else 
        {
            this.#balance -= amout; 
        }
    }
    get getBalance() 
    {
        return (this.#balance); 
    }
}
let user = new BankAccount(500); 
user.deposit(100); 
console.log(user.getBalance); 
user.deposit(200); 
console.log(user.getBalance); 
user.widrawth(300); 
console.log(user.getBalance); 