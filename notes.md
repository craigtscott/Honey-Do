$.ajax({
    type: 'POST',
    url: 'api/session',
    data: {user: {first_name: 'Craig',
                  last_name: 'Scott',
                  user_name: 'cts85',
                  password: 'password'}}
})
$.ajax({
    type: 'POST',
    url: 'api/users',
    data: {user: {first_name: 'Jeff',
                  last_name: 'Gronewold',
                  user_name: 'tanktop',
                  password: 'password'}}
})

$.ajax({
  type: 'DELETE',
  url: 'api/session'
})
