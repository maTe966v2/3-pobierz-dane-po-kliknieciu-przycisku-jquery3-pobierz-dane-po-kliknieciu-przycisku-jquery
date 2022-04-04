// $(function () {
//     let user = {
//         userId: "",
//         id: "",
//         title: "",
//         body: "",
//     };

//     const createUser = () => {
//         $(".user").html(
//             `<p>User ID: ${user.userId}</p><p>ID: ${user.id}</p><p>title: ${user.title}</p><p>body: ${user.body}</p>`
//         );
//     };

//     $(".get-data").click(function () {
//         $.get("https://akademia108.pl/api/ajax/get-post.php", function (data) {
//             user.userId = data.userId;
//             user.id = data.id;
//             user.title = data.title;
//             user.body = data.body;
//             console.log(data);
//             createUser();
//         });
//     });
// });

$(function () {
    let user = {
        userId: "",
        id: "",
        title: "",
        body: "",
    };

    const createUser = () => {
        $(".user").html(
            `<p>User ID: ${user.userId}</p><p>ID: ${user.id}</p><p>title: ${user.title}</p><p>body: ${user.body}</p>`
        );
    };

    $(".get-data").click(function () {
        $.getJSON(
            "https://akademia108.pl/api/ajax/get-post.php",
            function (data) {
                user.userId = data.userId;
                user.id = data.id;
                user.title = data.title;
                user.body = data.body;

                createUser();
            }
        );
    });
});
