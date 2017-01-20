List.create!([

  {author_id: 1, title: "Farmers Market"},
  {author_id: 1, title: "Chores"},
  {author_id: 1, title: "Work"},
  {author_id: 1, title: "Help Others"}
])
User.create!([
  {first_name: "Guest", last_name: "demo", user_name: "demo", password_digest: "$2a$10$GxhDn1rE9/KP1Cyh.l4V1efWvAVXz8E138KUGHbZuYT17AY.Ct9xq", session_token: "Lb-yAGpNfwZSkZTUffkbbw"},
  {first_name: "Craig", last_name: "Scott", user_name: "cts85", password_digest: "$2a$10$66FZMpyhBbcz0wo9uGhTU.WvSEoBNRWI8E.wQbppkTWz58AJXdWAW", session_token: "To49IedHjbXUJYWan3Szog"},
  {first_name: "Katarina", last_name: "Rossi", user_name: "dischorde", password_digest: "$2a$10$R/A68UU7WHoPntH3pVm5YeLXY6NfGWBUbXsVlhTejn8K7VxWv8lby", session_token: "aa_DZk6dsSJDQRmkzYlsAA"},
  {first_name: "Jeff", last_name: "Gronewold", user_name: "tank_top", password_digest: "$2a$10$iEX7KCrcFmY6db.MXgWjfOhba3I4YjJQgApAyRfvNLPGBimwbLj0G", session_token: "sE_jIrg29ucaj--BSNBDfQ"},
  {first_name: "Scot", last_name: "Mosher", user_name: "scck", password_digest: "$2a$10$Z30ySsIs7NQNf96woV7opOpVkw38mtDtdC8Fmg3uQjp6nCP8Mi9le", session_token: "dQ0Z5fepxlYqHGDySgYC7A"},
  {first_name: "Alex", last_name: "Sherman", user_name: "Wesele", password_digest: "$2a$10$B.WgrWSYQnCgN776CzhOheQuJ0EVGpJf/bY0/f3dvHuNpykquYAmq", session_token: "NWKIvZJ2303UmjfJ88pY2Q"}
])
Task.create!([
  {title: "Brussel Sprouts", list_id: 1, done: true},
  {title: "Cheese", list_id: 1, done: false},
  {title: "Split fire wood", list_id: 2, done: false},
  {title: "Put dishes away", list_id: 2, done: false},
  {title: "Vacuum living room", list_id: 2, done: true},
  {title: "Laundry", list_id: 2, done: true},
  {title: "Kettle Corn", list_id: 1, done: true},
  {title: "Flowers", list_id: 1, done: true},
  {title: "Honey", list_id: 1, done: false},
  {title: "Apples", list_id: 1, done: true},
  {title: "Plan retirement party", list_id: 3, done: false},
  {title: "Find new candidate ", list_id: 3, done: false},
  {title: "Contact client", list_id: 3, done: false},
  {title: "Tomatoes", list_id: 1, done: false},
  {title: "Paper goods", list_id: 1, done: false},
  {title: "Mow lawns", list_id: 4, done: false},
  {title: "Bring in paper", list_id: 4, done: false}
])
