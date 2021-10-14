$(function() {
    var products = [];

    $.ajax({
       url: 'https://fakestoreapi.com/products',
       dataType: 'json',
       success: successHandler,
       error: errorHandler

    });

    function successHandler(response) {
        console.log(response);
        products = response;
    };

    function errorHandler(response){
        console.log(response);
    }
    
    $('#search').click(function(){
        const search = $("#search-text").val();
        // let filetSearch = products.filter(p=>p.price === search);
        let filteredArray = products.filter(p => p.title.includes(search)
                               || p.description.includes(search)
                               || p.category.includes(search));
        fillTable(filteredArray);
    })

    function fillTable(array){
        if(array.length > 0){
            $('#table').removeClass('invisible');
            let rows = '';
        array.forEach(function(item){
            rows +='<tr>'+
      '<td><img src="'+item.image+'" class="image-thumbnail" alt="..."></td>'+
      '<td>'+ item.title +'</td>'+
      '<td>'+ item.category +'</td>'+
      '<td>'+ item.description +'</td>'+
      '<td class="qty-input">'+
      '<div class="input-group mb-3">'+
      '<span class="input-group-text">-</span>'+
      '<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">'+
      '<span class="input-group-text">+</span>'+
      '</div>'+
      '</td>'+
      '<td>'+item.price+'</td>'+
      '</tr>'
        });
    $('table tbody').html(rows);
        }else{

        }
    }

 });
 let text = 'Hello world';
 $('#test').text(text);
