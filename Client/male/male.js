// CONVERT THIS TO REACT


function display(url)
{
    var req = new XMLHttpRequest();
    req.open("GET",url, true);
    req.responseType = 'document';

    req.onload = () => {
        if (req.status === 200) {
            var elements = req.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpg)$/)) {
                    let img = document.createElement("img");
                    img.src = x.href;
                    document.body.appendChild(img);
                }
            };
        }
        else {
            alert('Request failed.' + req.status);
        }
    }
    req.send()
}

display("../../Classified_Images/male")









// GET THIS TO WORK
// $.ajax({
//     url: "YOUR FOLDER",
//     success: function (data) {
//         $(data).find("a:contains(.jpg)").each(function () {
//             // will loop through 
//             var images = $(this).attr("href");

//             $('<p></p>').html(images).appendTo('a div of your choice')

//         });
//     }
// });


