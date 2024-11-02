/** FUNCTION CONSTRUCTOR 
 * 1. Function constructor 
 * function <name>(danh sach tham so) {    }
 * - Truy cập prototype của constructor 
 * <name>.prototype.<name moi> = value; 
 * - Mẹo: rest parameters: khi truyền nhiều tham số, trong hàm nhận có thể dùng rest para 
 * để gom tụi nó thành 1 mảng duy nhất
 * ...args -> args[0]: tham số 1, args[1]: tham số 2... 
 * 2. Kế thừa function constructor 
 * - Kế thừa không hẳn là tạo ra 1 bản sao (instance) mà có thể sử dụng chung (prototye) 
 * Cách kế thừa A từ functionc constructor B 
 * A.call(this,para): Gọi constructor A trong ngữ cảnh this của B 
 * B.prototype = Object.create(A.prototype); -> Tạo một đối tượng mới với 
 * __prototype__ trỏ tới A.prototype và gán nó dô B 
 * B.prototye.constructor = B; //Gan lai constructor sau khi kế thừa prototype 
 * 3. Object constructor 
 * - Object constructor chính là blueprint của tất cả các constructor 
 * - Một object, function constructor, prototype... đều kế thừa từ 
 * Object constructor
 */