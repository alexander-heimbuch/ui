export default () => `
  {
    publishedPodcasts {
      episodes {
        id,
        image,
        duration
        title,
        description,
        publishedAt,
        content,
        podcast {
          id,
          title,
          image
        },

        enclosure {
          length,
          url,
          type
        },

        audio {
          duration
        }
      }
    }
  }
`
