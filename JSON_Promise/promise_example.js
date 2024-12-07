var users = [
    {
        id: 1, 
        name: 'Kien Dam'
    }, 
    {
        id :2 , 
        name: 'Son Dang' 
    }, 
    {
        id : 3, 
        name: 'Hung Dam'
    }
]; 
var comments = [
    {
        id : 1, 
        user_id: 1, 
        content: 'Anh Son chua ra video' 
    }, 
    {
        id : 2, 
        user_id: 2, 
        content: 'Vua ra xong em oi'
    }
]
//1. Lay comment 
//2. Tu comment, lay ra user_id 
//3. Tu user_id, lay ra user tuong ung 
//fake API 
function getComment() 
{
    return new Promise(
        function(resolve) 
        {
            setTimeout(function() {
                resolve(comments)
            },1000)
        }
    )
}

function getUserByIDs(userIDs) 
{
    return new Promise(
        function(resolve) 
        {
            var res = users.filter((user) => userIDs.includes(user.id))
            resolve(res); 
        }
    )
}
getComment() 
    .then(function(comments) {
        var userIDs = comments.map(function(comment) {
            return comment.user_id; 
        }); 
        return getUserByIDs(userIDs) 
            .then(function(user) {
                return {
                    user: user, 
                    cmt: comments 
                }
            })
    })
    .then(function(data) {
        console.log(data); 
        console.log(data instanceof Object); 
    }); 
    //Bản chất là trả về 1 object, sau đó object đó lại truyền dữ liệu sang .then thứ 3 
