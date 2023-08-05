# Random Songs

Displays a random song quote from the author of your choice.

## User Stories

```
AS A Content Creator
I WANT TO look up content for my work
SO THAT my writing becomes more entertaining

AS A Fan 
I WANT TO look up quotes from my favorite artists
SO THAT I can remind myself of their work

AS A Singer
I WANT TO study my fellow artists
SO THAT I can get inspired for my future work
```

## API description

When entering text in the input field, an API call is requested:

```
POST https://songsexcerpt.mohd.app/artists/search
Payload: {"artist_name":"stevie ni"}

Response: 

[
   {
        "id": 581829,
        "name": "Elton John & Stevie Nicks"
   },
   {
        "id": 9763,
        "name": "Stevie Nicks"
   },
   {
        "id": 11465,
        "name": "Stevie Nicks & Kenny Loggins"
   }
]

When submitting a random song request for a given artist, we call:

GET https://songexcerpt.mohd.app/api/v1/getRandomExcerpt?artists=9763

Response (may vary because it is random):

{
    "artist": "Stevie Nicks",
    "song": "Love Changes",
    "lyrics_excerpt": "When love changes in the flash of an eye/nIt leaves people burning by the side of the road/nYou stand there you've got nothing you own/nFor the first time you are alone/nFor the first time you are alone"
}
```

## Notes

-`innerHTML` was used in the code to simplify markup generation. The unsafe nature of `innerHTML` does not pose a real threat in this application for learning purposes. In the unlikely case the API was hacked, we'll add defenses on client-side so that we don't render external malicious content.

## Sources

- Gitignore file: https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc
- API: https://songexcerpt.mohd.app/
