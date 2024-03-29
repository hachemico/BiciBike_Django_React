from django.db import models

from biciBike.core.models import TimestampedModel


class Profile(TimestampedModel):
    # As mentioned, there is an inherent relationship between the Profile and
    # User models. By creating a one-to-one relationship between the two, we
    # are formalizing this relationship. Every user will have one -- and only
    # one -- related Profile model.
    user = models.OneToOneField(
        'authentication.User', on_delete=models.CASCADE
    )

    # Each user profile will have a field where they can tell other users
    # something about themselves. This field will be empty when the user
    # creates their account, so we specify `blank=True`.
    bio = models.TextField(blank=True)

    # In addition to the `bio` field, each user may have a profile image or
    # avatar. Similar to `bio`, this field is not required. It may be blank.
    image = models.URLField(blank=True)

    # This is an example of a Many-To-Many relationship where both sides of the
    # relationship are of the same model. In this case, the model is `Profile`.
    # As mentioned in the text, this relationship will be one-way. Just because
    # you are following mean does not mean that I am following you. This is
    # what `symmetrical=False` does for us.
    
    rentActive = models.BooleanField(default=False,db_index=True,blank=True)
    
    follows = models.ManyToManyField(
        'self',
        related_name='followed_by',
        symmetrical=False
    )

    favorites = models.ManyToManyField(
        'bikes.Bike',
        related_name='favorited_by'
    )


    def __str__(self):
        # return self.user.username
        data=(
                self.user.username,
                self.bio,
                self.image,
                self.rentActive,
            )
        return str(data)

    def follow(self, profile):
        """Follow `profile` if we're not already following `profile`."""
        self.follows.add(profile)

    def unfollow(self, profile):
        """Unfollow `profile` if we're already following `profile`."""
        self.follows.remove(profile)

    def is_following(self, profile):
        """Returns True if we're following `profile`; False otherwise."""
        return self.follows.filter(pk=profile.pk).exists()

    def is_followed_by(self, profile):
        """Returns True if `profile` is following us; False otherwise."""
        return self.followed_by.filter(pk=profile.pk).exists()




    def favorite(self, bike):
        print("Entra model-favorite")
        """Favorite `article` if we haven't already favorited it."""
        self.favorites.add(bike)

    def unfavorite(self, bike):
        print("Entra model-UNfavorite")
        """Unfavorite `article` if we've already favorited it."""
        print(bike)
        self.favorites.remove(bike)

    def getfavorites(self):
        print("Entra model- GET FAVORITES")
        """List favorites bikes for the user."""
        user_favorites=self.favorites.all()
        bikes=[]
        for bike in user_favorites:
            bikes.append(bike.id)

        return bikes

    def has_favorited(self, bike):
        """Returns True if we have favorited `article`; else False."""
        return self.favorites.filter(pk=bike.pk).exists()
