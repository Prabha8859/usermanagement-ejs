// const { name } = require("nodeman/lib/mustache");

$("#add_user").submit(function(event){
    window.location.href = "/"
    alert("Data Inserted Successfully!");
    
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

   $.map(unindexed_array, function(n,i){
    data[n['name']] = n['value']
   })

   var request = {
    "url" : `http://localhost:3002/api/users/${data}`,
    "method":"PUT",
    "data":data
   }
   $.ajax(request).done(function(response){
    window.location.href = "/"
    alert("Data Updated Syccessfully");
   })
//    console.log(data);
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3002/api/users?id=${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                console.log("---->"+response);
                alert("Data Delete Successfully!");
                // location.reload()
                
            })
        }
    })
}