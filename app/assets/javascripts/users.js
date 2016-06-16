$(document).ready(function() {
	var baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';

	if (location.pathname === '/') {
		// GET /users - lists all users
		function getUsers() {
      $.ajax({
        url: baseUrl,
        type: 'GET',
        dataType: 'JSON'
      }).done( function(data) {
				var tbody = $('#users');
        tbody.children().remove();
        data.users.forEach( function(user) {
					var name1 = user.first_name ? user.first_name : '0';
          var name2 = user.last_name ? user.last_name : '';
          var phone = user.phone_number ? user.phone_number : '';
          var row = '<tr data-id="' + user.id + '">';
              row += '<td>' + name1 + '</td>';
              row += '<td>' + name2 + '</td>';
              row += '<td>' + phone + '</td>';
              row += '</tr>';
              tbody.append(row);
				});
			}).fail( function(err) {
				alert('Something went wrong call support');
			});
		}

		getUsers();

	}

	$('#new_user').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
			url: baseUrl,
			type: 'POST',
			dataType: 'JSON',
			data: $(this).serializeArray()
		}).done( function() {
			location.pathname = '/';
		});
	})

	// TODO 
	// GET /users/id - lists a single user
	// POST /users
	// POST DATA:
	//  user[first_name] - required
	//  user[last_name] - required
	//  user[phone_number] - optional 

})