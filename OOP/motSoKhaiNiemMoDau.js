/** MỘT SỐ KHÁI NIỆM BỔ TRỢ 
 * 1. Từ khóa ngữ cảnh this và new 
 * - this: tham chiếu tới đối tượng hiện đang làm việc 
 * VD: Array -> từ khóa this thì tham chiếu tới 1 array được tạo ra 
 * VD: function constructor -> từ khóa this tham chiếu tới instance được tạo ra 
 * Object -> tham chiếu tới đối tượng đang lam việc 
 * - new: khởi tạo 1 instance 
 * 2. Prototype 
 * - Person.prototype: là 1 đối tượng chứa các PT, thuộc tính mà Person chia sẻ
 * - Prototye chỉ tồn tại trên function constructor. Khi khởi tạo 1 instance 
 * thì các instance đó sẽ kế thừa prototype tư function constructor thông qua 1 liên 
 * kết đặc biệt __prototype__ 
 * - Prototype khoog lồng nhau: Vd: a.prototype.prototype (x) 
 * 3. Prototype chaining 
 * - Một đối tượng cũng có 1 liên kết tới prototype của chính nó, thông qua thuộc 
 * tính ẩn __prototype__ 
 * - Cơ chế tìm kiếm: Mỗi khi truy cập tới 1 thuộc tính -> ktra xem có tồn tại trên 
 * đối tượng đó không -> tìm kiếm trên prototye -> tìm kiếm tiếp trên prototype của
 * prototype.... -> null -> prototype chain
 * 4. Constructor 
 * - Trong js, mỗi cái kế thừa từ A sẽ có constructor trỏ tới cha A 
 * - Khi đặt lại prototype, nó có thể bị sai lệch -> ta phải gán lại constructor 1 cách thủ công 
 * <doi tuong ke thua>.constructor = <cha> 
 * 
 */