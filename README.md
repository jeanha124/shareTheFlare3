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
 - AWS S3
 - AJAX with JSON api

#### Frontend
 - React
 - Redux
 - BCrypt
 
# Features

## User Authentication

With Rails as the backend, a password digest is stored into the database when using BCrypt in order to have the content encrypted. When logging in, the email and password will be compared to data within the database.

![Login Modal Page](Login-pic.png)

## User Photos

When a user uploads a photo, it will show up on their profile page. When entering into the photo, the user can edit or even delete the photo through the association between Users and Photos.

![User PhotoStream](photostream.gif)

![Photo Delete](photo-delete.gif)

## Comments

Within a photo, a user can create and delete comments.

Create
![Comment Create](comment-create.gif)

Delete
![Comment Delete](comment-delete.gif)


## Creating an Album

When creating an album, joins associations are used to create an album with multiple photos by the same user.

![Album Create](album-create.gif)


## Albums

Album index page shows all of the albums uploaded by the user
Album show page shows all of the photos within the selected album
Album edit page opens the edit form to add more photos.
Album delete button deletes the album
![Album Index](album-index.gif)

Show
![Album Show](album-show.gif)

Edit
![Album Edit](album-edit.gif)

Delete
![Album Delete](album-delete.gif)


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
