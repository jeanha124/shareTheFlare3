# README

ShareTheFlare is a clone of Flickr, a photo sharing site. It uses Ruby on Rails for the back-end, React-Redux on the front-end, and aws for the storage database.

Live: https://share-the-flare.herokuapp.com/#/

Users can upload photos and look at photos of the users they follow.
Users can create, edit, delete an album.
Users can create, delete comments within the photos.


# Technologies
#### Backend
 - Ruby on Rails
 - PostgreSQL
 - AJAX with JSON api

#### Frontend
 - React
 - Redux
 - BCrypt
 
# Features

## User Authentication

With Rails as the backend, a password digest is stored into the database when using BCrypt in order to have the content encrypted. When logging in, the email and password will be compared to data within the database.

![Login Modal Page](Login-pic.png)

## 
- Photos
  - Users can post photos
  - User index page shows all the photos uploaded by the user
  - User index page consists of an albums tab which leads to the albums index page.
  - Users can post comments on the photos.

- Albums
  - Users can create albums and add multiple photos
  - Album index page shows all of the albums uploaded by the user
  - Album show page shows all of the photos within the selected album
  - Album edit page opens the edit form to add more photos.
  - Album delete button deletes the album





# Future Implementations
- Tags
- Favorites
- Followers
- Better UI experience
- Slider for both the splash page and photo show pages
