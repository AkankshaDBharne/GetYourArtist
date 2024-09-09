const artistsData = [
  {
    "_id": "66b95fe34f9db8071a9a1424",
    "first_name": "John",
    "last_name": "Doe",
    "gender": "Male",
    "genre": "Musician", // Updated genre
    "email": "johndoe@example.com",
    "website": "http://johndoe.com",
    "contact_number": "+1234567890",
    "address": "Hyderabad", // Updated address
    "password": "hashed_password",
    "id_Proof": 123456789,
    "photos": [
      "/Images/ArtistG1.png",
      "/Images/ArtistG2.png"
    ],
    "profilePhoto": "/Images/ArtistProfile1.png",
    "about_work": "John Doe is a Musician...",
    "socialMedia": {
      "facebook": "http://facebook.com/johndoe",
      "instagram": "http://instagram.com/johndoe",
      "twitter": "http://twitter.com/johndoe",
      "snapchat": "http://snapchat.com/johndoe"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a1425",
    "first_name": "Jane",
    "last_name": "Smith",
    "gender": "Female",
    "genre": "Singer/Songwriter", // Updated genre
    "email": "janesmith@example.com",
    "website": "http://janesmith.com",
    "contact_number": "+9876543210",
    "address": "Mumbai", // Updated address
    "password": "hashed_password",
    "id_Proof": 987654321,
    "photos": [
      "/Images/ArtistG1.png",
      "photo4.jpg"
    ],
    "profilePhoto": "/Images/ArtistProfile2.png",
    "about_work": "Jane Smith is a Singer/Songwriter...",
    "socialMedia": {
      "facebook": "http://facebook.com/janesmith",
      "instagram": "http://instagram.com/janesmith",
      "twitter": "http://twitter.com/janesmith",
      "snapchat": "http://snapchat.com/janesmith"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a1426",
    "first_name": "Alice",
    "last_name": "Johnson",
    "gender": "Female",
    "genre": "Visual Artist", // Updated genre
    "email": "alicejohnson@example.com",
    "website": "http://alicejohnson.com",
    "contact_number": "+1122334455",
    "address": "Bengaluru", // Updated address
    "password": "hashed_password",
    "id_Proof": 112233445,
    "photos": [
      "/Images/ArtistG1.png",
      "photo6.jpg"
    ],
    "profilePhoto": "/Images/ArtistProfile3.png",
    "about_work": "Alice Johnson is a Visual Artist...",
    "socialMedia": {
      "facebook": "http://facebook.com/alicejohnson",
      "instagram": "http://instagram.com/alicejohnson",
      "twitter": "http://twitter.com/alicejohnson",
      "snapchat": "http://snapchat.com/alicejohnson"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a1427",
    "first_name": "Emma",
    "last_name": "Brown",
    "gender": "Female",
    "genre": "Dance Performer", // Updated genre
    "email": "emmabrown@example.com",
    "website": "http://emmabrown.com",
    "contact_number": "+3344556677",
    "address": "Kolkata", // Updated address
    "password": "hashed_password",
    "id_Proof": 334455667,
    "photos": [
      "/Images/ArtistG2.png",
      "/Images/ArtistG1.png0.jpg"
    ],
    "profilePhoto": "/Images/ArtistProfile4.png",
    "about_work": "Emma Brown is a Dance Performer...",
    "socialMedia": {
      "facebook": "http://facebook.com/emmabrown",
      "instagram": "http://instagram.com/emmabrown",
      "twitter": "http://twitter.com/emmabrown",
      "snapchat": "http://snapchat.com/emmabrown"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a1428",
    "first_name": "Bob",
    "last_name": "Williams",
    "gender": "Male",
    "genre": "DJ", // Updated genre
    "email": "bobwilliams@example.com",
    "website": "http://bobwilliams.com",
    "contact_number": "+2233445566",
    "address": "Chennai", // Updated address
    "password": "hashed_password",
    "id_Proof": 223344556,
    "photos": [
      "/Images/ArtistG1.png",
      "/Images/ArtistG2.png"
    ],
    "profilePhoto": "/Images/ArtistProfile1.png",
    "about_work": "Bob Williams is a DJ...",
    "socialMedia": {
      "facebook": "http://facebook.com/bobwilliams",
      "instagram": "http://instagram.com/bobwilliams",
      "twitter": "http://twitter.com/bobwilliams",
      "snapchat": "http://snapchat.com/bobwilliams"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a1429",
    "first_name": "Michael",
    "last_name": "Davis",
    "gender": "Male",
    "genre": "Vocalist", // Updated genre
    "email": "michaeldavis@example.com",
    "website": "http://michaeldavis.com",
    "contact_number": "+4455667788",
    "address": "Hyderabad", // Updated address
    "password": "hashed_password",
    "id_Proof": 445566778,
    "photos": [
      "/Images/ArtistG1.png",
      "/Images/ArtistG3.png"
    ],
    "profilePhoto": "/Images/ArtistProfile1.png",
    "about_work": "Michael Davis is a Vocalist...",
    "socialMedia": {
      "facebook": "http://facebook.com/michaeldavis",
      "instagram": "http://instagram.com/michaeldavis",
      "twitter": "http://twitter.com/michaeldavis",
      "snapchat": "http://snapchat.com/michaeldavis"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a142a",
    "first_name": "Olivia",
    "last_name": "Martinez",
    "gender": "Female",
    "genre": "Poet", // Updated genre
    "email": "oliviamartinez@example.com",
    "website": "http://oliviamartinez.com",
    "contact_number": "+5566778899",
    "address": "Mumbai", // Updated address
    "password": "hashed_password",
    "id_Proof": 556677889,
    "photos": [
      "/Images/ArtistG2.png",
      "/Images/ArtistG3.png"
    ],
    "profilePhoto": "/Images/ArtistProfile2.png",
    "about_work": "Olivia Martinez is a Poet...",
    "socialMedia": {
      "facebook": "http://facebook.com/oliviamartinez",
      "instagram": "http://instagram.com/oliviamartinez",
      "twitter": "http://twitter.com/oliviamartinez",
      "snapchat": "http://snapchat.com/oliviamartinez"
    }
  },
  {
    "_id": "66b95fe34f9db8071a9a142b",
    "first_name": "Liam",
    "last_name": "Garcia",
    "gender": "Male",
    "genre": "Street Performer", // Updated genre
    "email": "liamgarcia@example.com",
    "website": "http://liamgarcia.com",
    "contact_number": "+6677889900",
    "address": "Chandigarh", // Updated address
    "password": "hashed_password",
    "id_Proof": 667788990,
    "photos": [
      "/Images/ArtistG2.png",
      "/Images/ArtistG1.png"
    ],
    "profilePhoto": "/Images/ArtistProfile1.png",
    "about_work": "Liam Garcia is a Street Performer...",
    "socialMedia": {
      "facebook": "http://facebook.com/liamgarcia",
      "instagram": "http://instagram.com/liamgarcia",
      "twitter": "http://twitter.com/liamgarcia",
      "snapchat": "http://snapchat.com/liamgarcia"
    }
  }
];

export default artistsData;
