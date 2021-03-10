# ma11northam-photos-from-airtable

A very basic [eleventy site](https://www.11ty.dev/) to pull data from Airtable and render it as json (to be used on [mattnortham.com](https://www.mattnortham.com)).

I build this locally, grab the json and use that in my other 11ty build. Yes, I _could_ probably do this all at the same time within the same pipeline, but at the moment I like having the distinction between those areas. It allows me full control over when the updates go live, amongst other things.

- Based on this eleventy starter site: https://github.com/bjankord/eleventy-site
- And this incredibly helpful article by Dana Byerly [Using Airtable with Eleventy](https://danabyerly.com/articles/using-airtable-with-eleventy/)

### Build the static site
```
npm run build
```