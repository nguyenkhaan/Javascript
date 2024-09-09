/** Cấu trúc dữ liệu Map: 
 * Khai báo: var ten_map = new Map(); 
 * ten_map.set(key,value): Thêm 1 cặp key,value 
 * ten_map.get(key,value): Lấy 1 cặp key value 
 * --> Map khong thể thay đổi tùy tiện value mà phải qua phương thức set 
 * tem_map.set(key,map.get(key) + val); 
 * ten_map.has(key): Kiểm tra xem key có tồn tại trong map không 
 * ten_map.delete(key): xóa 1 key 
 * ten_map.size: trả về số lượng 
 * ten_map.clear(): xóa hết dữ liệu 
 * 
 */
function twoSum(nums,target) 
{
    const mp = new Map(); 
    for (let i = 0; i<nums.length; ++i) 
    {
        const complete = target - nums[i]; 
        if (mp.has(complete)) {
            return [mp.get(complete),i];  
        }
        mp.set(nums[i],i); 
    }
    return []; 
}
const readLine = require('prompt-sync')(); 
let [n,target] = readLine().split(' ').map(x => Number(x.trim())); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
console.log(twoSum(a,target)); 
